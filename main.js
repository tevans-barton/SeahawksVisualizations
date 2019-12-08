'use strict';
let colors = Highcharts.getOptions().colors;
// PieChart for start with ball

let barChartConfigRecord =  {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Seattle Seahawks Record'
    },
    subtitle: {
        text: 'Regular Season from 2009-2017'
    },
    legend: {
        enabled: false
    },
    xAxis: {
        categories: [
            '2009',
            '2010',
            '2011',
            '2012',
            '2013',
            '2014',
            '2015',
            '2016',
            '2017'
        ],
        crosshair: true
    },
    exporting: {
        enabled : false
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Wins'
        }
    },
    tooltip: {
        headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
        footerFormat: '</table>',
        useHTML: true
    },
    plotOptions: {
        column: {
            pointPadding: 0.2,
            borderWidth: 0
        }
    },
    series: [{
        name: 'Wins',
        data: [5, 7, 7, 11, 14, 12, 10, 10, 9],
        color: colors[2]
    }]
};

let lineChartConfigTurnover = {
    chart: {
        type: 'line'
    },
    title: {
        text: 'Turnovers vs. League Average'
    },
    subtitle: {
        text: 'The Seahawks Coincided an Uptick in Defensive Turnovers with Cleaning up their own Mistakes on Offense',
    },
    xAxis: {
        categories: [2009, 2010, 2011, 2012, 2013, 2014, 2015,
        2016, 2017]
    },
    yAxis: {
        title: {
            text: 'Number of Turnovers'
        }
    },
    exporting: {
        enabled : false
    },

    plotOptions: {
        line: {
            dataLabels: {
                enabled: true
            },
            enableMouseTracking: false
        }
    },
    series: [{
        name: 'Seahawks Offense',
        data: [49, 37, 35, 26, 34, 29, 23, 35, 30],
        color: colors[2]
    }, {
        name: 'League Average',
        data: [38.06,
            37.68,
            34.96,
            34.87,
            34.71,
            33.90,
            32.87,
            31.46,
            32.09],
        color: colors[5]
    }, {
        name: 'Seahawks Defense',
        data: [33, 31, 39, 43, 53, 40, 33, 35, 40]
    }]
};

let lineChartConfigYAC = {
    chart: {
        type: 'line'
    },
    title: {
        text: 'YAC Allowed for Opposing Receivers'
    },
    subtitle: {
        text: 'YAC : Yards After Catch',
    },
    xAxis: {
        categories: [2009, 2010, 2011, 2012, 2013, 2014, 2015,
        2016, 2017]
    },
    yAxis: {
        title: {
            text: 'Yards After Catch/Completion'
        }
    },
    exporting: {
        enabled : false
    },
    plotOptions: {
        line: {
            dataLabels: {
                enabled: true
            },
            enableMouseTracking: false
        }
    },
    series: [{
        name: 'Seahawks Defense',
        data: [5.6750, 5.4497, 4.7694 , 4.2492, 4.0870,
            4.6253, 4.4825, 4.7113, 4.4532],
        color: colors[2]
    },
    {
        name: 'League Average',
        data: [5.2387,
            5.1568,
            5.2418,
            4.9659,
            5.2488,
            5.3135,
            5.2496,
            5.0349,
            5.1741],
        color: colors[5]
    }]
};

let spiderChartConfig2013 = {

    chart: {
        polar: true,
        type: 'line'
    },
    legend: {
        enabled: false
    },
    exporting: {
        enabled : false
    },
    title: {
        text: 'Seahawks Offensive Plays 2013',
        x: 0
    },

    pane: {
        size: '90%'
    },

    xAxis: {
        categories: ['Short Pass', 'Deep Pass', 'Run', 'Punt'],
        tickmarkPlacement: 'on',
        lineWidth: 0
    },

    yAxis: {
        gridLineInterpolation: 'polygon',
        lineWidth: 0,
        min: 0
    },

    tooltip: {
        shared: true
    },


    series: [
    {
        name: '2013',
        data: [0.3245, 0.0973, 0.4980, 0.0771],
        pointPlacement: 'on'
    }],

    responsive: {
        rules: [{
            condition: {
                maxWidth: 500
            },
            chartOptions: {
                legend: {
                    align: 'center',
                    verticalAlign: 'bottom'
                },
                pane: {
                    size: '90%'
                }
            }
        }]
    }

};

