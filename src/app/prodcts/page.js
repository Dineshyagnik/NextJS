import User from "../components/user";
import Product from "./product";

async function ProductListAPI() {
    let data = await fetch("https://dummyjson.com/products");
    data = await data.json();
    return data.products
}

export default async function ProductList() {
    let products = await ProductListAPI();
    console.log(products);
    return (
        <div>
            <h1>Product PAge</h1>
            <User />
            {
                products.map((item) => (
                    <div>
                        <h3>Name: {item.title}</h3>
                        <Product price={item.price} />

                       
                    </div>
                ))
            }
        </div>
    )
};
