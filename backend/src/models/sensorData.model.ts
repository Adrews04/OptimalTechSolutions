import mongoose from 'mongoose';

const sensorDataSchema = new mongoose.Schema({
  topic: { type: String, required: true },
  message: { type: String, required: true },
  timestamp: { type: Date, default: Date.now }
});

const SensorData = mongoose.model('SensorData', sensorDataSchema);

export default SensorData;
