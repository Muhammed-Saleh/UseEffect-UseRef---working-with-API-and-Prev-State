import React, { useState, useEffect } from 'react'
import './App.css';

const App = () => {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");

    //useEffect with empty dependency array
    //run one time only
    //when: after first
    //--------------
    //render
    //useEffect

    useEffect(() => {
        //ADD UR CODE
        console.log('use effect one time');
    }, []) //useEffect dependency array

    console.log("render");

    return (
        <div>
            <label>Name</label>
            <input onChange={(e => setName(e.target.value))} value= {name}/>
            <br/>
            <label>phone</label>
            <input onChange={(e => setPhone(e.target.value))} value= {phone}/>

            <p>
                name: {name} <br /> phone: {phone}
            </p>
        </div>        
    );
};

export default App;