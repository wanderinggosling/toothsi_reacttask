import React, { useContext, useEffect, useState } from 'react'
import Dropdown from './Dropdown';
import ItemContext from '../context/Itemcontext';
import { BsFillCartFill } from 'react-icons/bs'

const Product = () => {
    const context = useContext(ItemContext);
    const { getProd, newlist, handleCheckClick } = context;
    const [search, setsearch] = useState("");

    useEffect(() => {
        getProd();
        // eslint-disable-next-line
    }, [])

    const onchange = (e) => {
        setsearch(e.target.value);
    }
    return (
        <div>
            <div className="container">
                <div className="input-group" style={{ "marginTop": "20px" }}>
                    <Dropdown></Dropdown>
                    <div className="form-outline" style={{ "marginLeft": "auto" }}>
                        <input type="search" id="form1" className="form-control" placeholder="search" onChange={(e) => { onchange(e) }} />
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <table className="table table-image">
                            <thead>
                                <tr>
                                    <th scope="col">Image</th>
                                    <th scope="col">Name</th>
                                    <th scope="col" className='item-hide'>Category</th>
                                    <th scope="col">Price</th>
                                    <th scope="col" className='item-hide'>Stock</th>
                                    <th scope="col">Buy</th>
                                </tr>
                            </thead>
                            <tbody>
                                {newlist.length > 0 ? newlist.filter((list) => list.title.toLowerCase().includes(search) || list.category.toLowerCase().includes(search)).map((list) => {
                                    return <tr key={list.id}>
                                        <td className="w-25">
                                            <img src={list.thumbnail} className="img-fluid img-thumbnail" alt="Sheep" />
                                        </td>
                                        <td>{list.title}</td>
                                        <td className='item-hide'>{list.category}</td>
                                        <td>${list.price}</td>
                                        <td className='item-hide' style={{ "color": "green" }}>{list.stock > 0 ? 'in-stock' : 'out-of-stock'} </td>
                                        <td>
                                            <BsFillCartFill></BsFillCartFill>
                                            <input type="checkbox" onChange={(e) => { handleCheckClick(list) }} style={{ "marginLeft": "2px" }} />
                                        </td>
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
        </div >
    )
}

export default Product
