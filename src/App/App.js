import React, { useEffect, useState, useRef } from 'react'

import axios from 'axios';

export default function App() {

    const [term, setTerm] = useState('javascript');
    const prevTermState = useRef();
    
    useEffect(() => {
      prevTermState.current = term;
    });

    const prevTerm = prevTermState.current;

    return (
      <div className='container'>
        <div className='row'>
          <div className='col'>
            <div className='my-3'>
              <label htmlFor='exampleFormControlInput1' className='form-label'>
                Search Input
              </label>
              <input
                type='text'
                className='form-control'
                id='exampleFormControlInput1'
                onChange={(e) =>  setTerm(e.target.value) }
                value = {term}
              />
            </div>
            <p>Current term: {term}</p>    
            <p>Prev term: {prevTerm}</p>              
          </div>
        </div>
      </div>
    );
  }
