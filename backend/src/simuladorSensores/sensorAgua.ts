import { publishData } from './mqttPublisher';

export const simularSensorAgua = async() => {
    const consumoAgua = Math.random() * 12;

    const datosAgua = {
        consumoAgua: consumoAgua,
        hora: new Date(), // Usamos la fecha actual como está
        idZona: Math.floor(Math.random() * 10), // Suponiendo que el conjunto tiene 10 zonas distintas que utilizan agua
        idSalidaAgua: Math.floor(Math.random() * 10) // Suponiendo que esta zona tiene 10 salidas distintas que utilizan agua
    };

    publishData('sensors/agua', JSON.stringify(datosAgua)); // Publicar los datos como JSON
}
