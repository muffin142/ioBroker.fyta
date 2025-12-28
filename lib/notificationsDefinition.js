
import * as utils from "@iobroker/adapter-core";

const getDefaultPlantProperties = (plant) => ({
	/* Properties should be aligned */
	name: plant.nickname,
	sName: plant.scientific_name,
});

const getDefaultDeviceProperties = (device) => ({
	plant: getDefaultPlantProperties(device.plant),
	id: device.id,
});

const notificationsDefinition = {
	plant: {
		light_status: [
			{
				active: (adapter) => adapter.config.notificationsEnabled && adapter.config.notificationsPlantLight,
				filter: (val) => val === 1,
				notification: {
					category: "checkPlant",
					template: (plant) => ({
						...getDefaultPlantProperties(plant),
						message: utils.I18n.translate("It is too dark for %s", plant.nickname),
						actual: plant.light_status,
					}),
				},
			},
			{
				active: (adapter) => adapter.config.notificationsEnabled && adapter.config.notificationsPlantLight && adapter.config.notificationsLowCritical,
				filter: (val) => val === 2,
				notification: {
					category: "checkPlant",
					template: (plant) => ({
						...getDefaultPlantProperties(plant),
						message: utils.I18n.translate("It is a little too dark for %s", plant.nickname),
						actual: plant.light_status,
					}),
				},
			},
			{
				active: (adapter) => adapter.config.notificationsEnabled && adapter.config.notificationsPlantLight && adapter.config.notificationsLowCritical,
				filter: (val) => val === 4,
				notification: {
					category: "checkPlant",
					template: (plant) => ({
						...getDefaultPlantProperties(plant),
						message: utils.I18n.translate("It a little too bright for %s", plant.nickname),
						actual: plant.light_status,
					}), 
				},
			},
			{
				active: (adapter) => adapter.config.notificationsEnabled && adapter.config.notificationsPlantLight,
				filter: (val) => val === 5,
				notification: {
					category: "checkPlant",
					template: (plant) => ({
						...getDefaultPlantProperties(plant),
						message: utils.I18n.translate("It is too bright for %s", plant.nickname),
						actual: plant.light_status,
					}), 
				},
			},
		],
		moisture_status: [			
			{ 
				active: (adapter) => adapter.config.notificationsEnabled && adapter.config.notificationsPlantMoistureEnabled,
				filter: (val) => val === 1,
				notification: {
					category: "checkPlant",
					template: (plant) => ({
						...getDefaultPlantProperties(plant),
						message: utils.I18n.translate("%s has too little water", plant.nickname),
						actual: plant.moisture_status,
					}),
				},
			},
			{ 
				active: (adapter) => adapter.config.notificationsEnabled && adapter.config.notificationsPlantMoistureEnabled,
				filter: (val) => val === 2,
				notification: {
					category: "checkPlant",
					template: (plant) => ({
						...getDefaultPlantProperties(plant),
						message: utils.I18n.translate("%s has a little too little water", plant.nickname),
						actual: plant.moisture_status,
					}),
				},
			},
			{ 
				active: (adapter) => adapter.config.notificationsEnabled && adapter.config.notificationsPlantMoistureEnabled,
				filter: (val) => val === 4,
				notification: {
					category: "checkPlant",
					template: (plant) => ({
						...getDefaultPlantProperties(plant),
						message: utils.I18n.translate("%s is a little overwatered", plant.nickname),
						actual: plant.moisture_status,
					}),
				},
			},
			{
				active: (adapter) => adapter.config.notificationsEnabled && adapter.config.notificationsPlantMoistureEnabled,
				filter: (val) => val === 5,
				notification: {
					category: "checkPlant",
					template: (plant) => ({
						...getDefaultPlantProperties(plant),
						message: utils.I18n.translate("%s is overwatered", plant.nickname),
						actual: plant.moisture_status,
					}),
				},
			},
		],
		nutrients_status: [
			{
				active: (adapter) => adapter.config.notificationsEnabled && adapter.config.notificationsPlantNutrients,
				filter: (val) => val === 1,
				notification: {
					category: "checkPlant",
					template: (plant) => ({
						...getDefaultPlantProperties(plant),
						message: utils.I18n.translate("%s must be fertilized", plant.nickname),
						actual: plant.nutrients_status,
					})
				},
				
			},
			{
				active: (adapter) => adapter.config.notificationsEnabled && adapter.config.notificationsPlantNutrients,
				filter: (val) => val === 1,
				notification: {
					category: "checkPlant",
					template: (plant) => ({
						...getDefaultPlantProperties(plant),
						message: utils.I18n.translate("%s needs to be fertilized soon", plant.nickname),
						actual: plant.nutrients_status,
					}),
				},				
			},
			{
				active: (adapter) => adapter.config.notificationsEnabled && adapter.config.notificationsPlantNutrients,
				filter: (val) => val === 4,
				notification: {
					category: "checkPlant",
					template: (plant) => ({
						...getDefaultPlantProperties(plant),
						message: utils.I18n.translate("%s is a bit over-fertilized", plant.nickname),
						actual: plant.nutrients_status,
					}),
				},
			},
			{
				active: (adapter) => adapter.config.notificationsEnabled && adapter.config.notificationsPlantNutrients,
				filter: (val) => val === 5,
				notification: {
					category: "checkPlant",
					template: (plant) => ({
						...getDefaultPlantProperties(plant),
						message: utils.I18n.translate("%s is overfertilized", plant.nickname),
						actual: plant.nutrients_status,
					}),
				},
			},
		],
		temperature_status: [
			{
				active: (adapter) => adapter.config.notificationsEnabled && adapter.config.notificationsPlantTemperature,
				filter: (val) => val === 1,
				notification: {
					category: "checkPlant",
					template: (plant) => ({
						...getDefaultPlantProperties(plant),
						message: utils.I18n.translate("%s is too cold", plant.nickname),
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
						message: utils.I18n.translate("%s is a littele bit too cold", plant.nickname),
						actual: plant.temperature_status,
					}),
				},
			},
			{
				active: (adapter) => adapter.config.notificationsEnabled && adapter.config.notificationsPlantTemperature,
				filter: (val) => val === 4,
				notification: {
					category: "checkPlant",
					template: (plant) => ({
						...getDefaultPlantProperties(plant),
						message: utils.I18n.translate("%s is a little bit to too warm", plant.nickname),
						actual: plant.temperature_status,
					}),
				},
			},
			{
				active: (adapter) => adapter.config.notificationsEnabled && adapter.config.notificationsPlantTemperature,
				filter: (val) => val === 5,
				notification: {
					category: "checkPlant",
					template: (plant) => ({
						...getDefaultPlantProperties(plant),
						message: utils.I18n.translate("%s is too warm", plant.nickname),
						actual: plant.temperature_status,
					}),
				},
			},			
		],
		air_humidity_status: [
			{
				active: (adapter) => adapter.config.notificationsEnabled && adapter.config.notificationsPlantAirHumidity,
				filter: (val) => val === 1,
				notification: {
					category: "checkPlant",
					template: (plant) => ({
						...getDefaultPlantProperties(plant),
						message: utils.I18n.translate("Humidity is too low for %s", plant.nickname),
						actual: plant.air_humidity_status,
					})
				}
			},
			{
				active: (adapter) => adapter.config.notificationsEnabled && adapter.config.notificationsPlantAirHumidity && adapter.config.notificationsLowCritical,
				filter: (val) => val === 2,
				notification: {
					category: "checkPlant",
					template: (plant) => ({
						...getDefaultPlantProperties(plant),
						message: utils.I18n.translate("Humidity is a luttle bit too low for %s", plant.nickname),
						actual: plant.air_humidity_status,
					})
				}
			},
			{
				active: (adapter) => adapter.config.notificationsEnabled && adapter.config.notificationsPlantAirHumidity && adapter.config.notificationsLowCritical,
				filter: (val) => val === 4,
				notification: {
					category: "checkPlant",
					template: (plant) => ({
						...getDefaultPlantProperties(plant),
						message: utils.I18n.translate("Humidity is a little bit too high for %s", plant.nickname),
						actual: plant.air_humidity_status,
					})
				}
			},
			{
				active: (adapter) => adapter.config.notificationsEnabled && adapter.config.notificationsPlantAirHumidity,
				filter: (val) => val === 5,
				notification: {
					category: "checkPlant",
					template: (plant) => ({
						...getDefaultPlantProperties(plant),
						message: utils.I18n.translate("Humidity is a lite bit high low for %s", plant.nickname),
						actual: plant.air_humidity_status,
					})
				}
			}
		]
	},
	sensor: {
		is_battery_low: [
			{
				active: (adapter) => adapter.config.notificationsEnabled && adapter.config.notificationsSensorBatteryLow,
				filter: (val) => (val === true),
				notification: {
					category: "lowBattery",
					template: (sensor) => ({
						...getDefaultDeviceProperties(sensor),
						message: utils.I18n.translate("Sensor on %s (ID %s) is low on battery", sensor.plant.nickname, sensor.id),
						actual: sensor.is_battery_low,
					}),
				},
			},
		]
	}
};

export default notificationsDefinition;