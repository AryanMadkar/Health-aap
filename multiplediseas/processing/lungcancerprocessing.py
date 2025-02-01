from sklearn.preprocessing import StandardScaler
import pandas as pd

dh = pd.read_csv(
    "multiplediseas/processing/lungcancerdata.csv"
)
x = dh.drop(columns="LUNG_CANCER", axis=1)


def scale_data_lung(data, scaler=None):
    if not scaler:
        scaler = StandardScaler()
        scaler.fit(x)
    return scaler.transform(data), scaler
