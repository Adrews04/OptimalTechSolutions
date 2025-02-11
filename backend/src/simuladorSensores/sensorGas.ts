import SalidaGasModel from '../models/dispositivos/salidasGas';
import { publishData } from './mqttPublisher';

export const simularSensorGas = async(Zona: number, salidaGas: number) => {

    const gas = await SalidaGasModel.findOne({ idZona: Zona, idSalida: salidaGas }).lean();

    if (!gas) {
        console.log('SENOR DE GAS DESCONECTADO: Sensor ', salidaGas, ' en zona ', Zona, ' sin señal');
        return;
    }

    const consumoGas = (gas.status) ? Math.random() * 0.0342 : 0

    const datosGas = {
        consumoGas: consumoGas,
        hora: new Date(), // Usamos la fecha actual como está
        idZona: Zona,
        idSalidaGas: salidaGas
    };

    publishData('sensors/gas', JSON.stringify(datosGas)); // Publicar los datos como JSON
}
