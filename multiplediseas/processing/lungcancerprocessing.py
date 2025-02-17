from sklearn.preprocessing import StandardScaler
import pandas as pd

dh = pd.read_csv(r"F:\dektop241205\health_app\multiplediseas\processing\lungcancerdata.csv")
dh["GENDER"] = dh["GENDER"].map({"M": 1, "F": 0})

x = dh.drop(columns="LUNG_CANCER", axis=1)


def scale_data_lung(data, scaler=None):
    if not scaler:
        scaler = StandardScaler()
        scaler.fit(x)
    return scaler.transform(data), scaler
