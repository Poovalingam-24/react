import Dashboard from "./Dashboard/dashboard";

function ProductList(){

    const product = [
        {
            key:1,
            image:"./assets/react.svg",
            name:"Poova",
            crop:"sgbhs",
            soil:"thebds",
            pesticides:"thedsnxc",
            harvestdate:"pobad",
            usedate:"qwer",
            location:"9tehsg",
            info:"thye"
        },
        {
            key:2,
            image:"./assets/react.svg",
            name:"Poova",
            crop:"sgbhs",
            soil:"thebds",
            pesticides:"thedsnxc",
            harvestdate:"pobad",
            usedate:"qwer",
            location:"9tehsg",
            info:"thye"
        },
        {
            key:3,
            image:"./assets/react.svg",
            name:"Poova",
            crop:"sgbhs",
            soil:"thebds",
            pesticides:"thedsnxc",
            harvestdate:"pobad",
            usedate:"qwer",
            location:"9tehsg",
            info:"thye"
        },
        {
            key:4,
            image:"./assets/react.svg",
            name:"Poova",
            crop:"sgbhs",
            soil:"thebds",
            pesticides:"thedsnxc",
            harvestdate:"pobad",
            usedate:"qwer",
            location:"9tehsg",
            info:"thye"
        }
    ]
    if(!product){
        return(
            <>
            </>
        );
    }

    const productlist = product.map(
        (products) => <Dashboard key ={products.key} image = {products.image} name={products.name} crop={products.crop} soil={products.soil} pesticides={products.pesticides}
        harvestdate = {products.harvestdate} usedate = {products.usedate} location = {products.location} info = {products.info} />
    )

    return(
        <>
       <Dashboard product = {product}/>
        </>
        
    );
}
export default ProductList;