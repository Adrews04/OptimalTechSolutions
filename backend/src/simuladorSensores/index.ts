import { simularSensorLuz } from './sensorLuz';
import { simularSensorAgua } from './sensorAgua';
import { simularSensorGas } from './sensorGas';
import { simularSensorMovimiento } from './sensorMovimiento';

setInterval(simularSensorAgua, 10000);
setInterval(simularSensorLuz, 10000);
setInterval(simularSensorGas, 10000);
setInterval(simularSensorMovimiento, 10000);
