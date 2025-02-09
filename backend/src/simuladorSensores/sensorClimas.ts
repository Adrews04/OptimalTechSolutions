import { publishData } from './mqttPublisher';

export const simularSensorClima = async() => {
    const consumoElectrico = Math.random() * 0.1112;
    const consumoGas = Math.random() * 0.00172; 

    const datosClima = {
        consumoElectrico: consumoElectrico,
        consumoGas: consumoGas,
        hora: new Date(), // Usamos la fecha actual como está
        idZona: Math.floor(Math.random() * 10), // Suponiendo que el conjunto tiene 10 zonas distintas que utilizan Clima
        idClima: Math.floor(Math.random() * 4) // Suponiendo que esta zona tiene 4 climas
    };

    publishData('sensors/climas', JSON.stringify(datosClima)); // Publicar los datos como JSON
}
