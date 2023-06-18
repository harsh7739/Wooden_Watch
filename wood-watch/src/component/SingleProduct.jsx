import { useEffect, useState } from "react"
import { Navigate, useParams,useNavigate } from "react-router-dom"

function SingleProduct(){
    const {id} = useParams()
    console.log(id)
    const [data,setData] = useState([])
    async function fetchFun(){
        try {
            let res = await fetch(`https://63f4a4662213ed989c473978.mockapi.io/products/${id}`)
            res = await res.json()
            setData(res)
            // console.log(res)

        } catch (error) {
            console.log(error)
        }
    }
    useEffect(()=>{
        fetchFun()
    },[])

    const navigate = useNavigate();
    // console.log(data)
    const {avatar,title,name,price,rating,category} = data
    function handlePayment(){
        console.log("hiii");
        navigate("/payment")
    }
    return (
        <>
        <h1>Single Page</h1>
       
       
        <div style={{boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",borderRadius:"8px",width:"30%",margin:"auto"}}>
            <img src={avatar} alt="" style={{width:"100",margin:"auto"}}/>
            <h4>{category}</h4>
            <h3>{name}</h3>
            <p>{title}</p>
            <p>₹ {price}</p>
            <p>{rating}</p>
            {/* <Link to={`/product/${id}`}> */}
            <button onClick={handlePayment}
            style={{
                paddingLeft:"10px",
                paddingRight:"10px",
                paddingTop:"5px",
                paddingBottom:"5px",
                color:"white",
                backgroundColor:"green"
            }}>Continue</button>
            {/* </Link> */}
        </div>
        
       
        </>
    )
}
export default SingleProduct