from sklearn.preprocessing import StandardScaler
import pandas as pd


def scale_data(data, scaler=None):
    if not scaler:
        scaler = StandardScaler()
        scaler.fit(data)
    return scaler.transform(data), scaler
