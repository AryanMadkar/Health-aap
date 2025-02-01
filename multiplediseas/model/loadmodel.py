import pickle


def load_model(filepath):
    with open(filepath, "rb") as f:
        return pickle.load(f)


diabitie_model = load_model("multiplediseas/model/diabitese.sav")

heart_model = load_model("multiplediseas/model/heart_deseas.sav")

brest_cancer_model = load_model("multiplediseas/model/brestcaner.sav")
lungcancer_model = load_model("multiplediseas/model/lung_cance.sav")

insurancemodel = load_model("multiplediseas/model/insurance_model.pkl")
livermodel = load_model("multiplediseas/model/liver.sav")
