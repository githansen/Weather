import {useEffect, useState} from "react";
import {Col, Container, Row} from 'react-bootstrap'
import {City} from "./City"
import "../css/Weather.css"
import images from "../Const/Images";
const notSet = () =>{
    let ut = ""
    ut += "<Row>Please enter Postal code to get the forecast for your area</Row>"
    return ut
}
const symbolcodes = ["partlycloudy_night", "partlycloudy_day", "heavyrain", "lightrain", "rain", "fair_night", "fair_day", "cloudy", "clearsky_day", "clearsky_night"]
const times = ["00", "06", "12","18"]
const TimeOfDay = ["Night", "Morning", "Afternoon", "Evening"]

export const Weather = (props) =>{
        const url = "https://api.met.no/weatherapi/locationforecast/2.0/complete?lat=" + props.myprop.latitude + "&lon=" + props.myprop.longitude
     useEffect(()=>{
         if(props.myprop.longitude !== 0) {

             fetch(url)
                 .then((data) => data.json())
                 .then((data) => {
                     console.log(data.properties.timeseries[0].data.next_6_hours.summary.symbol_code)
                     console.log(data.properties.timeseries[0])
                     let symbol = ""
                     let ut = "<table class='table table-striped'><tr><th>Conditions</th><th>Date</th><th>Time</th><th>Temperature</th></tr>"
                     for (let i of data.properties.timeseries) {
                         if(i.data.next_1_hours != null) {
                             symbol = i.data.next_1_hours.summary.symbol_code
                         }
                         let time = i.time.slice(11, 13)
                         if (time % 6 == 0) {
                             ut += `<tr><td class='symbol'><img src="${images[symbolcodes.indexOf(symbol)]}" /></td> <td>${i.time.slice(0, 10)}</td> <td> ${TimeOfDay[times.indexOf(i.time.slice(11,13))]}</td> <td>${i.data.instant.details.air_temperature} Celcius</td></tr>`;
                         }
                     }
                     ut += "</table>"
                     document.getElementById("utskrift").innerHTML = ut
                 })
         }
         else{
             document.getElementById("utskrift").innerHTML = notSet()
         }

     })
    return (
        <Container fluid>
            <Row>
                <City myprop={props}/>

            </Row>
            <Row>

        <div  style={{width: "100%", marginLeft: "0"}} id={'utskrift'}></div>

                </Row>
        </Container>
    )

}

