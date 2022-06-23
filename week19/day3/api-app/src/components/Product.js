import { useState, useEffect } from 'react';
import {Link, useParams, useNavigate} from 'react-router-dom';

const Product = (props) => {
    const [product, setProduct] = useState([]);
    const params = useParams();
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const navigate = useNavigate();

    useEffect(()=> {
        fetch(`/api/products/${params.id}`)
        .then(res =>res.json())
        .then(data=> {
            setProduct(data);
            setName(data[0].name);
            setPrice(data[0].price);
        })
        .catch(error=> {
            console.log(error);
        })
    },[])

    const update = (e) => {
        e.preventDefault();
        fetch(`/api/products/${params.id}`, {
            method:'PUT',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({name, price})
        })
        .then(res =>res.json())
        .then(data=> {
            setProduct(data);
        })
        .catch(error=> {
            console.log(error);
        })
    }

    const del = () => {
        fetch(`/api/products/${params.id}`, {
            method:'DELETE',
            headers:{
                'Content-Type':'application/json'
            }
        })
        .then(res =>res.json())
        .then(data=> {
            setProduct(data);
            navigate('/');
        })
        .catch(error=> {
            console.log(error);
        })
    }

    return(
        <>
            <h1>Product</h1>
            <div>
                <h2>Update Product</h2>
                    <form onSubmit={update}>
                        Name: <input type='text' onChange={(e)=>setName(e.target.value)} value={name}/>
                        Price: <input type='text' onChange={(e)=> setPrice(e.target.value)} value={price} />
                        <input type='submit' value='Update Product' />
                    </form>
            </div>
            <div>
                <h2>Delete Product</h2>
                <button onClick={del}>Delete Product</button>
            </div>
            {
              product.map(item=>{
                    return(
                        <div key={item.id}>
                            <h4>Name: {item.name}</h4>
                            <h6>Price: {item.price}$</h6>
                            <h6>Makat: {item.id}</h6>
                            <Link to={'/'}>Back To Shop</Link>
                        </div>
                    )
                })
            }
        </>
    )
};

export default Product;