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
    //when: run after first, and after re-render
    // useEffect(() => {
    //     console.log("effect");
    // });

    //render
    //change->
    //re render
    //use Effect

 ///--------////////////////////////////////////////--------///
 // clean up

    useEffect(() => {
        if(name) {
            const timeOut = setTimeout(() => {
                console.log("effect");
            }, 2000);

            return () => {
                clearTimeout(timeOut);
            };
        };
    }, [name]);

    //render
    //use Effect x1
    //return / init clean up

    //change state
    //render
    //clean up excute
    //useEffect -> watcher -> name updated -> run
    //return / init clean up




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