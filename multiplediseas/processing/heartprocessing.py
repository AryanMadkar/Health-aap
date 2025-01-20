from sklearn.preprocessing import StandardScaler
import pandas as pd

dh = pd.read_csv("heartdisies/heart_disease_data.csv")
x = dh.drop(columns="target", axis=1)


def scale_data_heart(data, scaler=None):
    if not scaler:
        scaler = StandardScaler()
        scaler.fit(x)
    return scaler.transform(data), scaler
