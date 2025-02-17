from sklearn.preprocessing import StandardScaler
import pandas as pd

import os

# Get the path of the CSV file dynamically
csv_path = os.path.join(os.path.dirname(__file__), "Liver_disease_data.csv")

# Load the CSV file
dh = pd.read_csv(csv_path)
x = dh.drop(columns="Diagnosis", axis=1)


def scale_data_liver(data, scaler=None):
    if not scaler:
        scaler = StandardScaler()
        scaler.fit(x)
    return scaler.transform(data), scaler
