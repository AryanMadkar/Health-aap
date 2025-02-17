from sklearn.preprocessing import StandardScaler
import pandas as pd
import os

# Get the path of the CSV file dynamically
csv_path = os.path.join(os.path.dirname(__file__), "processing", "Breast_cancer_data.csv")

# Load the CSV file
dh = pd.read_csv(csv_path)

# Drop the "diagnosis" column
x = dh.drop(columns="diagnosis", axis=1)

# Function to scale data
def scale_data_brest(data, scaler=None):
    if scaler is None:
        scaler = StandardScaler()
        scaler.fit(x)
    return scaler.transform(data), scaler
