import streamlit as st
import numpy as np
from processing.brestcancerprocessing import scale_data_brest
from model.loadmodel import brest_cancer_model


def brestcancer_prediction_page():
    st.title("Breast Cancer Prediction")
    st.markdown(
        "This app predicts whether a patient has breast cancer based on their health data."
    )

    col1, col2, col3 = st.columns(3)

    # Inputs for health data
    with col1:
        mean_radius = st.number_input(
            "mean_radius:", min_value=0.0, value=0.0, step=0.1, format="%.3f"
        )
        mean_texture = st.number_input(
            "mean_texture:", min_value=0.0, value=0.0, step=0.1, format="%.3f"
        )

    with col2:
        mean_perimeter = st.number_input(
            "mean_perimeter:", min_value=0.0, value=0.0, step=0.1, format="%.4f"
        )
        mean_area = st.number_input(
            "mean_area:", min_value=0.0, value=0.0, step=1.0, format="%.3f"
        )

    with col3:
        mean_smoothness = st.number_input(
            "mean_smoothness:", min_value=0.0, value=0.0, step=0.01, format="%.6f"
        )

    # When the user clicks the "Predict" button
    if st.button("Predict Breast Cancer"):

        # Convert inputs to a consistent list of floats
        input_data = [
            [
                mean_radius,
                mean_texture,
                mean_perimeter,
                mean_area,
                mean_smoothness,
            ]
        ]

        # Convert input data to a 2D NumPy array
        input_data_array = np.array(input_data, dtype=np.float64).reshape(1, -1)

        # Scale the data (assumes scale_data function returns the scaled data)
        scaled_data, _ = scale_data_brest(input_data_array)

        # Perform prediction
        prediction = brest_cancer_model.predict(scaled_data)
        print(prediction)

        # Display results
        if prediction[0] == 1:
            st.success("No Breast Cancer Detected")
            st.info("This patient is not likely to have breast cancer.")
        else:
            st.error("Breast Cancer Detected")
            st.info("This patient is likely to have breast cancer.")
