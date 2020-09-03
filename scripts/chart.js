var chart = AmCharts.makeChart("chartdiv", {
    "type": "serial",
    "theme": "none",
    "dataProvider": [{
        "software": "SaltStack",
        "color": "#F18F21",
        "competency": 95
    },  {
        "software": "Bamboo Build Server",
        "color": "#F18F21",
        "competency": 85
    },  {
        "software": "R.H.E.L 7",
        "color": "#F18F21",
        "competency": 65
    },  {
        "software": "BASH Scripting",
        "color": "#F18F21",
        "competency": 80
    }, {
        "software": "Nagios",
        "color": "#F18F21",
        "competency": 95
    }, {
        "software": "Stackstorm",
        "color": "#F18F21",
        "competency": 90
    }, {
        "software": "Python",
        "color": "#F18F21",
        "competency": 80
    }, {
        "software": "Artifactory",
        "color": "#F18F21",
        "competency": 90
    }, {
        "software": "ELK",
        "color": "#F18F21",
        "competency": 90
    }, {
        "software": "Powershell",
        "color": "#F18F21",
        "competency": 75
    }, {
        "software": "GIT",
        "color": "#F18F21",
        "competency": 85
    }, {
        "software": "Kubernetes",
        "color": "#F18F21",
        "competency": 60
    }],
    "valueAxes": [{
        "gridColor":"#FFFFFF",
		"gridAlpha": 0.2,
		"dashLength": 0,
	        "minimum": 0

    }],
    "gridAboveGraphs": true,
    "startDuration": 1,
    "graphs": [{
        "balloonText": "[[category]]: <b>[[value]]</b>",
        "fillAlphas": 0.8,
        "lineAlpha": 0.2,
        "type": "column",
        "valueField": "competency",
        "colorField": "color",
	"fixedColumnWidth": 15
    }],
    "chartCursor": {
        "categoryBalloonEnabled": false,
        "cursorAlpha": 0,
        "zoomable": false
    },
    "categoryField": "software",
    "categoryAxis": {
        "gridPosition": "start",
        "gridAlpha": 0,
         "tickPosition":"start",
         "tickLength":20,
         "autoWrap":true
    },
	"exportConfig":{
	  "menuTop": 0,
	  "menuItems": [{
      "icon": '/lib/3/images/export.png',
      "format": 'png'	  
      }] 
	}
});
