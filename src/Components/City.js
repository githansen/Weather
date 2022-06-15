import {useEffect, useState} from "react";


export const City = (props) =>{
    const [city, setCity] = useState("")
    const url2 = "https://api.geoapify.com/v1/geocode/reverse?lat="+ props.myprop.myprop.latitude + "&lon=" + props.myprop.myprop.longitude + "&apiKey=0ee2487eb9cf432dada666fc4c3794ac"
  useEffect(()=>{
    fetch(url2)
        .then((data) => data.json())
        .then((data)=>{
            setCity(data.features[0].properties.city)
        })
  })
    return(
        <h2>
            {city}
        </h2>
    )
}