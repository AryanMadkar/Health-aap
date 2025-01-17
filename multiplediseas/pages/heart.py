import streamlit as st
import numpy as np
from processing.data_processing import scale_data
from model.loadmodel import heart_model


def heart_prediction_page():
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
            "Number of Major Vessels Colored ", options=[0, 1, 2, 3, 4]
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
        # Convert input data to a NumPy array and scale it
        input_data_asarray = np.asarray(input_data).reshape(1, -1)
        scaled_data, _ = scale_data(input_data_asarray)

        # Predict using the loaded model
        result = heart_model.predict(scaled_data)

        # Display accuracy (optional, you can remove if not needed)
        st.subheader(f"This model is 84.71% accurate")

        # Display prediction result
        if result[0] == 1:
            st.error("The model predicts a high likelihood of heart disease.")
        else:
            st.success("The model predicts a low likelihood of heart disease.")
