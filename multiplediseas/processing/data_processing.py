from sklearn.preprocessing import StandardScaler


def scale_data(data, scaler=None):
    if not scaler:
        scaler = StandardScaler()
        scaler.fit(data)
    return scaler.transform(data), scaler
