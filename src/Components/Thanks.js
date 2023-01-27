import React,{useEffect,useContext} from 'react'
import {Link} from 'react-router-dom'
import ItemContext from '../context/Itemcontext';

const Thanks = () => {
    const context = useContext(ItemContext);
    const { setbucket } = context;
    useEffect(() => {
        setbucket([]);
        // eslint-disable-next-line 
    }, [])
    return (
        <div>
            <div className="jumbotron text-center">
                <h1 className="display-3">Thank You!</h1>
                <p className="lead"><strong>Your order has been placed </strong> </p>
                    <p className="lead">
                        <Link to="/"><button className="btn btn-primary btn-sm">Continue to homepage</button></Link>
                    </p>
            </div>
        </div>
    )
}

export default Thanks
