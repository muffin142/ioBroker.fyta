
const statesDefinition = {
	garden: {
		id: 				{ name: "ID",					type: "number",		role: "value"							},
		garden_name: 		{ name: "garden_name",			type: "string",		role: "info.name"						},
		origin_path: 		{ name: "origin_path",			type: "string",		role: "url",				def: ""		},
		thumb_path: 		{ name: "thumb_path",			type: "string",		role: "url",				def: ""		},
		is_shared: 			{ name: "is_shared",			type: "boolean",	role: "value",				def: false	},
	},
	plant: {
		id:					{ name: "ID", 					type: "number", 	role: "value" 							},
		nickname: 			{ name: "nickname", 			type: "string", 	role: "info.name", 			def: "" 	},
		scientific_name: 	{ name: "scientific_name", 		type: "string", 	role: "info.name", 			def: "" 	},
		common_name: 		{ name: "common_name", 			type: "string", 	role: "info.name", 			def: "" 	},
		status: 			{ name: "status", 				type: "number", 	role: "info.status", 		def: 3,		states: { 0: "User Plant deleted", 1: "User Plant good status", 2: "User Plant bad status", 3: "User Plant no sensor", }, },
		wifi_status:		{ name: "wifi_status", 			type: "number", 	role: "info.status",		def: -1,	states: { "-1": "Never connected to any hub or user doesnt have any hub or plant doesnt have sensor", 0: "Lost connection to all previously connected hubs", 1: "Is connected to at least one hub", 2: "Error in connecting hub OR hub connection lost within a specific time range", } ,},
		thumb_path:			{ name: "thumb_path", 			type: "string", 	role: "url", 				def: "" 	},
		origin_path:		{ name: "origin_path", 			type: "string", 	role: "url", 				def: "" 	},
		plant_thumb_path:	{ name: "plant_thumb_path", 	type: "string", 	role: "url", 				def: "" 	},
		plant_origin_path:	{ name: "plant_origin_path",	type: "string", 	role: "url", 				def: "" 	},
		is_shared:			{ name: "is_shared",			type: "boolean",	role: "value", 				def: false 	},
		temperature_status:	{ name: "temperature_status",	type: "number", 	role: "info.status", 		def: 0, 	states: { 0: "No Data", 1: "Too Low", 2: "Low", 3: "Perfect", 4: "High", 5: "Too High" }, },
		light_status: 		{ name: "light_status",			type: "number",		role: "info.status",		def: 0,		states: { 0: "No Data", 1: "Too Low", 2: "Low", 3: "Perfect", 4: "High", 5: "Too High" }, },
		moisture_status: 	{ name: "moisture_status",		type: "number",		role: "info.status",		def: 0,		states: { 0: "No Data", 1: "Too Low", 2: "Low", 3: "Perfect", 4: "High", 5: "Too High" }, },
		salinity_status: 	{ name: "salinity_status",		type: "number",		role: "info.status",		def: 0,		states: { 0: "No Data", 1: "Too Low", 2: "Low", 3: "Perfect", 4: "High", 5: "Too High" }, },
		nutrients_status: 	{ name: "nutrients_status",		type: "number",		role: "info.status",		def: 0,		states: { 0: "No Data", 1: "Too Low", 2: "Low", 3: "Perfect", 4: "High", 5: "Too High" }, },
		has_remote_hub: 	{ name: "has_remote_hub",		type: "boolean",	role: "value", 				def: false 	},
		has_remote_sensor:	{ name: "has_remote_sensor",	type: "boolean",	role: "value", 				def: false 	},
		isSilent:			{ name: "isSilent", 			type: "boolean", 	role: "value", 				def: false	},
		isDoingGreat:		{ name: "isDoingGreat", 		type: "boolean", 	role: "value", 				def: false	},
	},
	hub: {
		id: 				{ name: "ID",					type: "number",		role: "value" 							},
		hub_id: 			{ name: "hub_id",				type: "string",		role: "value", 				def: ""		},
		hub_name:			{ name: "hub_id",				type: "string", 	role: "info.name", 			def: ""		},
		version: 			{ name: "version",				type: "string", 	role: "info.firmware",		def: ""		},
		status: 			{ name: "status", 				type: "number",		role: "info.status", 		def: 0,		states: { 0: "none", 1: "correct", 2: "error" }},
		received_data_at:	{ name: "received_data_at",		type: "string", 	role: "date", 				def: ""		},
		reached_hub_at: 	{ name: "reached_hub_at",		type: "string", 	role: "date", 				def: ""		},
	},
	sensor: {
		id:					{ name: "ID",					type: "string", 	role: "value" 							},
		status: 			{ name: "status",				type: "number", 	role: "info.status",		def: 0,		states: { 0: "none", 1: "correct", 2: "error" }},
		version: 			{ name: "version",				type: "string", 	role: "info.firmware",		def: ""		},
		is_battery_low:		{ name: "is_battery_low",		type: "boolean",	role: "indicator.lowbat",	def: false	},
		received_data_at:	{ name: "received_data_at",		type: "string", 	role: "date",				def: ""		},
	},

	rawValues: {
		"plant.measurements.temperature.values.current":				{ name: "temperature_current", 			type: "number", 	role: "value.temperature", 	def: 0,		convert: (value) => parseInt(value)},
		"plant.measurements.temperature.values.optimal_hours":			{ name: "temperature_optimal_hours", 	type: "number", 	role: "value", 				def: 0,		convert: (value) => parseInt(value)},
		"plant.measurements.temperature.values.min_good":				{ name: "temperature_min_good", 		type: "number", 	role: "value", 				def: 0,		convert: (value) => parseInt(value)},
		"plant.measurements.temperature.values.max_good":				{ name: "temperature_max_good", 		type: "number", 	role: "value", 				def: 0,		convert: (value) => parseInt(value)},
		"plant.measurements.temperature.values.min_acceptable":			{ name: "temperature_min_acceptable", 	type: "number", 	role: "value", 				def: 0,		convert: (value) => parseInt(value)},
		"plant.measurements.temperature.values.max_acceptable":			{ name: "temperature_max_acceptable", 	type: "number", 	role: "value", 				def: 0,		convert: (value) => parseInt(value)},
		"plant.measurements.temperature.unit":							{ name: "temperature_unit", 			type: "string", 	role: "value", 				def: "",	},

		"plant.measurements.moisture.values.current":					{ name: "moisture_current", 			type: "number", 	role: "value", 				def: 0,		convert: (value) => parseInt(value)},
		"plant.measurements.moisture.values.min_good":					{ name: "moisture_min_good", 			type: "number", 	role: "value", 				def: 0,		convert: (value) => parseInt(value)},
		"plant.measurements.moisture.values.max_good":					{ name: "moisture_max_good", 			type: "number", 	role: "value", 				def: 0,		convert: (value) => parseInt(value)},
		"plant.measurements.moisture.values.min_acceptable":			{ name: "moisture_min_acceptable", 		type: "number", 	role: "value", 				def: 0,		convert: (value) => parseInt(value)},
		"plant.measurements.moisture.values.max_acceptable":			{ name: "moisture_max_acceptable", 		type: "number", 	role: "value", 				def: 0,		convert: (value) => parseInt(value)},
		"plant.measurements.moisture.unit":								{ name: "moisture_unit", 				type: "string", 	role: "value", 				def: "",	},

		"plant.measurements.light.values.current":						{ name: "light_current", 				type: "number", 	role: "value", 				def: 0,		convert: (value) => parseInt(value)},
		"plant.measurements.light.values.min_good":						{ name: "light_min_good", 				type: "number", 	role: "value", 				def: 0,		convert: (value) => parseInt(value)},
		"plant.measurements.light.values.max_good":						{ name: "light_max_good", 				type: "number", 	role: "value", 				def: 0,		convert: (value) => parseInt(value)},
		"plant.measurements.light.values.min_acceptable":				{ name: "light_min_acceptable", 		type: "number", 	role: "value", 				def: 0,		convert: (value) => parseInt(value)},
		"plant.measurements.light.values.max_acceptable":				{ name: "light_max_acceptable", 		type: "number", 	role: "value", 				def: 0,		convert: (value) => parseInt(value)},
		"plant.measurements.light.unit":								{ name: "light_unit", 					type: "string", 	role: "value", 				def: "",	},

		"plant.measurements.salinity.values.current":					{ name: "salinity_current", 			type: "number", 	role: "value", 				def: 0,		convert: (value) => parseInt(value)},
		"plant.measurements.salinity.values.min_good":					{ name: "salinity_min_good", 			type: "number", 	role: "value", 				def: 0,		convert: (value) => parseInt(value)},
		"plant.measurements.salinity.values.max_good":					{ name: "salinity_max_good", 			type: "number", 	role: "value", 				def: 0,		convert: (value) => parseInt(value)},
		"plant.measurements.salinity.values.min_acceptable":			{ name: "salinity_min_acceptable", 		type: "number", 	role: "value", 				def: 0,		convert: (value) => parseInt(value)},
		"plant.measurements.salinity.values.max_acceptable":			{ name: "salinity_max_acceptable", 		type: "number", 	role: "value", 				def: 0,		convert: (value) => parseInt(value)},
		"plant.measurements.salinity.unit":								{ name: "salinity_unit", 				type: "string", 	role: "value", 				def: "",	},

		"plant.measurements.battery":									{ name: "battery", 						type: "number", 	role: "value.battery", 		def: 0,		convert: (value) => parseInt(value)}
	}
}

export default statesDefinition;