
import React from 'react';
import './App.css';
import FormBuah from './Tugas-9/FormBuah'
import DaftarBuah from './Tugas-10/DaftarBuah'
import Clock from './Tugas-11/Clock'
import Timer from './Tugas-11/Timer'

function App() {
return (
  <div>
    <FormBuah />
    <DaftarBuah />
    <Clock />
    <Timer start="91"/>
  </div>
);
}

export default App;
