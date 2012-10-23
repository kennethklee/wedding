Kore.widget.register("boybear", function (options) {
	var k = Kore,
		opt = options || {},
		widget = k.createTag("div");
	
	widget.svg = [widget, 104, 127,
		{
			"fill": "#FEF1F1",
			"type": "path",
			"stroke": "none",
			"path": "M24,16c-1.136,4.023-3.344,0.057-4-2c-2.04,0.857-5.51-1.574-3-2 C20.651,12.016,21.491,14.843,24,16z"
		}, {
			"fill": "#FEF1F1",
			"type": "path",
			"stroke": "none",
			"path": "M81,12c2.294,2.037-5.818,2.124-5,6c-1.122-0.211-1.557-1.11-2-2 C76.509,14.843,77.349,12.016,81,12z"
		}, {
			"fill": "#FEFDFD",
			"type": "path",
			"stroke": "none",
			"path": "M12,38c-0.627,3.04,1.28,8.614-1,10 C11.627,44.96,9.72,39.386,12,38z"
		}, {
			"fill": "#F8F8F8",
			"type": "path",
			"stroke": "none",
			"path": "M43,52c0-0.333,0-0.667,0-1c4,0,8,0,12,0c0,0.333,0,0.667,0,1 C51,52,47,52,43,52z"
		}, {
			"fill": "#CACACA",
			"type": "path",
			"stroke": "none",
			"path": "M58,74c2.43,1.854-6.592,0.675-9,1c-2.183,0.1-12.479,0.196-7-1 C47.333,74,52.667,74,58,74z"
		}, {
			"fill": "#A0B41E",
			"type": "path",
			"stroke": "none",
			"path": "M0,96c0.333,0,0.667,0,1,0c0,4,0,8,0,12c-0.333,0-0.667,0-1,0 C0,104,0,100,0,96z"
		}, {
			"fill": "#5C6428",
			"type": "path",
			"stroke": "none",
			"path": "M40,122c-3.695-0.638-9.961,1.295-12-1c4,0,8,0,12,0 C40,121.333,40,121.667,40,122z"
		}, {
			"fill": "#646B34",
			"type": "path",
			"stroke": "none",
			"path": "M40,122c0-0.333,0-0.667,0-1c0.333,0,0.667,0,1,0c6,0,12,0,18,0 c0.333,0,0.667,0,1,0c0,0.333,0,0.667,0,1C53.333,122,46.667,122,40,122z"
		}, {
			"fill": "#5C6428",
			"type": "path",
			"stroke": "none",
			"path": "M60,122c0-0.333,0-0.667,0-1c4,0,8,0,12,0 C69.962,123.295,63.695,121.362,60,122z"
		}, {
			"fill": "#95A81C",
			"type": "path",
			"stroke": "none",
			"path": "M67,125c-12.339,1.666-31.661,1.666-44,0 C37.667,125,52.333,125,67,125z"
		}, {
			"fill": "#FCFCFC",
			"type": "path",
			"stroke": "none",
			"path": "M10,12c3.113-4.887,6.372-9.628,13-11 c5.735-1.069,7.591,1.742,12,2c3.542-0.458,5.775-2.225,10-2c4,0,8,0,12,0c6.414,3.792,10.43-0.794,19,0 c4.753,1.914,8.199,5.134,11,9c1.248,5.479,0.895,9.482-1,14c1.566,5.767,3.424,11.243,4,18c0,3.667,0,7.333,0,11 c-1.315,4.685-3.097,8.903-6,12c5.911,10.422,16.638,16.029,19,30c-0.841,3.826-4.951,4.382-8,6c-2.076,8.257-5.163,15.503-13,18 c-1.794-0.127-2.109,1.225-4,1c-6.333,0-12.667,0-19,0c-6,0-12,0-18,0c-6.333,0-12.667,0-19,0c-2.356,0.022-2.944-1.723-6-1 c-0.697-2.636-4.553-2.114-5-5c-3.399,0.066-1.531-5.136-5-5c0-1.333,0-2.667,0-4c0-5.667,0-11.333,0-17 c0.605-2.396,1.438-4.563,1-8c1.656-1.011,1.086-4.247,2-6c0.779-0.221,1.163-0.837,1-2c2.211-0.789,2.502-3.497,4-5 c-2.042-3.624-4.536-6.798-6-11c0-6,0-12,0-18c0.579-5.088,1.459-9.874,4-13C11.467,20.533,8.992,18.008,10,12z M79,9 c0.776-0.224,1.973-0.027,2-1c-4.263-4.216-13.272-5.182-17,0c-7.588-5.518-22.927-4.212-31,0c-2.317-1.683-4.259-3.741-8-4 c-1.59,1.25-11.059,3.572-6,5c-0.211,1.122-1.11,1.557-2,2c-0.224-0.776-0.027-1.973-1-2c-1.289,2.711-2.447,5.553-2,10 c0.309,2.358,3.473,1.86,3,5c-2.59,3.743-3.605,9.061-5,14c-2.28,1.386-0.373,6.96-1,10c0,1.333,0,2.667,0,4 c1.027,3.64,3.148,6.186,4,10c1.75,2.25,5.697,2.303,6,6c-0.333,0-0.667,0-1,0c-0.239-1.534-1.646-0.146-2,1c-0.333,0-0.667,0-1,0 c-2.009,2.039,0.442,1.961,1,4c-1.376,0.043-2.196-0.471-3-1c-4.837,8.989-7.846,25.313-4,37c0,0.333,0,0.667,0,1 c4.315,5.419,10.736,7.402,20,8c15.783,1.019,36.617-0.383,48-1c3.897-2.103,8.246-3.754,10-8c0.865-4.469,2.429-8.237,2-14 c2.288,0.637,6.032,1.983,8,0c0.181-6.514-3.889-8.778-6-13c-2.636-0.697-2.114-4.553-5-5c-1.755-1.578-2.075-4.592-5-5 c-0.221,0.779-0.838,1.163-2,1c-0.149-1.332,4.065-3.019,1-4c-0.211-1.122-1.109-1.557-2-2c-0.667,0-1.333,0-2,0 c2.104-4.563,5.846-7.487,8-12c-0.723-3.056,1.022-3.644,1-6c-1.608-9.058-1.899-19.434-6-26c4.09-2.29,3.755-11.831,0-14 c0.289,0.167-0.222,1.716,0,2C79.878,10.789,79.443,9.89,79,9z"
		}, {
			"fill": "#F3F3F3",
			"type": "path",
			"stroke": "none",
			"path": "M18,69c0.354-1.146,1.761-2.534,2-1c-0.417-0.065-1.437,0.31-1,1 c4.551,7.197,18.198,10.651,30,12c8.333-0.667,15.678-2.322,22-5c1.503-1.497,4.211-1.789,5-4c2.272,0.178,5.828-3.378,4-4 c0-0.333,0-0.667,0-1c0.891,0.443,1.789,0.878,2,2c-6.172,7.828-16.919,11.081-29,13c-15.093,0.426-25.058-4.275-34-10 C18.471,71.195,17.957,70.377,18,69z"
		}, {
			"fill": "#FEFDFD",
			"type": "path",
			"stroke": "none",
			"path": "M11,109c2.682,1.651,4.427,4.239,7,6 c19.374,2.611,39.341,1.62,60,1c4.971-1.029,7.643-4.357,11-7c-1.754,4.246-6.103,5.897-10,8c-11.383,0.617-32.217,2.019-48,1 c-9.264-0.598-15.685-2.581-20-8C11,109.667,11,109.333,11,109z"
		}, {
			"fill": "#FFFFFF",
			"type": "path",
			"stroke": "none",
			"path": "M74,16c0.443,0.89,0.878,1.789,2,2c-0.818-3.876,7.294-3.963,5-6 c0-0.333,0-0.667,0-1c-0.222-0.284,0.289-1.833,0-2c3.755,2.169,4.09,11.71,0,14c4.101,6.566,4.392,16.942,6,26 c0.022,2.356-1.723,2.944-1,6c-2.154,4.513-5.896,7.438-8,12c-1.332,1.001-3.019,1.648-4,3c-2.611,0.389-5.486,0.514-7,2 c-2.759,0.908-7.022,0.311-9,2c-5.333,0-10.667,0-16,0c-0.125-2.209-4.242-0.425-6-1c-0.125-2.209-4.242-0.425-6-1 c-1.233-1.434-3.439-1.895-6-2c-0.027-0.973-1.224-0.776-2-1c0.184-0.851-0.39-0.943-1-1c-0.303-3.697-4.25-3.75-6-6 c-0.852-3.814-2.973-6.36-4-10c0-1.333,0-2.667,0-4c2.28-1.386,0.373-6.96,1-10c1.395-4.939,2.41-10.257,5-14 c0.473-3.14-2.691-2.642-3-5c-0.447-4.447,0.711-7.289,2-10c0.973,0.027,0.776,1.224,1,2c0,0.333,0,0.667,0,1 c-2.51,0.426,0.96,2.857,3,2c0.656,2.057,2.864,6.023,4,2c0.851,0.184,0.943-0.39,1-1c1.329-1.004,3.721-0.946,4-3 c-0.032-3.634-2.94-4.393-7-4c-1.615-0.282-1.722,0.945-3,1c-5.059-1.428,4.41-3.75,6-5c3.741,0.259,5.683,2.317,8,4 c8.073-4.212,23.412-5.518,31,0c3.728-5.182,12.737-4.216,17,0c-0.027,0.973-1.224,0.776-2,1c-0.805-0.529-1.623-1.043-3-1 c-3.808-0.475-6.242,0.424-7,3c-0.468,3.135,2.515,2.819,4,4C72.816,15.851,73.39,15.943,74,16z M26,53 c-0.159,4.159,1.841,6.159,6,6C39.722,55.231,29.769,45.278,26,53z M62,53c-0.158,4.159,1.842,6.159,6,6 C75.722,55.231,65.769,45.278,62,53z M43,51c0,0.333,0,0.667,0,1c0.003,1.003-0.81,1.19-1,2c0.956,1.862-2.995,3.342,0,4 c1.287-2.713,4.97-3.03,9-3c2.134-0.039,5.446,3.759,6,2c-1.165-0.168-1.086-1.581-1-3c0.003-1.003-0.81-1.19-1-2 c0-0.333,0-0.667,0-1C53.275,49.342,44.725,49.342,43,51z M48,66c-1.754,2.445-6.031,2.362-9,1c0.366,5.956,8.334,1.758,11,1 c0.984,1.428,6.294,3.6,8,1c-1.973-1.693-7.363,0.029-6-5c0-1,0-2,0-3c-2.465-0.132-4.818-0.151-6,1 C45.271,64.729,47.987,64.013,48,66z"
		}, {
			"fill": "#FCE2E2",
			"type": "path",
			"stroke": "none",
			"path": "M19,9c1.278-0.055,1.385-1.282,3-1c-0.733,0.934-1.818,1.515-3,2 c1.813,1.853,4.848,2.486,6,5c-0.057,0.61-0.149,1.184-1,1c-2.509-1.157-3.349-3.984-7-4c0-0.333,0-0.667,0-1 C17.89,10.557,18.789,10.122,19,9z"
		}, {
			"fill": "#FACBCB",
			"type": "path",
			"stroke": "none",
			"path": "M22,8c4.06-0.393,6.968,0.366,7,4c-0.279,2.054-2.671,1.996-4,3 c-1.152-2.514-4.187-3.147-6-5C20.182,9.515,21.267,8.934,22,8z"
		}, {
			"fill": "#FCE2E2",
			"type": "path",
			"stroke": "none",
			"path": "M76,8c1.377-0.043,2.195,0.471,3,1c0.443,0.89,0.878,1.789,2,2 c0,0.333,0,0.667,0,1c-3.651,0.016-4.491,2.843-7,4c-0.61-0.057-1.184-0.149-1-1c1.662-1.671,2.618-4.049,6-4 c-0.443-0.89-0.878-1.789-2-2C76.149,9.184,76.057,8.61,76,8z"
		}, {
			"fill": "#FACBCB",
			"type": "path",
			"stroke": "none",
			"path": "M73,15c-1.485-1.181-4.468-0.865-4-4 c0.758-2.576,3.192-3.475,7-3c0.057,0.61,0.149,1.184,1,1c1.122,0.211,1.557,1.11,2,2C75.618,10.951,74.662,13.329,73,15z"
		}, {
			"fill": "#48520E",
			"type": "path",
			"stroke": "none",
			"path": "M5,40c1.231-3.435,1.75-7.583,3-11 c-1.443-3.224-0.945-8.388-1-13c1.004-1.329,0.946-3.721,3-4c-1.008,6.008,1.467,8.533,2,13c-2.541,3.126-3.421,7.912-4,13 c-1.663,3.695-1.663,14.305,0,18c1.464,4.202,3.958,7.376,6,11c-1.498,1.503-1.789,4.211-4,5c-0.377-5.956-6.929-5.738-6-13 c0-2.333,0-4.667,0-7C6.295,49.961,4.362,43.695,5,40z"
		}, {
			"fill": "#F3F3F3",
			"type": "path",
			"stroke": "none",
			"path": "M42,54c0.19-0.81,1.003-0.997,1-2c4,0,8,0,12,0 c0.19,0.81,1.003,0.997,1,2C53.173,52.413,44.827,52.413,42,54z"
		}, {
			"fill": "#E8E8E7",
			"type": "path",
			"stroke": "none",
			"path": "M42,54c2.827-1.587,11.173-1.587,14,0 c-0.086,1.419-0.165,2.832,1,3c-0.554,1.759-3.866-2.039-6-2c-4.03-0.03-7.713,0.287-9,3C39.005,57.342,42.956,55.862,42,54z"
		}, {
			"fill": "#010101",
			"type": "path",
			"stroke": "none",
			"path": "M48,66c-0.013-1.987-2.729-1.271-2-4 c1.182-1.151,3.535-1.132,6-1c0,1,0,2,0,3c-1.165,0.168-1.086,1.581-1,3c-1.122,0.102-1.557-1.454-2,0 C48.39,66.943,47.816,66.851,48,66z"
		}, {
			"fill": "#E3E3E3",
			"type": "path",
			"stroke": "none",
			"path": "M78,67c0.667,0,1.333,0,2,0c0,0.333,0,0.667,0,1 c-1.003-0.003-1.19,0.81-2,1c-3.305,2.695-7.615,4.385-11,7c-10.313,3.683-24.686,3.683-35,0c-1.692-2.346-9.321-3.962-8-6 c2.561,0.105,4.767,0.566,6,2c-0.363-0.251-1.729,0.327-2,0c2.294,2.775,10.616,5.462,17,6c11.202,0.944,24.441-3.147,29-8 C74.981,68.648,76.668,68.001,78,67z"
		}, {
			"fill": "#ECECEC",
			"type": "path",
			"stroke": "none",
			"path": "M22,69c-0.667,0-1.333,0-2,0c3.584,2.749,6.894,5.772,12,7 c10.314,3.683,24.687,3.683,35,0c4.653-1.347,8.505-3.495,11-7c0.81-0.19,0.997-1.003,2-1c1.828,0.622-1.728,4.178-4,4 c-0.789,2.211-3.497,2.503-5,4c-6.322,2.678-13.667,4.333-22,5c-11.802-1.349-25.449-4.803-30-12c-0.437-0.69,0.583-1.065,1-1 c0.333,0,0.667,0,1,0C21.61,68.057,22.184,68.149,22,69z"
		}, {
			"fill": "#F8F8F8",
			"type": "path",
			"stroke": "none",
			"path": "M18,69c-0.043,1.377,0.471,2.195,1,3 c8.942,5.725,18.907,10.426,34,10c12.081-1.919,22.828-5.172,29-13c3.065,0.981-1.149,2.668-1,4c-3.8,0.2-3.795,4.205-8,4 c-1.069,2.598-5.931,1.402-7,4c-2.319-0.319-3.839,0.161-5,1c-7.803,1.472-16.061,0.957-24,0c-0.31-1.357-2.504-0.829-4-1 c-2.161-2.173-5.838-2.829-9-4c-2.116-1.218-2.904-3.763-6-4c-0.558-2.039-3.009-1.961-1-4C17.333,69,17.667,69,18,69z"
		}, {
			"fill": "#323232",
			"type": "path",
			"stroke": "none",
			"path": "M52,64c-1.363,5.029,4.027,3.307,6,5c-1.706,2.6-7.016,0.428-8-1 c-2.666,0.758-10.634,4.956-11-1c2.969,1.362,7.246,1.445,9-1c-0.184,0.851,0.39,0.943,1,1c0.443-1.454,0.878,0.102,2,0 C50.914,65.581,50.835,64.168,52,64z"
		}, {
			"fill": "#E8E8E7",
			"type": "path",
			"stroke": "none",
			"path": "M32,76c-5.106-1.228-8.416-4.251-12-7c0.667,0,1.333,0,2,0 c0.776,0.224,1.973,0.027,2,1C22.679,72.038,30.308,73.654,32,76z"
		}, {
			"fill": "#E8E8E7",
			"type": "path",
			"stroke": "none",
			"path": "M67,76c3.385-2.615,7.695-4.305,11-7 C75.505,72.505,71.653,74.653,67,76z"
		}, {
			"fill": "#DCDCDC",
			"type": "path",
			"stroke": "none",
			"path": "M67,72c1.514-1.486,4.389-1.611,7-2 c-4.559,4.853-17.798,8.944-29,8c-6.384-0.538-14.706-3.225-17-6c0.271,0.327,1.637-0.251,2,0c1.758,0.575,5.875-1.209,6,1 c-11.476-0.716,8.052,3.883,12,4c8.823,0.262,17.285-3.954,21-4C68.973,72.027,67.776,72.224,67,72z"
		}, {
			"fill": "#FEFDFD",
			"type": "path",
			"stroke": "none",
			"path": "M24,77c3.162,1.171,6.839,1.827,9,4 c-4.977,0.977-5.956-2.044-9-3C24,77.667,24,77.333,24,77z"
		}, {
			"fill": "#FFFFFF",
			"type": "path",
			"stroke": "none",
			"path": "M11,109c-3.846-11.688-0.837-28.011,4-37 c0.804,0.529,1.624,1.043,3,1c3.096,0.237,3.884,2.782,6,4c0,0.333,0,0.667,0,1c3.044,0.956,4.023,3.977,9,3 c1.496,0.171,3.69-0.357,4,1c5.092,2.996,18.908,2.996,24,0c1.161-0.839,2.681-1.319,5-1c1.069-2.598,5.931-1.402,7-4 c4.205,0.205,4.2-3.8,8-4c1.162,0.163,1.779-0.221,2-1c2.925,0.408,3.245,3.422,5,5c2.886,0.447,2.364,4.303,5,5 c2.111,4.222,6.181,6.486,6,13c-1.968,1.983-5.712,0.637-8,0c0.429,5.763-1.135,9.531-2,14c-3.357,2.643-6.029,5.971-11,7 c-20.659,0.62-40.626,1.611-60-1C15.427,113.239,13.682,110.651,11,109z M35,91c-0.112-2.555-1.833-3.5-3-5 c1.036,2.631,1.197,6.137,1,10c0.451,2.784-5.451-0.784-5,2c2.928-0.261,3.072,2.261,6,2c0,0.333,0,0.667,0,1 c4.252,1.195,3.683-7.573,2-9C35.943,91.39,35.851,90.816,35,91z"
		}, {
			"fill": "#D3D3D3",
			"type": "path",
			"stroke": "none",
			"path": "M58,74c1.978-1.689,6.241-1.092,9-2c0.776,0.224,1.973,0.027,2,1 c-3.715,0.046-12.177,4.262-21,4c-3.948-0.117-23.476-4.716-12-4c1.758,0.575,5.875-1.209,6,1c-5.479,1.196,4.817,1.1,7,1 C51.408,74.675,60.43,75.854,58,74z"
		}, {
			"fill": "#48520E",
			"type": "path",
			"stroke": "none",
			"path": "M4,84c1.342-0.658,1.862-2.138,2-4c0.333,0,0.667,0,1,0 c0.438,3.438-0.395,5.604-1,8c-1.662,3.365-1.662,13.635,0,17c0,1.333,0,2.667,0,4c3.469-0.136,1.601,5.066,5,5 c0.447,2.886,4.303,2.364,5,5c3.056-0.723,3.644,1.022,6,1c0.125,2.209,4.242,0.425,6,1c2.039,2.295,8.305,0.362,12,1 c6.667,0,13.333,0,20,0c3.695-0.638,9.962,1.295,12-1c1.758-0.575,5.875,1.209,6-1c1.891,0.225,2.206-1.127,4-1 c-1.015,3.985-7.185,2.815-10,5c-18,0-36,0-54,0c-6.666-2.001-12.633-4.7-15-11c-0.106-6.228-1.658-11.009-1-18 C0.63,89.297,4.623,88.956,4,84z"
		}, {
			"fill": "#F3F3F3",
			"type": "path",
			"stroke": "none",
			"path": "M34,100c3.11-0.223,1.689-4.977,2-8 c1.683,1.427,2.252,10.195-2,9C34,100.667,34,100.333,34,100z"
		}, {
			"fill": "#AEC137",
			"type": "path",
			"stroke": "none",
			"path": "M45,0c4,0,8,0,12,0c0,0.333,0,0.667,0,1c-4,0-8,0-12,0 C45,0.667,45,0.333,45,0z"
		}, {
			"fill": "#667313",
			"type": "path",
			"stroke": "none",
			"path": "M5,40c-0.638,3.695,1.295,9.961-1,12c0-1.667,0-3.333,0-5 C4.595,44.928,2.764,40.431,5,40z"
		}, {
			"fill": "#AEC137",
			"type": "path",
			"stroke": "none",
			"path": "M90,42c1.657,1.4,1.657,9.6,0,11C90,49.333,90,45.667,90,42z"
		}, {
			"fill": "#717843",
			"type": "path",
			"stroke": "none",
			"path": "M8,38c0,6,0,12,0,18C6.337,52.305,6.337,41.695,8,38z"
		}, {
			"fill": "#FCFCFC",
			"type": "path",
			"stroke": "none",
			"path": "M43,51c1.725-1.658,10.275-1.658,12,0C51,51,47,51,43,51z"
		}, {
			"fill": "#010101",
			"type": "path",
			"stroke": "none",
			"path": "M32,59c-4.159,0.159-6.159-1.841-6-6 C29.769,45.278,39.722,55.231,32,59z"
		}, {
			"fill": "#010101",
			"type": "path",
			"stroke": "none",
			"path": "M68,59c-4.158,0.159-6.158-1.841-6-6 C65.769,45.278,75.722,55.231,68,59z"
		}, {
			"fill": "#859619",
			"type": "path",
			"stroke": "none",
			"path": "M4,52c0,2.333,0,4.667,0,7c-1.658-1.725-1.658-10.275,0-12 C4,48.667,4,50.333,4,52z"
		}, {
			"fill": "#FEFDFD",
			"type": "path",
			"stroke": "none",
			"path": "M37,82c7.939,0.957,16.197,1.472,24,0 C55.908,84.996,42.092,84.996,37,82z"
		}, {
			"fill": "#667313",
			"type": "path",
			"stroke": "none",
			"path": "M4,84c0.233-4.767,2.787-7.213,5-10 c-0.914,1.753-0.344,4.989-2,6c-0.333,0-0.667,0-1,0C5.862,81.862,5.342,83.342,4,84z"
		}, {
			"fill": "#DCDCDC",
			"type": "path",
			"stroke": "none",
			"path": "M33,96c0.197-3.863,0.036-7.369-1-10c1.167,1.5,2.888,2.445,3,5 C34.557,92.89,36.36,97.026,33,96z"
		}, {
			"fill": "#8D9369",
			"type": "path",
			"stroke": "none",
			"path": "M6,88c0,5.667,0,11.333,0,17C4.338,101.635,4.338,91.365,6,88z"
		}, {
			"fill": "#E8E8E7",
			"type": "path",
			"stroke": "none",
			"path": "M36,92c-0.311,3.023,1.11,7.777-2,8 c-2.928,0.261-3.072-2.261-6-2c-0.451-2.784,5.451,0.784,5-2c3.36,1.026,1.557-3.11,2-5C35.851,90.816,35.943,91.39,36,92z"
		}, {
			"fill": "#758317",
			"type": "path",
			"stroke": "none",
			"path": "M3,113c-2.077-0.257-0.273-4.394-2-5c0-4,0-8,0-12 c0.057-0.61,0.149-1.184,1-1C1.342,101.991,2.894,106.772,3,113z"
		}, {
			"fill": "#CDD0C0",
			"type": "path",
			"stroke": "none",
			"path": "M22,120c6.333,0,12.667,0,19,0c0,0.333,0,0.667,0,1 c-0.333,0-0.667,0-1,0c-4,0-8,0-12,0C26.242,120.425,22.125,122.209,22,120z"
		}, {
			"fill": "#ECECEC",
			"type": "path",
			"stroke": "none",
			"path": "M41,120c6,0,12,0,18,0c0,0.333,0,0.667,0,1c-6,0-12,0-18,0 C41,120.667,41,120.333,41,120z"
		}, {
			"fill": "#CDD0C0",
			"type": "path",
			"stroke": "none",
			"path": "M59,120c6.333,0,12.667,0,19,0c-0.125,2.209-4.242,0.425-6,1 c-4,0-8,0-12,0c-0.333,0-0.667,0-1,0C59,120.667,59,120.333,59,120z"
		}, {
			"fill": "#667313",
			"type": "path",
			"stroke": "none",
			"path": "M18,124c18,0,36,0,54,0c0.169,2.169-3.547,0.453-5,1 c-14.667,0-29.333,0-44,0C21.547,124.453,17.832,126.169,18,124z"
		}];
	widget.style.width = widget.svg[1] + "px";
	widget.style.height = widget.svg[2] + "px";

	widget.raphael = new Raphael(widget.svg);

	//$("path", widget).attr("style", "filter:url(#dropshadow1)");

	return widget;
});