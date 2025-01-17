import pickle
import pandas as pd
import numpy as np
import streamlit as st
from streamlit_option_menu import option_menu
from sklearn.preprocessing import StandardScaler

# Load the models
diabetes_model = pickle.load(
    open(
        "C:/Users/aryan/OneDrive/Desktop/health_app/multiplediseas/diabitese.sav", "rb"
    )
)
with open(
    "C:/Users/aryan/OneDrive/Desktop/health_app/multiplediseas/heart_deseas.sav", "rb"
) as f:
    heartmodel = pickle.load(f)

# Load and preprocess data
diabitiesdata = pd.read_csv(
    "C:/Users/aryan/OneDrive/Desktop/health_app/diabities/diabetes.csv"
)
heartdata = pd.read_csv(
    "C:/Users/aryan/OneDrive/Desktop/health_app/heartdisies/heart_disease_data.csv"
)

heartx = heartdata.drop(columns="target", axis=1)
scalar2 = StandardScaler()
scalar2.fit(heartx)

xdia = diabitiesdata.drop(columns="Outcome", axis=1)
scalar = StandardScaler()
scalar.fit(xdia)

# Sidebar menu
with st.sidebar:
    selected = option_menu(
        "Multiple Disease Prediction System",
        ["Diabetes", "Breast Cancer", "Heart Disease"],
        default_index=0,
    )

# Diabetes Prediction
if selected == "Diabetes":
    st.title("Diabetes Prediction")
    st.subheader("Enter your health details below:")

    col1, col2, col3 = st.columns(3)

    with col1:
        pregnancies = st.number_input("Pregnancies", min_value=0, max_value=20, step=1)
        skin_thickness = st.number_input(
            "Skin Thickness (mm)", min_value=0, max_value=140
        )
        dpf = st.number_input("Diabetes Pedigree Function", min_value=0.0, step=0.01)

    with col2:
        glucose = st.number_input("Glucose Level", min_value=0, max_value=200)
        insulin = st.number_input("Insulin (IU/mL)", min_value=0, max_value=900)
        age = st.number_input("Age", min_value=1, max_value=150, step=1)

    with col3:
        bp = st.number_input("Blood Pressure (mm Hg)", min_value=0, max_value=300)
        bmi = st.number_input("BMI", min_value=0.0, max_value=80.0, step=0.1)

    # Prediction button
    if st.button("Predict Diabetes"):
        input_data = [
            [pregnancies, glucose, bp, skin_thickness, insulin, bmi, dpf, age]
        ]
        input_data_asarray = np.asarray(input_data)
        input_data_reshaped = input_data_asarray.reshape(1, -1)
        std_data = scalar.transform(input_data_reshaped)
        result = diabetes_model.predict(std_data)

        if result[0] == 1:
            st.error("The model predicts that you are likely to have diabetes.")
        else:
            st.success("The model predicts that you are unlikely to have diabetes.")

elif selected == "Heart Disease":
    st.title("Heart Disease Prediction")
    st.subheader("Enter your health details below:")
    col1, col2, col3 = st.columns(3)
    with col1:
        age = st.number_input("Age", min_value=1, max_value=150, step=1)
        sex = st.selectbox("Sex", options=["Male", "Female"])
        sex = 1 if sex == "Male" else 0

        cp = st.selectbox(
            "Chest Pain Type",
            options=[
                "Typical Angina",
                "Atypical Angina",
                "Non-Anginal Pain",
                "Asymptomatic",
            ],
        )
        cp = [
            "Typical Angina",
            "Atypical Angina",
            "Non-Anginal Pain",
            "Asymptomatic",
        ].index(cp)

        ca = st.selectbox(
            "Number of Major Vessels Colored by ", options=[0, 1, 2, 3, 4]
        )

    with col2:
        trestbps = st.number_input("Resting Blood Pressure (mm Hg)", min_value=0)
        chol = st.number_input("Cholesterol (mg/dL)", min_value=0)
        fbs = st.selectbox("Fasting Blood Sugar > 120 mg/dL", options=["No", "Yes"])
        fbs = 1 if fbs == "Yes" else 0

        restecg = st.selectbox(
            "Resting Electrocardiographic Results", options=["Normal", "Abnormal"]
        )
        restecg = 1 if restecg == "Abnormal" else 0

    with col3:
        thalach = st.number_input("Maximum Heart Rate Achieved", min_value=0)
        exang = st.selectbox("Exercise Induced Angina", options=["No", "Yes"])
        exang = 1 if exang == "Yes" else 0

        oldpeak = st.number_input(
            "ST Depression Induced by Exercise", min_value=0.0, step=0.1
        )

        thal = st.selectbox(
            "Thallium Stress Test Result",
            options=["Normal", "Fixed Defect", "Reversible Defect"],
        )
        thal = ["Normal", "Fixed Defect", "Reversible Defect"].index(thal)

        slope = st.selectbox(
            "Slope of the Peak Exercise ST Segment",
            options=["Upsloping", "Flat", "Downsloping"],
        )
        slope = ["Upsloping", "Flat", "Downsloping"].index(slope)

    # Prediction button
    if st.button("Predict Heart Disease"):
        input_data = [
            [
                age,
                sex,
                cp,
                trestbps,
                chol,
                fbs,
                restecg,
                thalach,
                exang,
                oldpeak,
                slope,
                ca,
                thal,
            ]
        ]
        input_data_asarray = np.asarray(input_data)
        input_data_reshaped = input_data_asarray.reshape(1, -1)
        std_data = scalar2.transform(input_data_reshaped)
        result = heartmodel.predict(std_data)

        st.subheader(f"This model is 0.8471074380165289 % accurate")

        if result[0] == 1:
            st.error("The model predicts a high likelihood of heart disease.")
        else:
            st.success("The model predicts a low likelihood of heart disease.")
