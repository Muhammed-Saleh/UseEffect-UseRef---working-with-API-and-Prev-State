import React, { useState, useEffect } from 'react'
import './App.css';

const App = () => {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");

 ///--------////////////////////////////////////////--------///
 // 01

    //useEffect with empty dependency array
    //run one time only
    //when: after first
    //--------------
    //render
    //useEffect

    // useEffect(() => {
    //     //ADD UR CODE
    //     console.log('use effect one time');
    // }, []) //useEffect dependency array


 ///--------////////////////////////////////////////--------///
 // 02
//useEffect with not empty dependency array

    // // render
    // // useEffect
    // useEffect(() => {
    //     //ADD UR CODE
    //     if (name || phone)
    //         console.log('update');
    // }, [name, phone]); //useEffect dependency array
    // //watcher -> state / props / var

 ///--------////////////////////////////////////////--------///
 // 03
//useEffect without dependency array
    //run when update happen
    //when: run after first render,
useEffect(() => {
    console.log("effect");
});




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