import streamlit as st
import numpy as np
from model.loadmodel import insurancemodel


def insurancepage():
    st.title("Insurance Prediction")
    st.markdown(
        "This app predicts the cost of a person's insurance based on their health data."
    )

    col1, col2, col3 = st.columns(3)

    with col1:
        # Ensure min_value, max_value, and step are integers
        age = st.number_input("Age", min_value=18, max_value=99, step=1, format="%d")
        sex = st.selectbox("Sex", options=["Male", "Female"])
        sex = 1 if sex == "Male" else 0

    with col2:
        # Ensure step is a float since BMI is a float
        bmi = st.number_input(
            "BMI", min_value=10.0, max_value=50.0, step=0.1, format="%.1f"
        )
        children = st.number_input(
            "Number of Children", min_value=0, max_value=5, step=1, format="%d"
        )

    with col3:
        smoker = st.selectbox("Smoker", options=["Yes", "No"])
        smoker = 1 if smoker == "Yes" else 0
        region = st.selectbox(
            "Region", options=["southwest", "southeast", "northwest", "northeast"]
        )
        region = {"southwest": 1, "southeast": 2, "northwest": 3, "northeast": 4}[
            region
        ]

    if st.button("predict insurance"):
        # Create input array
        inputs = np.array([age, sex, bmi, children, smoker, region]).reshape(1, -1)

        # Predict the insurance cost
        result = insurancemodel.predict(inputs)

        if result is not None:
            return st.success(f"Predicted insurance cost: ${result[0]:.2f}")