let spiderChartConfig2012 = {

    chart: {
        polar: true,
        type: 'line'
    },

    title: {
        text: 'Types of Offensive Plays 2012',
        x: 0
    },

    legend: {
        enabled: false
    },
    exporting: {
        enabled : false
    },
    pane: {
        size: '80%'
    },

    xAxis: {
        categories: ['Short Pass', 'Deep Pass', 'Run', 'Punt'],
        tickmarkPlacement: 'on',
        lineWidth: 0
    },

    yAxis: {
        gridLineInterpolation: 'polygon',
        lineWidth: 0,
        min: 0
    },

    tooltip: {
        shared: true
    },


    series: [{
        name: '2012',
        data: [0.3209, 0.0907, 0.5192, 0.0682],
        pointPlacement: 'on'
    }],

    responsive: {
        rules: [{
            condition: {
                maxWidth: 500
            },
            chartOptions: {
                legend: {
                    align: 'center',
                    verticalAlign: 'bottom'
                },
                pane: {
                    size: '100%'
                }
            }
        }]
    }
};

let spiderChartConfig2010 = {

    chart: {
        polar: true,
        type: 'line'
    },

    legend: {
        enabled: false
    },
    exporting: {
        enabled : false
    },

    title: {
        text: 'Types of Offensive Plays 2010',
        x: 0
    },

    pane: {
        size: '80%'
    },

    xAxis: {
        categories: ['Short Pass', 'Deep Pass', 'Run', 'Punt'],
        tickmarkPlacement: 'on',
        lineWidth: 0
    },

    yAxis: {
        gridLineInterpolation: 'polygon',
        lineWidth: 0,
        min: 0
    },

    tooltip: {
        shared: true
    },

    series: [{
        name: '2010',
        data: [0.4452, 0.1003, 0.3736, 0.0788],
        pointPlacement: 'on'
    }
    ],

    responsive: {
        rules: [{
            condition: {
                maxWidth: 500
            },
            chartOptions: {
                legend: {
                    align: 'center',
                    verticalAlign: 'bottom'
                },
                pane: {
                    size: '100%'
                }
            }
        }]
    }
};

let spiderChartConfig2009 = {

    chart: {
        polar: true,
        type: 'line',
    },

    title: {
        text: 'Seahawks Offensive Plays 2009',
        x: 0,
        y: 10
    },

    legend: {
        enabled: false
    },
    exporting: {
        enabled : false
    },

    pane: {
        size: '90%'
    },

    xAxis: {
        categories: ['Short Pass', 'Deep Pass', 'Run', 'Punt'],
        tickmarkPlacement: 'on',
        lineWidth: 0
    },

    yAxis: {
        gridLineInterpolation: 'polygon',
        lineWidth: 0,
        min: 0
    },

    tooltip: {
        shared: true
    },


    series: [{
        name: '2009',
        data: [0.4689, 0.0895, 0.3551, 0.0807],
        pointPlacement: 'on'
    }
      ],

    responsive: {
        rules: [{
            condition: {
                maxWidth: 500
            },
            chartOptions: {
                legend: {
                    align: 'center',
                    verticalAlign: 'bottom'
                },
                pane: {
                    size: '90%'
                }
            }
        }]
    }

};

