from flask import Flask, request
import numpy as np

from processing.diabitiespocessing import scale_data_dibaties
from processing.heartprocessing import scale_data_heart
from processing.lungcancerprocessing import scale_data_lung
from processing.brestcancerprocessing import scale_data_brest
from processing.liverprocessing import scale_data_liver
from model.loadmodel import (
    diabitie_model,
    heart_model,
    lungcancer_model,
    brest_cancer_model,
    insurancemodel,
    livermodel,
)

app = Flask(__name__)


@app.route("/")
def welcome():
    return "Welcome to the Health App!"


@app.route("/diabetes", methods=["POST"])
def diabetes():
    data = request.get_json()
    input_data = [
        [
            data["pregnancies"],
            data["glucose"],
            data["bp"],
            data["skin_thickness"],
            data["insulin"],
            data["bmi"],
            data["dpf"],
            data["age"],
        ]
    ]
    inputarray = np.asarray(input_data).reshape(1, -1)
    scaled_data, _ = scale_data_dibaties(inputarray)
    prediction = diabitie_model.predict(scaled_data)
    return {
        "prediction": (
            "Yes, you are likely to have diabetes."
            if prediction[0] == 1
            else "No, you are unlikely to have diabetes."
        )
    }


@app.route("/heart", methods=["POST"])
def heart():
    data = request.get_json()
    input_data = [
        [
            data["age"],
            data["sex"],
            data["cp"],
            data["trestbps"],
            data["chol"],
            data["fbs"],
            data["restecg"],
            data["thalach"],
            data["exang"],
            data["oldpeak"],
            data["slope"],
            data["ca"],
            data["thal"],
        ]
    ]
    inputarray = np.asarray(input_data).reshape(1, -1)
    scaled_data, _ = scale_data_heart(inputarray)
    prediction = heart_model.predict(scaled_data)
    return {
        "prediction": (
            "Yes, you are likely to have heart disease."
            if prediction[0] == 1
            else "No, you are unlikely to have heart disease."
        )
    }


@app.route("/lungcancer", methods=["POST"])
def lungcancer():
    data = request.get_json()
    input_data = [
        [
            data["gender"],
            data["age"],
            data["smoking"],
            data["yellow_finger"],
            data["anxiety"],
            data["peer_pressure"],
            data["chronic_disease"],
            data["fatigue"],
            data["allergy"],
            data["wheezing"],
            data["alcohol"],
            data["coughing"],
            data["shortness_of_breath"],
            data["swallowing_difficulty"],
            data["chest_pain"],
        ]
    ]
    inputarray = np.asarray(input_data).reshape(1, -1)
    scaled_data, _ = scale_data_lung(inputarray)
    prediction = lungcancer_model.predict(scaled_data)
    return {
        "prediction": (
            "Yes, you are likely to have lung cancer."
            if prediction[0] == 1
            else "No, you are unlikely to have lung cancer."
        )
    }


@app.route("/breastcancer", methods=["POST"])
def breastcancer():
    data = request.get_json()
    input_data = [
        [
            data["mean_radius"],
            data["mean_texture"],
            data["mean_perimeter"],
            data["mean_area"],
            data["mean_smoothness"],
        ]
    ]
    inputarray = np.asarray(input_data).reshape(1, -1)
    scaled_data, _ = scale_data_brest(inputarray)
    prediction = brest_cancer_model.predict(scaled_data)
    return {
        "prediction": (
            "Yes, you are likely to have breast cancer."
            if prediction[0] == 1
            else "No, you are unlikely to have breast cancer."
        )
    }


@app.route("/insurance", methods=["POST"])
def insurance():
    data = request.get_json()
    input_data = [
        [
            data["age"],
            data["sex"],
            data["bmi"],
            data["children"],
            data["smoker"],
            data["region"],
        ]
    ]
    inputarray = np.asarray(input_data).reshape(1, -1)
    prediction = insurancemodel.predict(inputarray)
    return {"prediction": prediction[0]}


@app.route("/liver", methods=["POST"])
def liver():
    data = request.get_json()
    input_data = [
        [
            data["Age"],
            data["Gender"],
            data["BMI"],
            data["AlcoholConsumption"],
            data["Smoking"],
            data["GeneticRisk"],
            data["PhysicalActivity"],
            data["Diabetes"],
            data["Hypertension"],
            data["LiverFunctionTest"],
        ]
    ]
    inputarray = np.asarray(input_data).reshape(1, -1)
    scaled_data, _ = scale_data_liver(inputarray)
    prediction = livermodel.predict(scaled_data)
    return {
        "prediction": (
            "Yes, you are likely to have liver problems."
            if prediction[0] == 1
            else "No, you are unlikely to have liver problems."
        )
    }


if __name__ == "__main__":

    app.run(debug=True, port=5000)
