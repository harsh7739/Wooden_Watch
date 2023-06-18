import { border } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import axios from "axios"
import ProductCard from "./ProductCard"



function Product(){
    const [data,setData] = useState([])

    async function fetchFun(){
        try {
            let res = await fetch("https://63f4a4662213ed989c473978.mockapi.io/products")
        res = await res.json()
        setData(res)
        console.log(res)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(()=>{
        fetchFun()
    },[])

    // console.log(data)


   


    return (
        <>
       
        
        {
            <div style={{width:"90%", margin:"auto",display:"grid",gridTemplateColumns:"repeat(4,1fr", gap:"10px",marginTop:"10px"}}>
             
           { data.map((elem)=>(
                 <ProductCard key={elem.id} {...elem}></ProductCard>
            ))}
            </div>
        }
        </>
    )
}
export default Product