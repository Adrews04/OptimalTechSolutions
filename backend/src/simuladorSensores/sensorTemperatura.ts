import TemperaturaModel from '../models/admin/temperatura';
import { publishData } from './mqttPublisher';

export const simularSensorTemperatura = async(Zona: number) => {

    const temperatura = await TemperaturaModel.findOne({ idZona: Zona }).lean();

    if (!temperatura) {
        console.log('SENSOR DE TEMPERATURA DESCONECTADO: Sensor en zona ', Zona, ' sin señal');
        return;
    }


    const datosTemperatura = {
        hora: new Date(), // Usamos la fecha actual como está
        idZona: Zona,
        temperatura: (Math.random() * 10) + 20
    };

    publishData('sensors/Temperatura', JSON.stringify(datosTemperatura)); // Publicar los datos como JSON
}
