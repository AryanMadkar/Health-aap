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
diabitiesdata = pd.read_csv("C:/Users/aryan/OneDrive/Desktop/health_app/diabities/diabetes.csv")
xdia = diabitiesdata.drop(columns="Outcome",axis = 1)
scalar = StandardScaler()
scalar.fit(xdia)
standardx = scalar.transform(xdia)
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
        # Prepare the input data
        input_data = [
            [pregnancies, glucose, bp, skin_thickness, insulin, bmi, dpf, age]
        ]
        imputdata__asarray = np.asarray(input_data)
        input_data_reshaped = imputdata__asarray.reshape(1, -1)
        std_data = scalar.transform(input_data_reshaped)

        # Make the prediction
        result = diabetes_model.predict(std_data)

        # Display the result
        if result[0] == 1:
            st.error("The model predicts that you are likely to have diabetes.")
        else:
            st.success("The model predicts that you are unlikely to have diabetes.")
