from sklearn.preprocessing import StandardScaler
import pandas as pd
dh = pd.read_csv("diabities/diabetes.csv")
x = dh.drop(columns="Outcome",axis = 1)
def scale_data_dibaties(data, scaler=None):
    if not scaler:
        scaler = StandardScaler()
        scaler.fit(x)
    return scaler.transform(data), scaler
