import React, { useState } from "react";
import ItemContext from "./Itemcontext";
const ItemState=(props)=>{
    const [list, setlist] = useState([]);
    const [newlist,setnewlist]=useState([]);
    const [categories,setCategories]=useState([]);
    const [value,setValue]=useState('All');
    const [bucket, setbucket] = useState([]);  

    //quantity increement
    const increement=(id)=>{
       setbucket(
            bucket.map((ele)=>ele.id===id ? {...ele,quantity:ele.quantity+1}:ele)
       );
    };

    //quantity decreement
    const decreement=(id)=>{
        setbucket(
            bucket.map((ele)=>ele.id===id ? {...ele,quantity:ele.quantity-1}:ele)
       );
    }

    //get all products
    const getProd = async () => {
        const response = await fetch('https://dummyjson.com/products', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        });
        const json = await response.json();
        setlist(json.products);
         setnewlist(json.products);
         console.log(list.length)
    }

    //get all categories
    const getCategory=async()=>{
        const response=await fetch('https://dummyjson.com/products/categories',{
            method:"GET",
            headers:{
                "Content-type":"application/json",
            }
        });
        const json=await response.json();
        setCategories(json);

    }

    //dropdown filter
    const ondropdown=(e)=>{
        setValue(e.target.value);
         setnewlist(list.filter(l=>l.category===e.target.value));
    }

    //checkbox clicked funtion
    const handleCheckClick=(ele)=>{
        const curr=bucket.find((obj)=>obj.id===ele.id);
        setbucket(curr ? bucket :[...bucket,{...ele,quantity:(ele.quantity=1)}])
    }

    return (
        <ItemContext.Provider value={{list,setlist,getProd,categories,setCategories,getCategory,value,setValue,ondropdown,newlist,setnewlist,bucket, setbucket,increement,decreement,handleCheckClick}}>
          {props.children}
        </ItemContext.Provider>
      )
}

export default ItemState