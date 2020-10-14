/*
   Chart : 
   This will display 8 day climatic condition with temp max and min value
   We have integrated in react-chartjs-2
*/


import React from "react";
import { Line, Chart, defaults } from "react-chartjs-2";
import { connect } from 'react-redux';
import LoadingSpinner from "../LoadingSpinner";
import "./ChartComponent.css";

defaults.global.maintainAspectRatio = false

/**
 * Chart component to display temperature chart
 * @param {*} props props
 */
export function ChartComponent(props){    

  let minTemperature = []
  let maxTemperature = []
  let temperatureLabels = []
  
/* istanbul ignore next */
    if(props.foreCastDetails){
      const{
        foreCastDetails
      }=props;
      for (let dailyValues in foreCastDetails.daily) {        
        var temp = foreCastDetails.daily[dailyValues].temp;
        //convert temperature from fahrenheit to celsius
        maxTemperature.push(
          parseInt(parseInt(temp.max) - 273.15)
        )
        minTemperature.push(
          parseInt(parseInt(temp.min) - 273.15)
        )
        temperatureLabels.push("")
      }
    }
  //draws min and max temperature on chart
  /* istanbul ignore next */
  Chart.helpers.extend(Chart.controllers.line.prototype, {
    draw: function() {    
      var chart = this.chart;
      var ctx = chart.chart.ctx;
        for (var dataSetValue = 0; dataSetValue < temperatureData.datasets.length; dataSetValue++) {
          var dataset = temperatureData.datasets[dataSetValue]
          for (var dataValue = 0; dataValue < dataset.data.length; dataValue++) {
            var model = dataset._meta[Object.keys(dataset._meta)[0]].data[dataValue]._model;  
            ctx.font = "12px";
            ctx.fillStyle = '#fff';    
            var x =  model.x;
            var y =  model.y;
            if(dataSetValue===1) {
              y = y-10
            } else {
              y = y + 20
            }        
            if(dataValue === dataset.data.length-1) {
              x = x - ctx.measureText(dataset.data[dataValue]).width
            } else if (dataValue !== 0) {
              x = x - ctx.measureText(dataset.data[dataValue]).width / 2
            } 
            ctx.fillText(dataset.data[dataValue]+ "\u00B0", x , y);        
          }
       }
    }
  });  
    //Setting configuration to display the chart application
  const temperatureData = {  
    labels: temperatureLabels,
    datasets: [
      {
        backgroundColor: "#66000000",
        borderColor: "#333",
        borderWidth: 2,
        lineTension: 0.1,
        fill: true,
        data: minTemperature,
        label: ''+Math.random()
      },
      {
        backgroundColor: "#ffd968",
        borderColor: "#333",
        borderWidth: 2,
        lineTension: 0.1,
        fill: "-1",
        data: maxTemperature,
        label: ''+Math.random()

      }
    ]
  };

  //draws chart on the screen

    return(  
    <>
     {
      props.foreCastDetails?
      temperatureData?     
      <section className={`detailsInfo chart detailsMargin`}>
              <Line    
            data={temperatureData}
            options={{
                animation: {
                  duration: 0
                },
                title: {
                    display: false
                },
                legend: {
                    display: false,
                },
                tooltips: {
                  enabled: false
                }, 
                layout: {
                  padding: {
                      top: 20,
                      bottom: 35,
                      left: 20,
                      right : 20
                  }
                },
                scales: {
                  xAxes: [
                    {
                      display: false,
                      gridLines: {
                        display: false
                      }
                    }
                  ],
                  yAxes: [
                    {
                      display: false,                  
                      gridLines: {
                        display: false
                      }
                    }
                  ]
                }                    
            }}                   
          />          
      </section> 
      : <LoadingSpinner />
      : "" }
      </> 
      
    )

  } 
    //Populate the maximum and minimum temperate value of eight days
  const mapStateToProps = (state) => {    
    return {
       foreCastDetails:state.serviceReducer.foreCastDetails, 
    };
  }

export default connect(mapStateToProps,null)(ChartComponent);