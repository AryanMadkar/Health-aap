from sklearn.preprocessing import StandardScaler
import pandas as pd
import os

# Construct the path to the CSV file dynamically
current_dir = os.path.dirname(__file__)  # Get the directory of the current script
csv_path = os.path.join(current_dir,  "diabetes.csv")

# Read the CSV file
try:
    dh = pd.read_csv(csv_path)
    print("CSV file loaded successfully!",csv_path)
except FileNotFoundError:
    print(f"Error: File not found at {csv_path}. Please check the path!")
    exit()

# Drop the 'Outcome' column for feature scaling
x = dh.drop(columns="Outcome", axis=1)

# Function to scale the data
def scale_data_diabetes(data, scaler=None):
    if not scaler:
        scaler = StandardScaler()
        scaler.fit(x)
    return scaler.transform(data), scaler

# Example usage
scaled_data, scaler = scale_data_diabetes(x)
print("Data scaled successfully!")