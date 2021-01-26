var color = Chart.helpers.color;
Chart.defaults.global.elements.line.fill = false;
Chart.defaults.global.elements.line.tension = 0;
Chart.defaults.global.defaultFontColor = "#DADADA";
var gen0_config = {
	type: 'line',
	plugins: [ChartDataSource],
	options: {
		title: {
			display: true,
			text: 'Non-JP Percentage (HoloJP Gen0)'
		},
		scales: {
			xAxes: [{
				scaleLabel: {
					display: true,
					labelString: 'Month'
				}
			}],
			yAxes: [{
				id: 'percent',
				gridLines: {
					drawOnChartArea: false
				},
				scaleLabel: {
					display: true,
					labelString: 'Percent'
				},
				ticks: {
					suggestedMin: 0,
					suggestedMax: 70
				}
			}]
		},
		plugins: {
			datasource: {
				type: 'csv',
				url: 'csv/hl-nonjp-gen0.csv',
				delimiter: ',',
				rowMapping: 'dataset',
				datasetLabels: true,
				indexLabels: true
			},
			colorschemes: {
				scheme: 'tableau.Classic10'
			}
		}
	}
};
var gen1_config = {
	type: 'line',
	plugins: [ChartDataSource],
	options: {
		title: {
			display: true,
			text: 'Non-JP Percentage (HoloJP Gen1)'
		},
		scales: {
			xAxes: [{
				scaleLabel: {
					display: true,
					labelString: 'Month'
				}
			}],
			yAxes: [{
				id: 'percent',
				gridLines: {
					drawOnChartArea: false
				},
				scaleLabel: {
					display: true,
					labelString: 'Percent'
				},
				ticks: {
					suggestedMin: 0,
					suggestedMax: 70
				}
			}]
		},
		plugins: {
			datasource: {
				type: 'csv',
				url: 'csv/hl-nonjp-gen1.csv',
				delimiter: ',',
				rowMapping: 'dataset',
				datasetLabels: true,
				indexLabels: true
			},
			colorschemes: {
				scheme: 'tableau.Classic10'
			}
		}
	}
};
var gen2_config = {
	type: 'line',
	plugins: [ChartDataSource],
	options: {
		title: {
			display: true,
			text: 'Non-JP Percentage (HoloJP Gen2)'
		},
		scales: {
			xAxes: [{
				scaleLabel: {
					display: true,
					labelString: 'Month'
				}
			}],
			yAxes: [{
				id: 'percent',
				gridLines: {
					drawOnChartArea: false
				},
				scaleLabel: {
					display: true,
					labelString: 'Percent'
				},
				ticks: {
					suggestedMin: 0,
					suggestedMax: 70
				}
			}]
		},
		plugins: {
			datasource: {
				type: 'csv',
				url: 'csv/hl-nonjp-gen2.csv',
				delimiter: ',',
				rowMapping: 'dataset',
				datasetLabels: true,
				indexLabels: true
			},
			colorschemes: {
				scheme: 'tableau.Classic10'
			}
		}
	}
};
var gmr_config = {
	type: 'line',
	plugins: [ChartDataSource],
	options: {
		title: {
			display: true,
			text: 'Non-JP Percentage (HoloJP Gamers)'
		},
		scales: {
			xAxes: [{
				scaleLabel: {
					display: true,
					labelString: 'Month'
				}
			}],
			yAxes: [{
				id: 'percent',
				gridLines: {
					drawOnChartArea: false
				},
				scaleLabel: {
					display: true,
					labelString: 'Percent'
				},
				ticks: {
					suggestedMin: 0,
					suggestedMax: 70
				}
			}]
		},
		plugins: {
			datasource: {
				type: 'csv',
				url: 'csv/hl-nonjp-gamers.csv',
				delimiter: ',',
				rowMapping: 'dataset',
				datasetLabels: true,
				indexLabels: true
			},
			colorschemes: {
				scheme: 'tableau.Classic10'
			}
		}
	}
};
var gen3_config = {
	type: 'line',
	plugins: [ChartDataSource],
	options: {
		title: {
			display: true,
			text: 'Non-JP Percentage (HoloJP Gen3)'
		},
		scales: {
			xAxes: [{
				scaleLabel: {
					display: true,
					labelString: 'Month'
				}
			}],
			yAxes: [{
				id: 'percent',
				gridLines: {
					drawOnChartArea: false
				},
				scaleLabel: {
					display: true,
					labelString: 'Percent'
				},
				ticks: {
					suggestedMin: 0,
					suggestedMax: 70
				}
			}]
		},
		plugins: {
			datasource: {
				type: 'csv',
				url: 'csv/hl-nonjp-gen3.csv',
				delimiter: ',',
				rowMapping: 'dataset',
				datasetLabels: true,
				indexLabels: true
			},
			colorschemes: {
				scheme: 'tableau.Classic10'
			}
		}
	}
};
var gen3_config = {
	type: 'line',
	plugins: [ChartDataSource],
	options: {
		title: {
			display: true,
			text: 'Non-JP Percentage (HoloJP Gen3)'
		},
		scales: {
			xAxes: [{
				scaleLabel: {
					display: true,
					labelString: 'Month'
				}
			}],
			yAxes: [{
				id: 'percent',
				gridLines: {
					drawOnChartArea: false
				},
				scaleLabel: {
					display: true,
					labelString: 'Percent'
				},
				ticks: {
					suggestedMin: 0,
					suggestedMax: 70
				}
			}]
		},
		plugins: {
			datasource: {
				type: 'csv',
				url: 'csv/hl-nonjp-gen3.csv',
				delimiter: ',',
				rowMapping: 'dataset',
				datasetLabels: true,
				indexLabels: true
			},
			colorschemes: {
				scheme: 'tableau.Classic10'
			}
		}
	}
};
var gen4_config = {
	type: 'line',
	plugins: [ChartDataSource],
	options: {
		title: {
			display: true,
			text: 'Non-JP Percentage (HoloJP Gen4)'
		},
		scales: {
			xAxes: [{
				scaleLabel: {
					display: true,
					labelString: 'Month'
				}
			}],
			yAxes: [{
				id: 'percent',
				gridLines: {
					drawOnChartArea: false
				},
				scaleLabel: {
					display: true,
					labelString: 'Percent'
				},
				ticks: {
					suggestedMin: 0,
					suggestedMax: 70
				}
			}]
		},
		plugins: {
			datasource: {
				type: 'csv',
				url: 'csv/hl-nonjp-gen4.csv',
				delimiter: ',',
				rowMapping: 'dataset',
				datasetLabels: true,
				indexLabels: true
			},
			colorschemes: {
				scheme: 'tableau.Classic10'
			}
		}
	}
};
var gen5_config = {
	type: 'line',
	plugins: [ChartDataSource],
	options: {
		title: {
			display: true,
			text: 'Non-JP Percentage (HoloJP Gen5)'
		},
		scales: {
			xAxes: [{
				scaleLabel: {
					display: true,
					labelString: 'Month'
				}
			}],
			yAxes: [{
				id: 'percent',
				gridLines: {
					drawOnChartArea: false
				},
				scaleLabel: {
					display: true,
					labelString: 'Percent'
				},
				ticks: {
					suggestedMin: 0,
					suggestedMax: 70
				}
			}]
		},
		plugins: {
			datasource: {
				type: 'csv',
				url: 'csv/hl-nonjp-gen5.csv',
				delimiter: ',',
				rowMapping: 'dataset',
				datasetLabels: true,
				indexLabels: true
			},
			colorschemes: {
				scheme: 'tableau.Classic10'
			}
		}
	}
};
var hs1_config = {
	type: 'line',
	plugins: [ChartDataSource],
	options: {
		title: {
			display: true,
			text: 'Non-JP Percentage (HoloStars Gen1)'
		},
		scales: {
			xAxes: [{
				scaleLabel: {
					display: true,
					labelString: 'Month'
				}
			}],
			yAxes: [{
				id: 'percent',
				gridLines: {
					drawOnChartArea: false
				},
				scaleLabel: {
					display: true,
					labelString: 'Percent'
				},
				ticks: {
					suggestedMin: 0,
					suggestedMax: 80
				}
			}]
		},
		plugins: {
			datasource: {
				type: 'csv',
				url: 'csv/hl-nonjp-hstars1.csv',
				delimiter: ',',
				rowMapping: 'dataset',
				datasetLabels: true,
				indexLabels: true
			},
			colorschemes: {
				scheme: 'tableau.Classic10'
			}
		}
	}
};
var hs2_config = {
	type: 'line',
	plugins: [ChartDataSource],
	options: {
		title: {
			display: true,
			text: 'Non-JP Percentage (HoloStars Gen2+3)'
		},
		scales: {
			xAxes: [{
				scaleLabel: {
					display: true,
					labelString: 'Month'
				}
			}],
			yAxes: [{
				id: 'percent',
				gridLines: {
					drawOnChartArea: false
				},
				scaleLabel: {
					display: true,
					labelString: 'Percent'
				},
				ticks: {
					suggestedMin: 0,
					suggestedMax: 80
				}
			}]
		},
		plugins: {
			datasource: {
				type: 'csv',
				url: 'csv/hl-nonjp-hstars2.csv',
				delimiter: ',',
				rowMapping: 'dataset',
				datasetLabels: true,
				indexLabels: true
			},
			colorschemes: {
				scheme: 'tableau.Classic10'
			}
		}
	}
};
var id_config = {
	type: 'line',
	plugins: [ChartDataSource],
	options: {
		title: {
			display: true,
			text: 'JP Percentage (HoloID)'
		},
		scales: {
			xAxes: [{
				scaleLabel: {
					display: true,
					labelString: 'Month'
				}
			}],
			yAxes: [{
				id: 'percent',
				gridLines: {
					drawOnChartArea: false
				},
				scaleLabel: {
					display: true,
					labelString: 'Percent'
				},
				ticks: {
					suggestedMin: 0,
					suggestedMax: 14
				}
			}]
		},
		plugins: {
			datasource: {
				type: 'csv',
				url: 'csv/hl-jp-id.csv',
				delimiter: ',',
				rowMapping: 'dataset',
				datasetLabels: true,
				indexLabels: true
			},
			colorschemes: {
				scheme: 'tableau.Classic10'
			}
		}
	}
};
var en_config = {
	type: 'line',
	plugins: [ChartDataSource],
	options: {
		title: {
			display: true,
			text: 'JP Percentage (HoloEN)'
		},
		scales: {
			xAxes: [{
				scaleLabel: {
					display: true,
					labelString: 'Month'
				}
			}],
			yAxes: [{
				id: 'percent',
				gridLines: {
					drawOnChartArea: false
				},
				scaleLabel: {
					display: true,
					labelString: 'Percent'
				},
				ticks: {
					suggestedMin: 0,
					suggestedMax: 14
				}
			}]
		},
		plugins: {
			datasource: {
				type: 'csv',
				url: 'csv/hl-jp-en.csv',
				delimiter: ',',
				rowMapping: 'dataset',
				datasetLabels: true,
				indexLabels: true
			},
			colorschemes: {
				scheme: 'tableau.Classic10'
			}
		}
	}
};
var gen0ru_config = {
	type: 'line',
	plugins: [ChartDataSource],
	options: {
		title: {
			display: true,
			text: 'RU Percentage (HoloJP Gen0)'
		},
		scales: {
			xAxes: [{
				scaleLabel: {
					display: true,
					labelString: 'Month'
				}
			}],
			yAxes: [{
				id: 'percent',
				gridLines: {
					drawOnChartArea: false
				},
				scaleLabel: {
					display: true,
					labelString: 'Percent'
				},
				ticks: {
					suggestedMin: 0//,
					//suggestedMax: 70
				}
			}]
		},
		plugins: {
			datasource: {
				type: 'csv',
				url: 'csv/hl-ru-gen0.csv',
				delimiter: ',',
				rowMapping: 'dataset',
				datasetLabels: true,
				indexLabels: true
			},
			colorschemes: {
				scheme: 'tableau.Classic10'
			}
		}
	}
};
var gen1ru_config = {
	type: 'line',
	plugins: [ChartDataSource],
	options: {
		title: {
			display: true,
			text: 'RU Percentage (HoloJP Gen1)'
		},
		scales: {
			xAxes: [{
				scaleLabel: {
					display: true,
					labelString: 'Month'
				}
			}],
			yAxes: [{
				id: 'percent',
				gridLines: {
					drawOnChartArea: false
				},
				scaleLabel: {
					display: true,
					labelString: 'Percent'
				},
				ticks: {
					suggestedMin: 0//,
					//suggestedMax: 70
				}
			}]
		},
		plugins: {
			datasource: {
				type: 'csv',
				url: 'csv/hl-ru-gen1.csv',
				delimiter: ',',
				rowMapping: 'dataset',
				datasetLabels: true,
				indexLabels: true
			},
			colorschemes: {
				scheme: 'tableau.Classic10'
			}
		}
	}
};
var gen2ru_config = {
	type: 'line',
	plugins: [ChartDataSource],
	options: {
		title: {
			display: true,
			text: 'RU Percentage (HoloJP Gen2)'
		},
		scales: {
			xAxes: [{
				scaleLabel: {
					display: true,
					labelString: 'Month'
				}
			}],
			yAxes: [{
				id: 'percent',
				gridLines: {
					drawOnChartArea: false
				},
				scaleLabel: {
					display: true,
					labelString: 'Percent'
				},
				ticks: {
					suggestedMin: 0//,
					//suggestedMax: 70
				}
			}]
		},
		plugins: {
			datasource: {
				type: 'csv',
				url: 'csv/hl-ru-gen2.csv',
				delimiter: ',',
				rowMapping: 'dataset',
				datasetLabels: true,
				indexLabels: true
			},
			colorschemes: {
				scheme: 'tableau.Classic10'
			}
		}
	}
};
var gmrru_config = {
	type: 'line',
	plugins: [ChartDataSource],
	options: {
		title: {
			display: true,
			text: 'RU Percentage (HoloJP Gamers)'
		},
		scales: {
			xAxes: [{
				scaleLabel: {
					display: true,
					labelString: 'Month'
				}
			}],
			yAxes: [{
				id: 'percent',
				gridLines: {
					drawOnChartArea: false
				},
				scaleLabel: {
					display: true,
					labelString: 'Percent'
				},
				ticks: {
					suggestedMin: 0//,
					//suggestedMax: 70
				}
			}]
		},
		plugins: {
			datasource: {
				type: 'csv',
				url: 'csv/hl-ru-gamers.csv',
				delimiter: ',',
				rowMapping: 'dataset',
				datasetLabels: true,
				indexLabels: true
			},
			colorschemes: {
				scheme: 'tableau.Classic10'
			}
		}
	}
};
var gen3ru_config = {
	type: 'line',
	plugins: [ChartDataSource],
	options: {
		title: {
			display: true,
			text: 'RU Percentage (HoloJP Gen3)'
		},
		scales: {
			xAxes: [{
				scaleLabel: {
					display: true,
					labelString: 'Month'
				}
			}],
			yAxes: [{
				id: 'percent',
				gridLines: {
					drawOnChartArea: false
				},
				scaleLabel: {
					display: true,
					labelString: 'Percent'
				},
				ticks: {
					suggestedMin: 0//,
					//suggestedMax: 70
				}
			}]
		},
		plugins: {
			datasource: {
				type: 'csv',
				url: 'csv/hl-ru-gen3.csv',
				delimiter: ',',
				rowMapping: 'dataset',
				datasetLabels: true,
				indexLabels: true
			},
			colorschemes: {
				scheme: 'tableau.Classic10'
			}
		}
	}
};
var gen4ru_config = {
	type: 'line',
	plugins: [ChartDataSource],
	options: {
		title: {
			display: true,
			text: 'RU Percentage (HoloJP Gen4)'
		},
		scales: {
			xAxes: [{
				scaleLabel: {
					display: true,
					labelString: 'Month'
				}
			}],
			yAxes: [{
				id: 'percent',
				gridLines: {
					drawOnChartArea: false
				},
				scaleLabel: {
					display: true,
					labelString: 'Percent'
				},
				ticks: {
					suggestedMin: 0//,
					//suggestedMax: 70
				}
			}]
		},
		plugins: {
			datasource: {
				type: 'csv',
				url: 'csv/hl-ru-gen4.csv',
				delimiter: ',',
				rowMapping: 'dataset',
				datasetLabels: true,
				indexLabels: true
			},
			colorschemes: {
				scheme: 'tableau.Classic10'
			}
		}
	}
};
var gen5ru_config = {
	type: 'line',
	plugins: [ChartDataSource],
	options: {
		title: {
			display: true,
			text: 'RU Percentage (HoloJP Gen5)'
		},
		scales: {
			xAxes: [{
				scaleLabel: {
					display: true,
					labelString: 'Month'
				}
			}],
			yAxes: [{
				id: 'percent',
				gridLines: {
					drawOnChartArea: false
				},
				scaleLabel: {
					display: true,
					labelString: 'Percent'
				},
				ticks: {
					suggestedMin: 0//,
					//suggestedMax: 70
				}
			}]
		},
		plugins: {
			datasource: {
				type: 'csv',
				url: 'csv/hl-ru-gen5.csv',
				delimiter: ',',
				rowMapping: 'dataset',
				datasetLabels: true,
				indexLabels: true
			},
			colorschemes: {
				scheme: 'tableau.Classic10'
			}
		}
	}
};
var hs1ru_config = {
	type: 'line',
	plugins: [ChartDataSource],
	options: {
		title: {
			display: true,
			text: 'RU Percentage (HoloStars Gen1)'
		},
		scales: {
			xAxes: [{
				scaleLabel: {
					display: true,
					labelString: 'Month'
				}
			}],
			yAxes: [{
				id: 'percent',
				gridLines: {
					drawOnChartArea: false
				},
				scaleLabel: {
					display: true,
					labelString: 'Percent'
				},
				ticks: {
					suggestedMin: 0//,
					//suggestedMax: 70
				}
			}]
		},
		plugins: {
			datasource: {
				type: 'csv',
				url: 'csv/hl-ru-hstars1.csv',
				delimiter: ',',
				rowMapping: 'dataset',
				datasetLabels: true,
				indexLabels: true
			},
			colorschemes: {
				scheme: 'tableau.Classic10'
			}
		}
	}
};
var hs2ru_config = {
	type: 'line',
	plugins: [ChartDataSource],
	options: {
		title: {
			display: true,
			text: 'RU Percentage (HoloStars Gen2+3)'
		},
		scales: {
			xAxes: [{
				scaleLabel: {
					display: true,
					labelString: 'Month'
				}
			}],
			yAxes: [{
				id: 'percent',
				gridLines: {
					drawOnChartArea: false
				},
				scaleLabel: {
					display: true,
					labelString: 'Percent'
				},
				ticks: {
					suggestedMin: 0//,
					//suggestedMax: 70
				}
			}]
		},
		plugins: {
			datasource: {
				type: 'csv',
				url: 'csv/hl-ru-hstars2.csv',
				delimiter: ',',
				rowMapping: 'dataset',
				datasetLabels: true,
				indexLabels: true
			},
			colorschemes: {
				scheme: 'tableau.Classic10'
			}
		}
	}
};
var idru_config = {
	type: 'line',
	plugins: [ChartDataSource],
	options: {
		title: {
			display: true,
			text: 'RU Percentage (HoloID)'
		},
		scales: {
			xAxes: [{
				scaleLabel: {
					display: true,
					labelString: 'Month'
				}
			}],
			yAxes: [{
				id: 'percent',
				gridLines: {
					drawOnChartArea: false
				},
				scaleLabel: {
					display: true,
					labelString: 'Percent'
				},
				ticks: {
					suggestedMin: 0//,
					//suggestedMax: 70
				}
			}]
		},
		plugins: {
			datasource: {
				type: 'csv',
				url: 'csv/hl-ru-id.csv',
				delimiter: ',',
				rowMapping: 'dataset',
				datasetLabels: true,
				indexLabels: true
			},
			colorschemes: {
				scheme: 'tableau.Classic10'
			}
		}
	}
};
var enru_config = {
	type: 'line',
	plugins: [ChartDataSource],
	options: {
		title: {
			display: true,
			text: 'RU Percentage (HoloEN)'
		},
		scales: {
			xAxes: [{
				scaleLabel: {
					display: true,
					labelString: 'Month'
				}
			}],
			yAxes: [{
				id: 'percent',
				gridLines: {
					drawOnChartArea: false
				},
				scaleLabel: {
					display: true,
					labelString: 'Percent'
				},
				ticks: {
					suggestedMin: 0//,
					//suggestedMax: 70
				}
			}]
		},
		plugins: {
			datasource: {
				type: 'csv',
				url: 'csv/hl-ru-en.csv',
				delimiter: ',',
				rowMapping: 'dataset',
				datasetLabels: true,
				indexLabels: true
			},
			colorschemes: {
				scheme: 'tableau.Classic10'
			}
		}
	}
};
var njpm_config = {
	type: 'line',
	plugins: [ChartDataSource],
	options: {
		title: {
			display: true,
			text: 'Non-JP Mean'
		},
		scales: {
			xAxes: [{
				scaleLabel: {
					display: true,
					labelString: 'Month'
				}
			}],
			yAxes: [{
				id: 'percent',
				gridLines: {
					drawOnChartArea: false
				},
				scaleLabel: {
					display: true,
					labelString: 'Percent'
				},
				ticks: {
					suggestedMin: 0//,
					//suggestedMax: 70
				}
			}]
		},
		plugins: {
			datasource: {
				type: 'csv',
				url: 'csv/hl-nonjp-mean.csv',
				delimiter: ',',
				rowMapping: 'dataset',
				datasetLabels: true,
				indexLabels: true
			},
			colorschemes: {
				scheme: 'tableau.Classic10'
			}
		}
	}
};
var jpm_config = {
	type: 'line',
	plugins: [ChartDataSource],
	options: {
		title: {
			display: true,
			text: 'JP Mean'
		},
		scales: {
			xAxes: [{
				scaleLabel: {
					display: true,
					labelString: 'Month'
				}
			}],
			yAxes: [{
				id: 'percent',
				gridLines: {
					drawOnChartArea: false
				},
				scaleLabel: {
					display: true,
					labelString: 'Percent'
				},
				ticks: {
					suggestedMin: 0//,
					//suggestedMax: 70
				}
			}]
		},
		plugins: {
			datasource: {
				type: 'csv',
				url: 'csv/hl-jp-mean.csv',
				delimiter: ',',
				rowMapping: 'dataset',
				datasetLabels: true,
				indexLabels: true
			},
			colorschemes: {
				scheme: 'tableau.Classic10'
			}
		}
	}
};
var njpstd_config = {
	type: 'line',
	plugins: [ChartDataSource],
	options: {
		title: {
			display: true,
			text: 'Non-JP Standard Deviation'
		},
		scales: {
			xAxes: [{
				scaleLabel: {
					display: true,
					labelString: 'Month'
				}
			}],
			yAxes: [{
				id: 'percent',
				gridLines: {
					drawOnChartArea: false
				},
				scaleLabel: {
					display: true,
					labelString: 'Percent'
				},
				ticks: {
					suggestedMin: 0//,
					//suggestedMax: 70
				}
			}]
		},
		plugins: {
			datasource: {
				type: 'csv',
				url: 'csv/hl-nonjp-stdev.csv',
				delimiter: ',',
				rowMapping: 'dataset',
				datasetLabels: true,
				indexLabels: true
			},
			colorschemes: {
				scheme: 'tableau.Classic10'
			}
		}
	}
};
var jpstd_config = {
	type: 'line',
	plugins: [ChartDataSource],
	options: {
		title: {
			display: true,
			text: 'JP Standard Deviation'
		},
		scales: {
			xAxes: [{
				scaleLabel: {
					display: true,
					labelString: 'Month'
				}
			}],
			yAxes: [{
				id: 'percent',
				gridLines: {
					drawOnChartArea: false
				},
				scaleLabel: {
					display: true,
					labelString: 'Percent'
				},
				ticks: {
					suggestedMin: 0//,
					//suggestedMax: 70
				}
			}]
		},
		plugins: {
			datasource: {
				type: 'csv',
				url: 'csv/hl-jp-stdev.csv',
				delimiter: ',',
				rowMapping: 'dataset',
				datasetLabels: true,
				indexLabels: true
			},
			colorschemes: {
				scheme: 'tableau.Classic10'
			}
		}
	}
};
var gen0ex_config = {
	type: 'line',
	plugins: [ChartDataSource],
	options: {
		title: {
			display: true,
			text: 'Exclusive Chat Users (HoloJP Gen0)'
		},
		scales: {
			xAxes: [{
				scaleLabel: {
					display: true,
					labelString: 'Month'
				}
			}],
			yAxes: [{
				id: 'percent',
				gridLines: {
					drawOnChartArea: false
				},
				scaleLabel: {
					display: true,
					labelString: 'Percent'
				},
				ticks: {
					suggestedMin: 0//,
					//suggestedMax: 70
				}
			}]
		},
		plugins: {
			datasource: {
				type: 'csv',
				url: 'csv/excl/hl-excl-gen0.csv',
				delimiter: ',',
				rowMapping: 'dataset',
				datasetLabels: true,
				indexLabels: true
			},
			colorschemes: {
				scheme: 'tableau.Classic10'
			}
		}
	}
};
var gen1ex_config = {
	type: 'line',
	plugins: [ChartDataSource],
	options: {
		title: {
			display: true,
			text: 'Exclusive Chat Users (HoloJP Gen1)'
		},
		scales: {
			xAxes: [{
				scaleLabel: {
					display: true,
					labelString: 'Month'
				}
			}],
			yAxes: [{
				id: 'percent',
				gridLines: {
					drawOnChartArea: false
				},
				scaleLabel: {
					display: true,
					labelString: 'Percent'
				},
				ticks: {
					suggestedMin: 0//,
					//suggestedMax: 70
				}
			}]
		},
		plugins: {
			datasource: {
				type: 'csv',
				url: 'csv/excl/hl-excl-gen1.csv',
				delimiter: ',',
				rowMapping: 'dataset',
				datasetLabels: true,
				indexLabels: true
			},
			colorschemes: {
				scheme: 'tableau.Classic10'
			}
		}
	}
};
var gen2ex_config = {
	type: 'line',
	plugins: [ChartDataSource],
	options: {
		title: {
			display: true,
			text: 'Exclusive Chat Users (HoloJP Gen2)'
		},
		scales: {
			xAxes: [{
				scaleLabel: {
					display: true,
					labelString: 'Month'
				}
			}],
			yAxes: [{
				id: 'percent',
				gridLines: {
					drawOnChartArea: false
				},
				scaleLabel: {
					display: true,
					labelString: 'Percent'
				},
				ticks: {
					suggestedMin: 0//,
					//suggestedMax: 70
				}
			}]
		},
		plugins: {
			datasource: {
				type: 'csv',
				url: 'csv/excl/hl-excl-gen2.csv',
				delimiter: ',',
				rowMapping: 'dataset',
				datasetLabels: true,
				indexLabels: true
			},
			colorschemes: {
				scheme: 'tableau.Classic10'
			}
		}
	}
};
var gmrex_config = {
	type: 'line',
	plugins: [ChartDataSource],
	options: {
		title: {
			display: true,
			text: 'Exclusive Chat Users (HoloJP Gamers)'
		},
		scales: {
			xAxes: [{
				scaleLabel: {
					display: true,
					labelString: 'Month'
				}
			}],
			yAxes: [{
				id: 'percent',
				gridLines: {
					drawOnChartArea: false
				},
				scaleLabel: {
					display: true,
					labelString: 'Percent'
				},
				ticks: {
					suggestedMin: 0//,
					//suggestedMax: 70
				}
			}]
		},
		plugins: {
			datasource: {
				type: 'csv',
				url: 'csv/excl/hl-excl-gmr.csv',
				delimiter: ',',
				rowMapping: 'dataset',
				datasetLabels: true,
				indexLabels: true
			},
			colorschemes: {
				scheme: 'tableau.Classic10'
			}
		}
	}
};
var gen3ex_config = {
	type: 'line',
	plugins: [ChartDataSource],
	options: {
		title: {
			display: true,
			text: 'Exclusive Chat Users (HoloJP Gen3)'
		},
		scales: {
			xAxes: [{
				scaleLabel: {
					display: true,
					labelString: 'Month'
				}
			}],
			yAxes: [{
				id: 'percent',
				gridLines: {
					drawOnChartArea: false
				},
				scaleLabel: {
					display: true,
					labelString: 'Percent'
				},
				ticks: {
					suggestedMin: 0//,
					//suggestedMax: 70
				}
			}]
		},
		plugins: {
			datasource: {
				type: 'csv',
				url: 'csv/excl/hl-excl-gen3.csv',
				delimiter: ',',
				rowMapping: 'dataset',
				datasetLabels: true,
				indexLabels: true
			},
			colorschemes: {
				scheme: 'tableau.Classic10'
			}
		}
	}
};
var gen4ex_config = {
	type: 'line',
	plugins: [ChartDataSource],
	options: {
		title: {
			display: true,
			text: 'Exclusive Chat Users (HoloJP Gen4)'
		},
		scales: {
			xAxes: [{
				scaleLabel: {
					display: true,
					labelString: 'Month'
				}
			}],
			yAxes: [{
				id: 'percent',
				gridLines: {
					drawOnChartArea: false
				},
				scaleLabel: {
					display: true,
					labelString: 'Percent'
				},
				ticks: {
					suggestedMin: 0//,
					//suggestedMax: 70
				}
			}]
		},
		plugins: {
			datasource: {
				type: 'csv',
				url: 'csv/excl/hl-excl-gen4.csv',
				delimiter: ',',
				rowMapping: 'dataset',
				datasetLabels: true,
				indexLabels: true
			},
			colorschemes: {
				scheme: 'tableau.Classic10'
			}
		}
	}
};
var gen5ex_config = {
	type: 'line',
	plugins: [ChartDataSource],
	options: {
		title: {
			display: true,
			text: 'Exclusive Chat Users (HoloJP Gen5)'
		},
		scales: {
			xAxes: [{
				scaleLabel: {
					display: true,
					labelString: 'Month'
				}
			}],
			yAxes: [{
				id: 'percent',
				gridLines: {
					drawOnChartArea: false
				},
				scaleLabel: {
					display: true,
					labelString: 'Percent'
				},
				ticks: {
					suggestedMin: 0//,
					//suggestedMax: 70
				}
			}]
		},
		plugins: {
			datasource: {
				type: 'csv',
				url: 'csv/excl/hl-excl-gen5.csv',
				delimiter: ',',
				rowMapping: 'dataset',
				datasetLabels: true,
				indexLabels: true
			},
			colorschemes: {
				scheme: 'tableau.Classic10'
			}
		}
	}
};
var hs1ex_config = {
	type: 'line',
	plugins: [ChartDataSource],
	options: {
		title: {
			display: true,
			text: 'Exclusive Chat Users (HoloStars Gen1)'
		},
		scales: {
			xAxes: [{
				scaleLabel: {
					display: true,
					labelString: 'Month'
				}
			}],
			yAxes: [{
				id: 'percent',
				gridLines: {
					drawOnChartArea: false
				},
				scaleLabel: {
					display: true,
					labelString: 'Percent'
				},
				ticks: {
					suggestedMin: 0//,
					//suggestedMax: 70
				}
			}]
		},
		plugins: {
			datasource: {
				type: 'csv',
				url: 'csv/excl/hl-excl-hs1.csv',
				delimiter: ',',
				rowMapping: 'dataset',
				datasetLabels: true,
				indexLabels: true
			},
			colorschemes: {
				scheme: 'tableau.Classic10'
			}
		}
	}
};
var hs2ex_config = {
	type: 'line',
	plugins: [ChartDataSource],
	options: {
		title: {
			display: true,
			text: 'Exclusive Chat Users (Holostars Gen2+3)'
		},
		scales: {
			xAxes: [{
				scaleLabel: {
					display: true,
					labelString: 'Month'
				}
			}],
			yAxes: [{
				id: 'percent',
				gridLines: {
					drawOnChartArea: false
				},
				scaleLabel: {
					display: true,
					labelString: 'Percent'
				},
				ticks: {
					suggestedMin: 0//,
					//suggestedMax: 70
				}
			}]
		},
		plugins: {
			datasource: {
				type: 'csv',
				url: 'csv/excl/hl-excl-hs2.csv',
				delimiter: ',',
				rowMapping: 'dataset',
				datasetLabels: true,
				indexLabels: true
			},
			colorschemes: {
				scheme: 'tableau.Classic10'
			}
		}
	}
};
var idex_config = {
	type: 'line',
	plugins: [ChartDataSource],
	options: {
		title: {
			display: true,
			text: 'Exclusive Chat Users (HoloID)'
		},
		scales: {
			xAxes: [{
				scaleLabel: {
					display: true,
					labelString: 'Month'
				}
			}],
			yAxes: [{
				id: 'percent',
				gridLines: {
					drawOnChartArea: false
				},
				scaleLabel: {
					display: true,
					labelString: 'Percent'
				},
				ticks: {
					suggestedMin: 0//,
					//suggestedMax: 70
				}
			}]
		},
		plugins: {
			datasource: {
				type: 'csv',
				url: 'csv/excl/hl-excl-id.csv',
				delimiter: ',',
				rowMapping: 'dataset',
				datasetLabels: true,
				indexLabels: true
			},
			colorschemes: {
				scheme: 'tableau.Classic10'
			}
		}
	}
};
var enex_config = {
	type: 'line',
	plugins: [ChartDataSource],
	options: {
		title: {
			display: true,
			text: 'Exclusive Chat Users (HoloEN)'
		},
		scales: {
			xAxes: [{
				scaleLabel: {
					display: true,
					labelString: 'Month'
				}
			}],
			yAxes: [{
				id: 'percent',
				gridLines: {
					drawOnChartArea: false
				},
				scaleLabel: {
					display: true,
					labelString: 'Percent'
				},
				ticks: {
					suggestedMin: 0//,
					//suggestedMax: 70
				}
			}]
		},
		plugins: {
			datasource: {
				type: 'csv',
				url: 'csv/excl/hl-excl-en.csv',
				delimiter: ',',
				rowMapping: 'dataset',
				datasetLabels: true,
				indexLabels: true
			},
			colorschemes: {
				scheme: 'tableau.Classic10'
			}
		}
	}
};