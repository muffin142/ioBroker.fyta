
const utils = require("@iobroker/adapter-core");

const getDefaultPlantProperties = (plant) => ({
	/* Properties should be aligned */
	name: plant.nickname,
	sName: plant.scientific_name,
});

const getDefaultDeviceProperties = (device) => ({
	plant: getDefaultPlantProperties(device.plant),
	id: device.id,
});

module.exports = {
	plant: {
		light_status: [
			{
				active: (adapter) => adapter.config.notificationsEnabled && adapter.config.notificationsPlantLight,
				filter: (val) => val === 5,
				notification: {
					category: "checkPlant",
					template: (plant) => ({
						...getDefaultPlantProperties(plant),
						message: utils.I18n.translate("notificationPlantLightTooHigh", plant.nickname),
						actual: plant.light_status,
					}),
				},
			}, 
			{
				active: (adapter) => adapter.config.notificationsEnabled && adapter.config.notificationsPlantLight,
				filter: (val) => val === 1,
				notification: {
					category: "checkPlant",
					template: (plant) => ({
						...getDefaultPlantProperties(plant),
						message: utils.I18n.translate("notificationPlantLightTooLow", plant.nickname),
						actual: plant.light_status,
					}),
				},
			},
		],
		moisture_status: [
			{
				active: (adapter) => adapter.config.notificationsEnabled && adapter.config.notificationsPlantMoistureEnabled,
				filter: (val) => val === 5,
				notification: {
					category: "checkPlant",
					template: (plant) => ({
						...getDefaultPlantProperties(plant),
						message: utils.I18n.translate("notificationPlantMoistureTooHigh", plant.nickname),
						actual: plant.moisture_status,
					}),
				},
			},
			{
				active: (adapter) => adapter.config.notificationsEnabled && adapter.config.notificationsPlantMoistureEnabled,
				filter: (val) => val === 1,
				notification: {
					category: "checkPlant",
					template: (plant) => ({
						...getDefaultPlantProperties(plant),
						message: utils.I18n.translate("notificationPlantMoistureTooLow", plant.nickname),
						actual: plant.moisture_status,
					}),
				},
			},
		],
		nutrients_status: [
			{
				active: (adapter) => adapter.config.notificationsEnabled && adapter.config.notificationsPlantNutrients,
				filter: (val) => val === 5,
				notification: {
					category: "checkPlant",
					template: (plant) => ({
						...getDefaultPlantProperties(plant),
						message: utils.I18n.translate("notificationPlantNutrientsTooHigh", plant.nickname),
						actual: plant.nutrients_status,
					}),
				},
			},
			{
				active: (adapter) => adapter.config.notificationsEnabled && adapter.config.notificationsPlantNutrients,
				filter: (val) => val === 1,
				notification: {
					category: "checkPlant",
					template: (plant) => ({
						...getDefaultPlantProperties(plant),
						message: utils.I18n.translate("notificationPlantNutrientsTooLow", plant.nickname),
						actual: plant.nutrients_status,
					}),
				},
			},
		],
		temperature_status: [
			{
				active: (adapter) => adapter.config.notificationsEnabled && adapter.config.notificationsPlantTemperature,
				filter: (val) => val === 5,
				notification: {
					category: "checkPlant",
					template: (plant) => ({
						...getDefaultPlantProperties(plant),
						message: utils.I18n.translate("notificationPlantTemperatureTooHigh", plant.nickname),
						actual: plant.temperature_status,
					}),
				},
			},
			{
				active: (adapter) => adapter.config.notificationsEnabled && adapter.config.notificationsPlantTemperature,
				filter: (val) => val === 1,
				notification: {
					category: "checkPlant",
					template: (plant) => ({
						...getDefaultPlantProperties(plant),
						message: utils.I18n.translate("notificationPlantTemperatureTooLow", plant.nickname),
						actual: plant.temperature_status,
					}),
				},
			},
		],
	},
	sensor: [
		{
			is_battery_low: {
				active: (adapter) => adapter.config.notificationsEnabled && adapter.config.notificationsSensorBatteryLow,
				filter: (val) => val === true,
				notification: {
					category: "lowBattery",
					template: (sensor) => ({
						...getDefaultDeviceProperties(sensor),
						message: utils.I18n.translate("notificationPlantTemperatureTooLow", sensor.plant.nickname, sensor.ID),
						actual: sensor.is_battery_low,
					}),
				},
			},
		}
	]
};