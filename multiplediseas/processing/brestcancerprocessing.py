from sklearn.preprocessing import StandardScaler
import pandas as pd
dh = pd.read_csv("brest_cancer/Breast_cancer_data.csv")
x = dh.drop(columns="diagnosis",axis = 1)
def scale_data_brest(data, scaler=None):
    if not scaler:
        scaler = StandardScaler()
        scaler.fit(x)
    return scaler.transform(data), scaler
 