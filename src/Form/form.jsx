import React, { useState } from "react";
import './form.css'
import { useNavigate } from "react-router-dom";

function Form({ addProduct }) {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    image: "",
    name: "",
    crop: "",
    soil: "",
    pesticides: "",
    harvestdate: "",
    usedate: "",
    location: "",
    info: ""
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "image" && files.length > 0) {
      setFormData({ ...formData, image: URL.createObjectURL(files[0]) });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addProduct(formData); 
    navigate("/dashboard");      
  };

  return (
    <form className="productform" onSubmit={handleSubmit}>
      <input type="text" name="name" placeholder="Product Name" value={formData.name} onChange={handleChange} required />
      <input type="text" name="crop" placeholder="Crop Type" value={formData.crop} onChange={handleChange} required />
      <input type="text" name="soil" placeholder="Soil Type" value={formData.soil} onChange={handleChange} />
      <input type="text" name="pesticides" placeholder="Enter The Pesticides" value={formData.pesticides} onChange={handleChange} />
      <input type="date" name="harvestdate" value={formData.harvestdate} onChange={handleChange} required />
      <input type="date" name="usedate" value={formData.usedate} onChange={handleChange} required />
      <input type="text" name="location" placeholder="Enter The Location" value={formData.location} onChange={handleChange} />
      <input type="text" name="info" placeholder="Info" value={formData.info} onChange={handleChange} />
      <input type="file" name="image" accept="image/*" onChange={handleChange} />
      <button type="submit">Save Product</button>
    </form>
  );
}

export default Form;
