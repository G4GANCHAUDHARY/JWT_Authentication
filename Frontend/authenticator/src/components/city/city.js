import { useState,useEffect } from "react";

export default function City (){
    const [cities,setCities]=useState([]);

    const getData= async ()=>{
       await fetch("http://localhost:5000/city")
        .then((res)=>(res.json()))
        .then(content=>setCities(content.data))
    }

    useEffect(()=>{
        getData()
    },[]);
    // console.log(cities);
    return (
        <div className="container">
            <table>
                <tr>
                    <th>City ID</th>
                    <th>City</th>
                    <th>State</th>
                </tr> 
            {(cities && cities.map(city=>{
                return (
                <tr>
                    <td>{city.id}</td>
                    <td>{city.name}</td>
                    <td>{city.state}</td>
                </tr> )
            }))}
            </table>
        </div>
    )
}