let pieChartConfig = {
    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
    },
    title: {
        text: 'NFL Average Offensive Plays'
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
                enabled: true,
                format: '<b>{point.name}</b>: {point.percentage:.1f} %'
            }
        }
    },
    series: [{
        name: 'Offensive Play',
        colorByPoint: true,
        data: [{
            name: 'Short Pass',
            y: 0.4264,
            sliced: true,
            selected: true
        }, {
            name: 'Deep Pass',
            y: 0.0979
        }, {
            name: 'Run',
            y: 0.3999
        }, {
            name: 'Punt',
            y: 0.0728
        }]
    }]
};

// this function is responsible for plotting the energy on
// successfully loading the JSON data
// It also plots the pie chart for nodeId=0
function onSuccessCb(jsonData) {
    energyDataForSeries = jsonData.filter(function(elm) {
        return elm['type'] === 'power';
    }).map(function(elm) {
        if (elm['fuel_tech'] != 'rooftop_solar') {
            return {
                name: elm['fuel_tech'],
                data: elm['history']['data'].slice(1, elm['history']['data'].length - 5),
                pointStart: (elm['history']['start'] + 300) * 1000,
                pointInterval: 30 * 60 * 1000
            };
        }
    });
    priceData = jsonData.filter(function(elm) {
        return elm['type'] === 'price';
    }).map(function(elm) {
        return {
          data: elm['history']['data'].slice(1),
          text: elm['id'],
          pointStart: (elm['history']['start'] + 1800)* 1000,
          pointInterval: 30 * 60 * 1000
        };
    });
    var tempData = jsonData.filter(function(elm) {
        return elm['type'] === 'temperature';
    }).map(function(elm) {
        return {
          data: elm['history']['data'].slice(1),
          text: elm['id'],
          pointStart: (elm['history']['start'] + 1800) * 1000,
          pointInterval: 30 * 60 * 1000
        };
    });
    energyDataForSeries = energyDataForSeries.slice(0, energyDataForSeries.length - 1);
    //Filtering down the number of points for the power area graph to every 30 minutes
    for (var i = 0; i < energyDataForSeries.length; i++) {
        let temporaryArray = energyDataForSeries[i]['data'].filter(function(value, index, Arr) {
            return index % 6 == 0;
        });
        energyDataForSeries[i]['data'] = temporaryArray;
    }
    priceChartConfig['series'] = priceData;
    tempChartConfig['series'] = tempData;
    areaChartConfig['series'] = energyDataForSeries;
    Highcharts.chart('AreaChart', areaChartConfig);
    Highcharts.chart('PriceChart', priceChartConfig);
    Highcharts.chart('TemperatureChart', tempChartConfig);
}

// Utility function to fetch any file from the server
function fetchJSONFile(filePath, callbackFunc) {
    console.debug("Fetching file:", filePath);
    var httpRequest = new XMLHttpRequest();
    httpRequest.onreadystatechange = function() {
        if (httpRequest.readyState === 4) {
            if (httpRequest.status === 200 || httpRequest.status === 0) {
                console.info("Loaded file:", filePath);
                var data = JSON.parse(httpRequest.responseText);
                console.debug("Data parsed into valid JSON!");
                console.debug(data);
                if (callbackFunc) callbackFunc(data);
            } else {
                console.error("Error while fetching file", filePath, 
                    "with error:", httpRequest.statusText);
            }
        }
    };
    httpRequest.open('GET', filePath);
    httpRequest.send();
}


// The entrypoint of the script execution
function doMain() {
    Highcharts.chart('BarChart', barChartConfigRecord);
    Highcharts.chart('TurnoverLineChart', lineChartConfigTurnover);
    Highcharts.chart('YACLineChart', lineChartConfigYAC);
    Highcharts.chart('SpiderChart2009', spiderChartConfig2009);
    Highcharts.chart('SpiderChart2010', spiderChartConfig2010);
    Highcharts.chart('SpiderChart2012', spiderChartConfig2012);
    Highcharts.chart('SpiderChart2013', spiderChartConfig2013);
    Highcharts.chart('PieChart', pieChartConfig);
}

document.onload = doMain();