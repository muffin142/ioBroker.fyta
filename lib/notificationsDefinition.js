const getDefaultPlantProperties = (plant) => ({
	/* Properties should be aligned */
	name: plant.nickname,
	sName: plant.scientific_name,
});

const getDefaultDeviceProperties = (device) => ({
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
						message: `Plant ${plant.nickname} is too bright`,
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
						message: `Plant ${plant.nickname} is too dark`,
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
						message: `Plant ${plant.nickname} is overwatered`,
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
						message: `Plant ${plant.nickname} has too little water`,
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
						message: `Plant ${plant.nickname} is overfertilized`,
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
						message: `Plant ${plant.nickname} must be fertilized`,
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
						message: `Plant ${plant.nickname} is too warm`,
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
						message: `Plant ${plant.nickname} is to cold`,
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
						message: `Sensor on ${sensor.plant.name} (ID ${sensor.id}) is low on battery`,
						id: sensor.id,
						actual: sensor.is_battery_low,
					}),
				},
			},
		}
	]
};