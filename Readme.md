Health AI/ML Prediction App

Overview

The Health AI/ML Prediction App is designed to predict multiple diseases based on user input. It leverages machine learning models to assess the likelihood of conditions such as:

Breast Cancer

Heart Disease

Lung Cancer

Liver Problems

Additionally, the app includes an insurance cost estimation feature that calculates potential expenses based on the user's health condition.

Features

AI/ML-based disease prediction

Support for multiple diseases

Insurance cost estimation

Future-proof design for adding more diseases

User authentication and history tracking

Tech Stack

Backend

The backend is built using Node.js with the following dependencies:

axios

bcrypt

cookie

cookie-parser

cors

dotenv

express

firebase

get-port

jsonwebtoken

mongoose

nodemon

Frontend

The frontend is developed using React and Vite with the following dependencies:

@gsap/react

@tailwindcss/vite

axios

gsap

react

react-dom

react-icons

react-router-dom

sheryjs

tailwindcss

Dev Dependencies

@eslint/js

@types/react

@types/react-dom

@vitejs/plugin-react

daisyui

eslint

eslint-plugin-react

eslint-plugin-react-hooks

eslint-plugin-react-refresh

globals

vite

Machine Learning Model Dependencies

The AI/ML model is built using Python and requires the following packages:

flask

pandas

numpy

pickle

scikit-learn

Installation

1. Clone the Repository

git clone https://github.com/your-repo/health-ai.git
cd health-ai

2. Install Backend Dependencies

cd backend
npm install

3. Install Frontend Dependencies

cd ../client
npm install

4. Install Python Dependencies

pip install flask pandas numpy pickle scikit-learn

Usage

Start the Backend Server

cd backend
npm start

Start the Frontend Server

cd client
npm run dev

Start the Python ML Server

python app.py

Future Enhancements

Adding more diseases for prediction

Improving UI/UX

Enhancing the insurance cost calculation model

Implementing user health history tracking

Contributors

Aryan Madkar (aryanmadkar70@gmail.com)

License

This project is licensed under the MIT License.

(License details to be added soon.)
