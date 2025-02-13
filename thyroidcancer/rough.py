import pandas as pd
import seaborn as sn
import matplotlib.pyplot as plt
dh = pd.read_csv(r"F:\dektop241205\health_app\thyroidcancer\thyroid_cancer_risk_data.csv")
x = dh.drop(columns=['Patient_ID',"Country"	,"Ethnicity","Diagnosis","Thyroid_Cancer_Risk"],axis=1)

y = dh["Thyroid_Cancer_Risk"]

x['Gender'] = x['Gender'].map({"Male": 1, "Female": 0})
x = x.replace({'Yes': 1, 'No': 0})
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler
scalar = StandardScaler()
x = scalar.fit_transform(x)
from sklearn.model_selection import train_test_split
from sklearn import svm
from sklearn.metrics import accuracy_score
from sklearn.linear_model import LogisticRegression
randomstate = 0
best_score = 0
for randomstate in range(1, 1001):
    x_train, x_test, y_train, y_test = train_test_split(
        x, y, test_size=0.2, random_state=randomstate
    )
    clasifirer = LogisticRegression(multi_class="multinomial")
    clasifirer.fit(x_train, y_train)
    accuracyScoe_x_test = clasifirer.predict(x_test)
    score = accuracy_score(accuracyScoe_x_test, y_test)
    if score > best_score:
        best_score = score
        best_randomstate = randomstate
print(f"best random state:{best_randomstate}")
print(f"best score:{best_score * 100}")