# 🧠 Early Stroke Detection System

A **real-time stroke monitoring mobile application** built using **React
Native (Expo)** that connects to wearable sensors to detect early signs
of stroke using machine learning.

The system monitors **vital signals such as heart rate, SpO₂, ECG and
motion data**, analyzes them using an ML model, and alerts the user if a
**high stroke risk** is detected.

------------------------------------------------------------------------

# 📱 Mobile App (React Native)

The mobile application acts as the **dashboard for monitoring patient
vitals in real time**.

## Main Features

-   🫀 **Live Vitals Monitoring**
    -   Heart Rate
    -   SpO₂
    -   ECG waveform visualization
-   📊 **Vitals Charts**
    -   Historical visualization of sensor readings
    -   Helps identify abnormal trends
-   ⚠ **Stroke Risk Detection**
    -   ML model predicts stroke risk level
    -   Risk levels:
        -   LOW
        -   WARNING
        -   HIGH
-   🚨 **Emergency Alert System**
    -   When risk becomes **HIGH**, the app shows:
        -   Stroke alert banner
        -   Emergency call button
-   📷 **Face Droop Detection**
    -   Uses the phone camera to analyze facial asymmetry
    -   Helps detect one of the FAST stroke indicators
-   📡 **ESP32 Sensor Integration (Planned)**
    -   Wearable device streams health data from sensors such as:
        -   MAX30102 (PPG)
        -   ECG sensor
        -   IMU (fall detection)

------------------------------------------------------------------------

# 🧠 System Architecture

Sensors (ECG + PPG + IMU)\
↓\
ESP32\
↓\
Data Processing\
↓\
Machine Learning Model\
↓\
Stroke Risk Prediction\
↓\
React Native Mobile App\
↓\
Alerts + Dashboard

------------------------------------------------------------------------

# 📊 Dashboard Overview

The mobile dashboard displays:

-   Patient status indicator
-   Heart rate
-   SpO₂ level
-   ECG waveform
-   Last updated timestamp
-   Emergency alerts

If a **high stroke risk** is detected:

⚠ Stroke Risk Detected\
CALL EMERGENCY

appears on the dashboard.

------------------------------------------------------------------------

# 🛠 Tech Stack

## Mobile App

-   React Native
-   Expo
-   TypeScript
-   Expo Router

## Hardware

-   ESP32
-   MAX30102 Sensor
-   ECG Sensor
-   IMU Sensor

## AI / ML

-   Stroke risk prediction model
-   Facial droop detection model

------------------------------------------------------------------------

# 📂 Project Structure

app\
├ (tabs)\
│ ├ index.tsx → Dashboard\
│ ├ vitals.tsx → Charts & vitals\
│ ├ alerts.tsx → Alerts page\
│ ├ history.tsx → Historical data\
│ └ face.tsx → Face droop detection

components\
└ ECGChart.tsx → ECG waveform visualization

services\
├ esp32Service.ts → ESP32 data connection\
└ modelService.ts → ML model integration

------------------------------------------------------------------------

# 🚀 Running the App

Install dependencies

``` bash
npm install
```

Start the development server

``` bash
npx expo start
```

Run on phone using **Expo Go** by scanning the QR code.

------------------------------------------------------------------------



# ⚠ Disclaimer

This project is a **research and educational prototype** and is not
intended for medical diagnosis or treatment.
