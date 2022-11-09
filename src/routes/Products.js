import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './Products.css'

export const Products = () => {
    const [products, setProducts] = useState([])

    return (
        <div className="products_div body">
            <div className="products_title title">
                Products
            </div>
            <div className="products_add_div">
                <Link to={'/'} className="product_add">Add</Link>
                <table className="products_table">
                    <thead className="products_table_head">
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Price</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Actions</th>
                    </thead>
                    <tbody>
                        {products.map((product) => {
                            return( 
                            <tr className="products_table_row" key={product.id}>
                                <td className="products_table_td">{product.id}</td>
                                <td className="products_table_td">{product.name}</td>
                                <td className="products_table_td">{product.price}</td>
                                <td 
                                    className="products_table_td">{product.quantity}
                                    <a href="#" className="product_delete_link" onClick={null}>delete</a>
                                </td>
                            </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
            <div className="products_order_div">
                <Link to={'/'} className="products_order">Order</Link>
            </div>
        </div>
    )
}