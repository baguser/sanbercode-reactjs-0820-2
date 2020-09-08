
import React from 'react';
import './App.css';
import FormBuah from './Tugas-9/FormBuah'
import DaftarBuah from './Tugas-10/DaftarBuah'
import Clock from './Tugas-11/Clock'
import Timer from './Tugas-11/Timer'
import DaftarPeserta from './Tugas-12/DaftarPeserta'



function App() {
return (
  <div>
    <FormBuah />
    <DaftarBuah />
    <Clock />
    <Timer start="91"/>
    <DaftarPeserta />
    
  </div>
);
}

export default App;
