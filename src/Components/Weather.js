import {useEffect, useState} from "react";
import {Container, Row} from 'react-bootstrap'



export const Weather = (props) =>{
    const [city, setCity] = useState("")
        const url = "https://api.met.no/weatherapi/locationforecast/2.0/complete?lat=" + props.myprop.latitude + "&lon=" + props.myprop.longitude
    console.log(url)
        fetch(url)
            .then((data) => data.json())
            .then((data) =>{
                console.log("Go")
                let ut = "<table class='table table-striped'><tr><th>Date</th><th>Time</th><th>Temperature</th></tr>"
                for(let i of data.properties.timeseries){
                    let time = i.time.slice(11,13)
                    if(time % 6 == 0){
                    ut += `<tr><td>${i.time.slice(0,10)}</td> <td> ${i.time.slice(11,19)}</td> <td>${i.data.instant.details.air_temperature} Celcius</td></tr>`;
                }}
                ut += "</table>"
                document.getElementById("heisann").innerHTML = ut
            })



    return (
        <Container fluid>
            <Row>

                <h1>
                    Temperatur
                </h1>
                <h2>

                </h2>
            </Row>
        <div id={'heisann'}></div>

        </Container>
    )

}

