import { useState } from "react";
import { useLocation } from "react-router-dom";
import Dashboard from "./Dashboard/dashboard";
import Form from "./Form/form";

function App({ children }) {
  const [products, setProducts] = useState([]);
  const location = useLocation();

  const addProduct = (newProduct) => {
    setProducts([...products, newProduct]);
  };

  if (location.pathname === "/form") {
    return <Form addProduct={addProduct} />;
  }

  if (location.pathname === "/dashboard") {
    return <Dashboard products={products} />;
  }

  return children;
}

export default App;
