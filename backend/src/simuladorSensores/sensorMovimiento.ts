import { publishData } from './mqttPublisher';

export const simularSensorMovimiento = async( Zona:number) => {

    const cantidadPersonas = Math.floor(Math.random() * 25);

    const datosMovimiento = {
      cantidadPersonas:cantidadPersonas,
      hora: new Date(),
      idZona: Zona//suponiendo que el gimnasio tiene 25 zonas distintas
    };
    publishData('sensors/movimiento', JSON.stringify(datosMovimiento)); // Publicar los datos como JSON
  }