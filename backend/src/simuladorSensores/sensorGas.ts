import { publishData } from './mqttPublisher';

export const simularSensorGas = async() => {
    const consumoGas =  Math.random() * 0.0342;

    const datosGas = {
        consumoGas: consumoGas,
        hora: new Date(), // Usamos la fecha actual como está
        idZona: Math.floor(Math.random() * 10), // Suponiendo que el gimnasio tiene 10 zonas distintas que utilizan gas
        idSalidaGas: Math.floor(Math.random() * 10) // Suponiendo que esta zona tiene 10 salidas distintas que utilizan gas
    };

    publishData('sensors/gas', JSON.stringify(datosGas)); // Publicar los datos como JSON
}
