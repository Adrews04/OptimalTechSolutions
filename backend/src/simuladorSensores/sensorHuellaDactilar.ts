import { publishData } from './mqttPublisher';

export const simularSensorHuella = async( Zona:number) => {

    const usuarioId = Math.floor(Math.random() * 999999);

    const datosHuella = {
      usuario:usuarioId,
      hora: new Date(),
      idZona: Zona
    };
    publishData('sensors/huella', JSON.stringify(datosHuella)); // Publicar los datos como JSON
  }