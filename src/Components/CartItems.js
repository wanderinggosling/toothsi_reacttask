import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import ItemContext from '../context/Itemcontext';
const CartItems = () => {
    const context = useContext(ItemContext);
    const { bucket, increement, decreement, setbucket } = context;
    const [total, settotal] = useState(0);
    const deleteItem = (id) => {
        setbucket(bucket.filter(ele => ele.id !== id))
    }

    //set total amount
    useEffect(() => {
        let newTotal = 0;
        bucket.forEach(element => {
            newTotal += element.price * element.quantity;
        });
        settotal(newTotal)
    }, [bucket])

    return (
        <div>
            <div className="container">
                <div className="card" >
                    <div className="card-body">
                        <h5 className="card-title">Cart total</h5>
                        <p className="card-text">Subtotal:  ${total}</p>
                        <p className="card-text">Total:  ${total}</p>

                        {total > 0 ? <Link to="/thanks"><button className="btn btn-primary">Proceed to checkout</button></Link> :
                            <Link to="/"><button className="btn btn-primary">Add something</button></Link>}
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <table className="table table-image">
                            <thead>
                                <tr>
                                    <th scope="col"></th>
                                    <th scope="col">Product</th>
                                    <th scope="col">Price</th>
                                    <th scope="col">Quantity</th>
                                    <th scope="col">Sub total</th>
                                </tr>
                            </thead>
                            <tbody>
                                {bucket.length > 0 ? bucket.map((list, index) => {
                                    return <tr key={index}>
                                        <td><button onClick={() => { deleteItem(list.id) }} style={{ "border": "none" }}>X</button></td>
                                        <td className="w-25">
                                            <img src={list.thumbnail} className="img-fluid img-thumbnail" alt="Sheep" />
                                            {list.title}
                                        </td>
                                        <td>${list.price}</td>
                                        <td><button disabled={list.quantity <= 1} onClick={() => decreement(list.id)} style={{ "border": "none" }}>-</button>
                                            {list.quantity}
                                            <button disabled={list.stock - list.quantity < 1} onClick={() => increement(list.id)} style={{ "border": "none" }}>+</button>
                                        </td>
                                        <td>${list.price * list.quantity}</td>
                                    </tr>
                                }) : <tr>
                                    <td colSpan={12}>Sorry there are no items!!</td>
                                </tr>
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartItems
