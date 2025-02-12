import { publishData } from './mqttPublisher';
import LucesModel from '../models/dispositivos/luces';

export const simularSensorLuz = async (Zona: number, TuboLed: number) => {


    const luz = await LucesModel.findOne({ idZona: Zona, idTuboLed: TuboLed }).lean();

    if (!luz) {
        console.log('SENSOR DE LUZ DESCONECTADO: Sensor ', TuboLed, ' en zona ', Zona, ' sin señal');
        return;
    }

    const consumoLuz = (luz.status) ? (Math.random() * 8000) : 0; // Si el estado es true, consume luz aleatorio, si no, 0
        
    const datosLuz = {
        consumoLuz: consumoLuz,
        hora: new Date(), // Usamos la fecha actual como está
        idZona: Zona,
        idTuboLed: TuboLed
    };

    publishData('sensors/luz', JSON.stringify(datosLuz)); // Publicar los datos como JSON

}
