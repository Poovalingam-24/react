import { useState } from 'react';
import './dashboard.css'
import { Link } from "react-router-dom";

function Dashboard({ products }) {

  const[productitem,setProductitem] = useState(products);

  const[inputvalue,setInputvalue] = useState("");

  function handlecearch(){
    const filtervalue = productitem.filter((product)=>product.name.toLowerCase().includes(inputvalue.toLowerCase()))
      setProductitem(filtervalue);

  }

  function handledelete(name){
    const newproduct = products.filter((product)=>{product.name!=name})
    setProductitem(newproduct);
  }

  return (
    <>
      <div className="app">
        <header className="header">
          <h1 className="logo">FarmChainX</h1>
          <nav>
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Contact</a>
          </nav>
        </header>

        <section className="searchsection">
          <div className="searchbox">
            <input type="text" placeholder="🔍 Search products..." value={inputvalue} onChange={(e)=>{setInputvalue(e.target.value)}} />
            <button onClick={handlecearch}>Search</button>
          </div>
        </section>
      </div>

      <div className="addproduct">
        <Link to="/form">
          <button>+ Add Product</button>
        </Link>
      </div>

      <div className="productdetails">
        {products.length === 0 ? (
          <p>No Products Added Yet.</p>
        ) : (
          <table>
            <thead>
              <tr>
                <th>Image</th>
                <th>Name</th>
                <th>Crop Types</th>
                <th>Soil Types</th>
                <th>Pesticides</th>
                <th>Harvest Date</th>
                <th>Use Before</th>
                <th>Location</th>
                <th>Info</th>
                <th>Action</th>
                <th>QR Code</th>
              </tr>
            </thead>
            <tbody>
              {productitem.map((p, i) => (
                <tr key={i}>
                  <td>{p.image && <img src={p.image} alt={p.name} width="60" />}</td>
                  <td>{p.name}</td>
                  <td>{p.crop}</td>
                  <td>{p.soil}</td>
                  <td>{p.pesticides}</td>
                  <td>{p.harvestdate}</td>
                  <td>{p.usedate}</td>
                  <td>{p.location}</td>
                  <td>{p.info}</td>
                  <td><button onClick={()=>handledelete(p.name)}>Delete</button></td>
                  <Link to = "/qrcode"state={p}>
                  <td> <button>Go QR</button></td>
                  </Link>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </>
  );
}

export default Dashboard;
