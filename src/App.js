import './App.css';
import Navbar from './Components/Shopping/Navbar';
import Header from './Components/Shopping/Header';
import Card from './Components/Shopping/Card';
import Footer from './Components/Shopping/Footer';
import React, { useState } from 'react';

const shopping = [
  {
    image: "https://m.media-amazon.com/images/I/417rGDOfx8L._SX300_SY300_QL70_FMwebp_.jpg",
    name: "Samsung Galaxy Z Flip3 5G (Phantom Black, 8GB RAM, 128GB Storage)",
    price: "95,999",
    discount: "47,499"
  }, 
  {
    image: "https://m.media-amazon.com/images/I/71J8tz0UeJL._SX679_.jpg",
    name: "Samsung Galaxy S22 Ultra 5G",
    price: "1,31,999",
    discount: "94,999"
  }, 
  {
    image: "https://m.media-amazon.com/images/I/61VfL-aiToL._SX679_.jpg",
    name: "Samsung Galaxy S23 Ultra 5G (Green, 12GB, 256GB Storage)",
    price: "1,49,999",
    discount: "1,24,999"
  },{
    image: "https://m.media-amazon.com/images/I/817WWpaFo1L._SX679_.jpg",
    name: "Samsung Galaxy M14 5G (ICY Silver, 6GB, 128GB Storage)",
    price: "18,999",
    discount: "15,490"
  },{
    image: "https://m.media-amazon.com/images/I/81Prc5i7hML._SX679_.jpg",
    name: "Samsung Galaxy M13 (Stardust Brown, 4GB, 64GB Storage)",
    price: "14,999",
    discount: "10,999"
  },{
    image: "https://m.media-amazon.com/images/I/61TGtBnj8xL._SX522_.jpg",
    name: "Samsung Galaxy Buds Live Bluetooth Truly Wireless in Ear Earbuds with Mic",
    price: "15,990",
    discount: "4,790"
  },{
    image: "https://m.media-amazon.com/images/I/61ftRB6KycL._SX679_.jpg",
    name: "Samsung Galaxy Watch4 Classic LTE (4.6cm, Black)",
    price: "29,990",
    discount: "17,914"
  },{
    image: "https://m.media-amazon.com/images/I/61nBzBREzGL._SX522_.jpg",
    name: "Samsung Galaxy Watch4 Bluetooth(4.0 cm, Black, Compatible with Android only)",
    price: "26,999",
    discount: "11,990"
  }];

function App() {

const [Cartvalue, setCartValue] = useState(0);

  return (
    <div className="App">
      <Navbar Cartvalue={Cartvalue}/>
      <Header />
      <section className="py-5">
            <div className="container px-4 px-lg-5 mt-5">
                <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4">
                {shopping.map((d , i) => (
        <Card data={d} key={`shopping-item-${i}`} Cartvalue={Cartvalue} setCartValue={setCartValue}/>
      ))}
      </div>
      </div>     
    </section> 
    <Footer />
    </div>
  );
}

export default App;
