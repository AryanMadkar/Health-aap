from sklearn.preprocessing import StandardScaler
import pandas as pd

dh = pd.read_csv(
    r"F:\dektop241205\health_app\multiplediseas\processing\Liver_disease_data.csv"
)
x = dh.drop(columns="Diagnosis", axis=1)


def scale_data_liver(data, scaler=None):
    if not scaler:
        scaler = StandardScaler()
        scaler.fit(x)
    return scaler.transform(data), scaler
