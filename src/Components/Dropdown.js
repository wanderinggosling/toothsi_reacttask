import React, { useContext, useEffect, useState } from 'react'
import ItemContext from '../context/Itemcontext';
import { FiRefreshCcw } from 'react-icons/fi'

const Dropdown = () => {
    const [open, setopen] = useState(false);
    const context = useContext(ItemContext);
    const { list, categories, getCategory, value, setValue, ondropdown, setnewlist } = context;

    //dropdown toggle
    const toggleopen = () => {
        setopen(!open);
    }

    useEffect(() => {
        getCategory();
        // eslint-disable-next-line
    },[])

    const refresh = (e) => {
        setnewlist(list)
        setopen(false)
        setValue("All")
    }

    return (
        <div style={{ "display": "flex" }}>
            <div className="dropdown" onClick={toggleopen} style={{ "display": "table-row" }}>
                <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    {value}
                </button>
                <div className={`dropdown-menu${open ? 'show' : ''}`} aria-labelledby="dropdownMenuButton">
                    {categories.map((cat, index) => {
                        return <button key={index} className="dropdown-item" value={cat} onClick={(e) => ondropdown(e)}>{cat}</button>
                    })}
                </div>
            </div>
            <button style={{ "display": "contents" }} onClick={(e) => refresh(e)}><FiRefreshCcw style={{ "height": "initial", "marginLeft": "20px" }} /></button>
        </div>
    )
}

export default Dropdown
