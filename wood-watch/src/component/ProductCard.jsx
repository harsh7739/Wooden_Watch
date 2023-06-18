import { color } from "framer-motion"
import { Link } from "react-router-dom"

function ProductCard({avatar,category,name,id,price,rating,title}){
  
    return (
        <>
        <div style={{boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",borderRadius:"8px"}}>
            <img src={avatar} alt="" />
            <h4>{category}</h4>
            <h3>{name}</h3>
            <p>{title}</p>
            <p>₹ {price}</p>
            <p>{rating}</p>
            <Link to={`/product/${id}`}>
            <button style={{
                paddingLeft:"10px",
                paddingRight:"10px",
                paddingTop:"5px",
                paddingBottom:"5px",
                color:"white",
                backgroundColor:"green"
            }}>Buy Now</button>
            </Link>
        </div>
        </>
    )
}
export default ProductCard