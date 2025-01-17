import pickle


def load_model(filepath):
    with open(filepath, "rb") as f:
        return pickle.load(f)


diabitie_model = load_model(
    "C:/Users/aryan/OneDrive/Desktop/health_app/multiplediseas/model/diabitese.sav"
)

heart_model = load_model(
    "C:/Users/aryan/OneDrive/Desktop/health_app/multiplediseas/model/heart_deseas.sav"
)

brest_cancer_model = load_model(
    "C:/Users/aryan/OneDrive/Desktop/health_app/multiplediseas/model/brest_cancer.sav"
)
