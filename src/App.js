
import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
return (
  <form>
    <h1> Form pembelian buah </h1>
    <p>
      <label> Nama Pelanggan </label>
      <input type="text" name="name" />
    </p>
    <p>
    <label>Daftar Item</label>
    <table>
    <input type="checkbox" id="semangka" name="buah" value="semangka" />
    <label for="semangka">Semangka</label> <br />
    <input type="checkbox" id="jeruk" name="buah" value="jeruk" />
    <label for="jeruk">Jeruk</label><br />
    <input type="checkbox" id="nanas" name="buah" value="nanas" />
    <label for="nanas">Nans</label><br />
    <input type="checkbox" id="salak" name="buah" value="salak" />
    <label for="salak">Salak</label><br />
    <input type="checkbox" id="anggur" name="buah" value="anggur" />
    <label for="anggur">Anggur</label><br />
    </table>
    </p>
    <p>
      <input type="submit" value="submit" />
    </p>
  </form>
  // <div className="App">
  //   <header className="App-header">
  //     <img src={logo} className="App-logo" alt="logo" />
  //     <p>
  //       Edit <code>src/App.js</code> and save to reload.
  //     </p>
  //     <a
  //       className="App-link"
  //       href="https://reactjs.org"
  //       target="_blank"
  //       rel="noopener noreferrer"
  //     >
  //       Learn React
  //     </a>
  //   </header>
  // </div>
);
}

export default App;
