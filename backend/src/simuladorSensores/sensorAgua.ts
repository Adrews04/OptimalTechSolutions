import SalidaAguaModel from '../models/dispositivos/salidasAgua';
import { publishData } from './mqttPublisher';

export const simularSensorAgua = async(Zona: number, salidaAgua: number) => {


    const agua = await SalidaAguaModel.findOne({ idZona: Zona, idSalida: salidaAgua }).lean();

    if (!agua) {
        console.log('SENOR DE AGUA DESCONECTADO: Sensor ', salidaAgua, ' en zona ', Zona, ' sin señal');
        return;
    }

    const consumoAgua = (agua.status) ? Math.random() * 12 : 0

    const datosAgua = {
        consumoAgua: consumoAgua,
        hora: new Date(), // Usamos la fecha actual como está
        idZona: Zona,
        idSalidaAgua: salidaAgua
    };

    publishData('sensors/agua', JSON.stringify(datosAgua)); // Publicar los datos como JSON
}
