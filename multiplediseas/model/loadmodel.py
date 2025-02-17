import pickle
import os

# Function to load model
def load_model(filename):
    filepath = os.path.join(os.path.dirname(__file__), "model", filename)  # Change "models" -> "model"
    with open(filepath, "rb") as f:
        return pickle.load(f)

# Load models from the "model" folder
diabetes_model = load_model("diabitese.sav")  # Corrected filename
heart_model = load_model("heart_deseas.sav")
breast_cancer_model = load_model("brestcaner.sav")
lung_cancer_model = load_model("lung_cance.sav")
insurance_model = load_model("insurance_model.pkl")
liver_model = load_model("liver.sav")
