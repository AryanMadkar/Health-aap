import pickle


def load_model(filepath):
    with open(filepath, "rb") as f:
        return pickle.load(f)


diabitie_model = load_model(r"F:\dektop241205\health_app\multiplediseas\model\diabitese.sav")

heart_model = load_model(r"F:\dektop241205\health_app\multiplediseas\model\heart_deseas.sav")

brest_cancer_model = load_model(r"F:\dektop241205\health_app\multiplediseas\model\brestcaner.sav")
lungcancer_model = load_model(r"F:\dektop241205\health_app\multiplediseas\model\lung_cance.sav")

insurancemodel = load_model(r"F:\dektop241205\health_app\multiplediseas\model\insurance_model.pkl")
livermodel = load_model(r"F:\dektop241205\health_app\multiplediseas\model\liver.sav")
