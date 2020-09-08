import React, {Component} from "react"

class DaftarPeserta extends Component{
  constructor(props){
    super(props)
    this.state = {
      namaBuah: [
        {nama: "Semangka", harga: 10000, berat: 1000},
        {nama: "Anggur", harga: 40000, berat: 500},
        {nama: "Strawberry", harga: 30000, berat: 400},
        {nama: "Jeruk", harga: 30000, berat: 1000},
        {nama: "Mangga", harga: 30000, berat: 500}
      ],
      inputName:"",
      inputHarga: "",
      inputBerat: ""
    }
    this.submitForm = this.submitForm.bind(this);
  }

  //membuat submit(tombol button)
  submitForm(event){
    event.preventDefault()
    const tambahData = {
      nama: this.state.inputName,
      harga: parseInt(this.state.inputHarga),
      berat: parseInt(this.state.inputBerat)
    }

    this.setState({
      namaBuah: [...this.state.namaBuah, this.state.namaBuah.push(tambahData)],
      inputName: "",
      inputHarga: "",
      inputBerat: ""
    })
  }

  //membuat method dengan arrow function tanpa membuat bind
  changeInputName = (event) =>{
    this.setState({inputName: event.target.value})
  }

  changeInputHarga = (event) => {
    this.setState({inputHarga: event.target.value})
  }


  changeInputBerat = (event) => {
    this.setState({inputBerat: event.target.value})
  }


  render() {
    return(
      <>
      <h1 style={{textAlign : "center"}}> Daftar Harga Buah</h1>
      <table style={{border: "1px solid", width: "40%", margin: "0 auto"}}>
        <thead style={{background: "#aaa"}}>
          <tr>
            <th>No</th>
            <th>Nama</th>
            <th>Harga</th>
            <th>Berat</th>
          </tr>
        </thead>
          <tbody style={{background: "coral"}}>
              {
                this.state.namaBuah.map((value, index)=>{
                  return(
                    <tr>
                      <td>{index + 1}</td>
                      <td>{value.nama}</td>
                      <td>{value.harga}</td>
                      <td>{value.berat/1000}kg</td>
                    </tr>
                  )
                })
              }
          </tbody>
        </table>
        <form onSubmit={this.submitForm} style={{textAlign: "center", padding:"5px"}}>
          <strong style={{marginRight: "10px"}}>Nama</strong>
          <input required="required" type="text" value={this.state.inputName} onChange={this.changeInputName} />
          <br/>
          <strong style={{marginRight: "10px"}}>Harga</strong>
          <input required="required" type="text" value={this.state.inputHarga} onChange={this.changeInputHarga} />
          <br/>
          <strong style={{marginRight: "10px"}}>Berat</strong>
          <input required="required" type="text" value={this.state.inputBerat} onChange={this.changeInputBerat} />
          <br/>
          <button>Berat</button>
        </form>

    </>
    )
  }

}

export default DaftarPeserta
