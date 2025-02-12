from flask import Flask, request, jsonify
import numpy as np
import pandas as pd
import matplotlib
matplotlib.use('Agg')  # Utiliza backend no interactivo para guardar figuras en disco
import matplotlib.pyplot as plt
from prophet import Prophet
import warnings
import os
import uuid

warnings.filterwarnings('ignore')

app = Flask(__name__)

@app.route('/forecast', methods=['POST'])
def forecast():
    # Cargar el dataset; asegúrate de que 'ds' se parsea como fecha
    df = pd.read_csv('./fakeData/sensores.csv', parse_dates=['ds'])

    # Lista de tipos de sensores
    sensor_types = ["luz", "agua", "gas", "temperatura", "movimiento", "huella"]

    # Número de períodos futuros a pronosticar (por ejemplo, 10 intervalos de 40 segundos)
    forecast_periods = 10

    # Lista para almacenar los nombres de archivo generados
    filenames = []

    # Recorrer cada sensor y cada zona de ese sensor
    for sensor_type in sensor_types:
        zones = df[df['sensor_type'] == sensor_type]['zone'].unique()
        for zone in zones:
            # Filtrar datos para el sensor de tipo 'sensor_type' en la zona actual
            df_group = df[(df['sensor_type'] == sensor_type) & (df['zone'] == zone)].copy()
            if df_group.empty:
                continue
            
            # Ordenar por tiempo
            df_group.sort_values('ds', inplace=True)
            
            # Entrenar el modelo Prophet con las columnas 'ds' y 'y'
            model = Prophet()
            model.fit(df_group[['ds', 'y']])
            
            # Generar DataFrame futuro con intervalos de 40 segundos
            future = model.make_future_dataframe(periods=forecast_periods, freq='40S')
            forecast_df = model.predict(future)
            
            # Graficar los datos reales y la predicción
            plt.figure(figsize=(10,6))
            plt.plot(df_group['ds'], df_group['y'], label='Datos reales', color='blue')
            plt.plot(forecast_df['ds'], forecast_df['yhat'], label='Predicción', color='red', linestyle='--')
            plt.fill_between(forecast_df['ds'], forecast_df['yhat_lower'], forecast_df['yhat_upper'],
                             color='red', alpha=0.3, label='Intervalo de confianza')
            plt.title(f'Forecast para sensor {sensor_type} - Zona {zone}')
            plt.xlabel('Fecha')
            plt.ylabel('Valor')
            plt.legend()
            plt.tight_layout()
            
            # Guardar la gráfica en un archivo único
            filename = f'forecast_{sensor_type}_zone{zone}_{uuid.uuid4().hex}.png'
            plt.savefig(filename)
            plt.close()
            print(f'Gráfica guardada: {filename}')
            
            # Agregar el nombre del archivo a la lista
            filenames.append(filename)
    
    # Retornar un JSON con la lista de archivos generados
    return jsonify({"message": "Forecasts generated", "filenames": filenames}), 200

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
