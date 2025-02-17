from sklearn.preprocessing import StandardScaler
import pandas as pd

import os

# Get the path of the CSV file dynamically
csv_path = os.path.join(os.path.dirname(__file__), "processing", "lungcancerdata.csv")

# Load the CSV file
dh = pd.read_csv(csv_path)
dh["GENDER"] = dh["GENDER"].map({"M": 1, "F": 0})

x = dh.drop(columns="LUNG_CANCER", axis=1)


def scale_data_lung(data, scaler=None):
    if not scaler:
        scaler = StandardScaler()
        scaler.fit(x)
    return scaler.transform(data), scaler
