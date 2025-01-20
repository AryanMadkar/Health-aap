import streamlit as st
from pages.dibeties import diabetes_prediction_page
from pages.heart import heart_prediction_page
from pages.lungcancer import lung_cancer_prediction
from streamlit_option_menu import option_menu
from pages.insurancemodel import insurancepage
from pages.bcancer import brestcancer_prediction_page

with st.sidebar:
    selected = option_menu(
        "Choose a disease",
        ["Diabetes", "Heart Disease", "Breast-Cancer", "Lung Cancer", "Insurance"],
        default_index=0,
    )
if selected == "Diabetes":
    diabetes_prediction_page()
elif selected == "Heart Disease":
    heart_prediction_page()
elif selected == "Breast-Cancer":
    brestcancer_prediction_page()

elif selected == "Lung Cancer":
    lung_cancer_prediction()
elif selected == "Insurance":
    insurancepage()

else:
    st.title("Other Disease Prediction Coming Soon!")
