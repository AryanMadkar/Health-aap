import streamlit as st
import numpy as np
from processing.data_processing import scale_data
from model.loadmodel import diabitie_model


def diabetes_prediction_page():
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

    if st.button("Predict Diabetes"):
        input_data = [
            [pregnancies, glucose, bp, skin_thickness, insulin, bmi, dpf, age]
        ]
        input_data = np.asarray(input_data).reshape(1, -1)

        # Assuming scaler is predefined
        scaled_data, _ = scale_data(input_data)
        result = diabitie_model.predict(scaled_data)

        if result[0] == 1:
            st.error("The model predicts that you are likely to have diabetes.")
        else:
            st.success("The model predicts that you are unlikely to have diabetes.")
