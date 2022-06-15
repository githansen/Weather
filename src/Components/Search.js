import React, {useEffect, useRef} from "react";
import {Weather} from "./Weather";
import {useState} from "react";


let obj = {
    latitude: 0,
    longitude: 0
}
let old = {
    latitude: 0,
    longitude: 0
}
export const Search = () =>{
        const [props, setProps] = useState(obj)
        let sjekk = () =>{
        const url = "http://mapit.nuug.no/postcode/" + document.getElementById('postnr').value
        fetch(url)
            .then(data => data.json())
            .then(data =>{
                obj ={
                    latitude: data.wgs84_lat,
                    longitude: data.wgs84_lon
                }
                if(old.latitude != obj.latitude || old.longitude != obj.longitude) {
                    old = obj
                    setProps(obj)
                }
            })
            }

        return (
            <div>
                <input type={'text'} id={'postnr'}/>
                <button onClick={sjekk} className={'btn btn-danger'}>Søk</button>
                <Weather myprop={props}/>
            </div>
        )

}