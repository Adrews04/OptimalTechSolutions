import { publishData } from './mqttPublisher';

export const simularSensorLuz = async () => {

    const consumoLuz = Math.random() * 0.1112; // Si el estado es true, consume luz aleatorio, si no, 0

    const datosLuz = {
        consumoLuz: consumoLuz,
        hora: new Date(), // Usamos la fecha actual como está
        idZona: Math.floor(Math.random() * 25), // Suponiendo que el conjunto tiene 25 zonas distintas que utilizan luz
        idTuboLed: Math.floor(Math.random() * 10) // Suponiendo que cada zona tiene 10 tubos LED que utilizan luz
    };

    publishData('sensors/luz', JSON.stringify(datosLuz)); // Publicar los datos como JSON

}
