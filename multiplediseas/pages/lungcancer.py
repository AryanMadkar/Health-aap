import streamlit as st
import numpy as np
from processing.data_processing import scale_data
from model.loadmodel import lungcancer_model


def lung_cancer_prediction():
    st.title("Lung Cancer Prediction")
    st.markdown(
        "This app predicts whether a patient has lung cancer based on their health data."
    )

    # Create columns for input fields
    col1, col2, col3, col4 = st.columns(4)
    with col1:
        gender = st.selectbox("Gender", options=["Male", "Female", "Other"])
        gender = 1 if gender == "Male" else 0
        age = st.number_input("Age", min_value=1, max_value=150, step=1)
        smoking = st.selectbox("Smoking", options=["Yes", "No"])
        smoking = 2 if smoking == "Yes" else 1
        yellow_finger = st.selectbox("Yellow Fingers", options=["Yes", "No"])
        yellow_finger = 2 if yellow_finger == "Yes" else 1

    with col2:
        anxiety = st.selectbox("Anxiety", options=["Yes", "No"])
        anxiety = 2 if anxiety == "Yes" else 1
        peer_pressure = st.selectbox("Peer Pressure", options=["Yes", "No"])
        peer_pressure = 2 if peer_pressure == "Yes" else 1
        chronic_disease = st.selectbox("Chronic Disease", options=["Yes", "No"])
        chronic_disease = 2 if chronic_disease == "Yes" else 1
        fatigue = st.selectbox("Fatigue", options=["Yes", "No"])
        fatigue = 2 if fatigue == "Yes" else 1

    with col3:
        allergy = st.selectbox("Allergy", options=["Yes", "No"])
        allergy = 2 if allergy == "Yes" else 1
        wheezing = st.selectbox("Wheezing", options=["Yes", "No"])
        wheezing = 2 if wheezing == "Yes" else 1
        alcohol = st.selectbox("Alcohol Consumption", options=["Yes", "No"])
        alcohol = 2 if alcohol == "Yes" else 1
        coughing = st.selectbox("Coughing", options=["Yes", "No"])
        coughing = 2 if coughing == "Yes" else 1

    with col4:
        shortness_of_breath = st.selectbox("Shortness of Breath", options=["Yes", "No"])
        shortness_of_breath = 2 if shortness_of_breath == "Yes" else 1
        swallowing_difficulty = st.selectbox(
            "Swallowing Difficulty", options=["Yes", "No"]
        )
        swallowing_difficulty = 2 if swallowing_difficulty == "Yes" else 1
        chest_pain = st.selectbox("Chest Pain", options=["Yes", "No"])
        chest_pain = 2 if chest_pain == "Yes" else 1

    # Prediction button
    if st.button("Predict Lung Cancer"):
        # Collect input data into a single array
        input_data = [
            [
                gender,
                age,
                smoking,
                yellow_finger,
                anxiety,
                peer_pressure,
                chronic_disease,
                fatigue,
                allergy,
                wheezing,
                alcohol,
                coughing,
                shortness_of_breath,
                swallowing_difficulty,
                chest_pain,
            ]
        ]

        # Convert input data to numpy array
        input_data_array = np.asarray(input_data).reshape(1, -1)

        # Scale the input data
        scaled_input_data, _ = scale_data(input_data_array)  # Renamed variable

        # Make prediction
        prediction = lungcancer_model.predict(scaled_input_data)

        # Display results
        if prediction[0] == 0:
            st.success("No Lung Cancer Detected")
            st.text("Please consult a healthcare professional for further guidance.")
        else:
            st.error("Lung Cancer Detected")
            st.text(
                "This patient is likely to have lung cancer. Consult a healthcare professional for further guidance."
            )


