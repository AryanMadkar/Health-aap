from flask import Flask, request, jsonify
import numpy as np

# Importing processing functions and models
from processing.diabitiespocessing import scale_data_diabetes
from processing.heartprocessing import scale_data_heart
from processing.lungcancerprocessing import scale_data_lung
from processing.brestcancerprocessing import scale_data_brest
from processing.liverprocessing import scale_data_liver
from model.loadmodel import (
    diabetes_model,
    heart_model,
    lung_cancer_model, 
    breast_cancer_model,
    insurance_model,
    liver_model,
)

app = Flask(__name__)


@app.route("/")
def welcome():
    return jsonify({"message": "Welcome to the Health App!"})


@app.route("/diabetes", methods=["POST"])
def diabetes():
    try:
        data = request.get_json()
        input_data = np.array(
            [
                [
                    data.get("pregnancies", 0),
                    data.get("glucose", 0),
                    data.get("bp", 0),
                    data.get("skin_thickness", 0),
                    data.get("insulin", 0),
                    data.get("bmi", 0.0),
                    data.get("dpf", 0.0),
                    data.get("age", 0),
                ]
            ]
        )
        scaled_data, _ = scale_data_diabetes(input_data)
        prediction = diabetes_model.predict(scaled_data)
        result = (
            "Yes, you are likely to have diabetes."
            if prediction[0] == 1
            else "No, you are unlikely to have diabetes."
        )
        return jsonify({"prediction": result})
    except Exception as e:
        return jsonify({"error": str(e)}), 500


@app.route("/heart", methods=["POST"])
def heart():
    try:
        data = request.get_json()
        # Safely handle missing or default values
        input_data = np.array(
            [
                [
                    data.get("age", 0),
                    data.get("sex", 0),
                    data.get("cp", 0),
                    data.get("trestbps", 0),
                    data.get("chol", 0),
                    data.get("fbs", 0),
                    data.get("restecg", 0),
                    data.get("thalach", 0),
                    data.get("exang", 0),
                    data.get("oldpeak", 0.0),
                    data.get("slope", 0),
                    data.get("ca", 0),
                    data.get("thal", 0),
                ]
            ]
        )
        # Scale input data using the heart scaler
        scaled_data, _ = scale_data_heart(input_data)
        # Predict using the preloaded heart model
        prediction = heart_model.predict(scaled_data)

        # Formulate response
        result = (
            "Yes, you are likely to have heart disease."
            if prediction[0] == 1
            else "No, you are unlikely to have heart disease."
        )
        return jsonify({"prediction": result})
    except Exception as e:
        return jsonify({"error": str(e)}), 500


@app.route("/lungcancer", methods=["POST"])
def lungcancer():
    try:
        data = request.get_json()
        input_data = np.array(
            [
                [
                    data.get("gender", 0),
                    data.get("age", 0),
                    data.get("smoking", 0),
                    data.get("yellow_finger", 0),
                    data.get("anxiety", 0),
                    data.get("peer_pressure", 0),
                    data.get("chronic_disease", 0),
                    data.get("fatigue", 0),
                    data.get("allergy", 0),
                    data.get("wheezing", 0),
                    data.get("alcohol", 0),
                    data.get("coughing", 0),
                    data.get("shortness_of_breath", 0),
                    data.get("swallowing_difficulty", 0),
                    data.get("chest_pain", 0),
                ]
            ]
        )
        scaled_data, _ = scale_data_lung(input_data)
        prediction = lung_cancer_model.predict(scaled_data)
        result = (
            "Yes, you are likely to have lung cancer."
            if prediction[0] == 1
            else "No, you are unlikely to have lung cancer."
        )
        return jsonify({"prediction": result})
    except Exception as e:
        return jsonify({"error": str(e)}), 500


@app.route("/breastcancer", methods=["POST"])
def breastcancer():
    try:
        data = request.get_json()
        input_data = np.array(
            [
                [
                    data.get("mean_radius", 0.0),
                    data.get("mean_texture", 0.0),
                    data.get("mean_perimeter", 0.0),
                    data.get("mean_area", 0.0),
                    data.get("mean_smoothness", 0.0),
                ]
            ]
        )
        scaled_data, _ = scale_data_brest(input_data)
        prediction = breast_cancer_model.predict(scaled_data)
        result = (
            "Yes, you are likely to have breast cancer."
            if prediction[0] == 1
            else "No, you are unlikely to have breast cancer."
        )
        return jsonify({"prediction": result})
    except Exception as e:
        return jsonify({"error": str(e)}), 500


@app.route("/insurance", methods=["POST"])
def insurance():
    try:
        data = request.get_json()
        input_data = np.array(
            [
                [
                    data.get("age", 0),
                    data.get("sex", 0),
                    data.get("bmi", 0.0),
                    data.get("children", 0),
                    data.get("smoker", 0),
                    data.get("region", 0),
                ]
            ]
        )
        prediction = insurance_model.predict(input_data)
        return jsonify({"prediction": float(prediction[0])})
    except Exception as e:
        return jsonify({"error": str(e)}), 500


@app.route("/liver", methods=["POST"])
def liver():
    try:
        data = request.get_json()
        input_data = np.array(
            [
                [
                    data.get("Age", 0),
                    data.get("Gender", 0),
                    data.get("BMI", 0.0),
                    data.get("AlcoholConsumption", 0),
                    data.get("Smoking", 0),
                    data.get("GeneticRisk", 0),
                    data.get("PhysicalActivity", 0),
                    data.get("Diabetes", 0),
                    data.get("Hypertension", 0),
                    data.get("LiverFunctionTest", 0),
                ]
            ]
        )
        scaled_data, _ = scale_data_liver(input_data)
        prediction = liver_model.predict(scaled_data)
        result = (
            "Yes, you are likely to have liver problems."
            if prediction[0] == 1
            else "No, you are unlikely to have liver problems."
        )
        return jsonify({"prediction": result})
    except Exception as e:
        return jsonify({"error": str(e)}), 500


if __name__ == "__main__":
    app.run(port=5000)
