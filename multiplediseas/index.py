import streamlit as st
from pages.dibeties import diabetes_prediction_page
from pages.heart import heart_prediction_page
from streamlit_option_menu import option_menu
from pages.bcancer import brestcancer_prediction_page

with st.sidebar:
    selected = option_menu(
        "Choose a disease",
        ["Diabetes", "Heart Disease", "Breast-Cancer"],
        default_index=0,
    )
if selected == "Diabetes":
    diabetes_prediction_page()
elif selected == "Heart Disease":
    heart_prediction_page()
elif selected == "Breast-Cancer":
    brestcancer_prediction_page()
else:
    st.title("Other Disease Prediction Coming Soon!")
