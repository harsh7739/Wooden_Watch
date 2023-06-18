import { useEffect, useState } from "react"
import Update from "./Update"
import Add from "./Add";

function Admin(){

    const [data,setData] = useState([])
    const [render, setRender] = useState({
        add:false,
        update:false
    });
    async function fetchFun(){
        try {
            let res = await fetch(`https://63f4a4662213ed989c473978.mockapi.io/products`)
        res = await res.json()
        setData(res)
        } catch (error) {
            console.log(error)
            
        }
        
    }
    useEffect(()=>{
        fetchFun()
    },[])

    async function handleClick(id){
        try {
         let res = await fetch(`https://63f4a4662213ed989c473978.mockapi.io/products/${id}`,{
          method:"DELETE",
        //   body:JSON.stringify({title:"Harsh"}),
          headers:{
              "Content-type":"application/json; charset=UTF-8"
          },
         
      })
         res = await res.json()
         console.log(res)
         console.log(id)
         
         
        } catch (error) {
          console.log(error)
        }
  
      }
    


    return (
        <>
        <div style={{display:"flex",justifyContent:"space-around",paddingTop:"10px",paddingBottom:"10px",backgroundColor:"teal",color:"yellow"}}>
            <button onClick={() => setRender({update:false,add:true})}>Add Data</button>
            <button onClick={() => setRender({add:false,update:true})}>Update data</button>
        </div>
        {
            render.add ? <Add/> : render.update ? <Update/> : <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:"10px",width:"90%",margin:"auto",marginTop:"10px"}}>
            {
                data.map((item)=>(
                    <div style={{boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",borderRadius:"8px"}}>
            <img src={item.avatar} alt="" />
            <h4>{item.category}</h4>
            <h3>{item.name}</h3>
            <p>{item.title}</p>
            <p>₹ {item.price}</p>
            <p>{item.rating}</p>
            <button onClick={()=>handleClick(item.id)}
             style={{
                paddingLeft:"10px",
                paddingRight:"10px",
                paddingTop:"5px",
                paddingBottom:"5px",
                color:"white",
                backgroundColor:"green"
            }}>Delete</button>
            {/* <button onClick={()=>handleClick(id)}>Delete</button> */}
        </div>
                ))
            }
        </div>
        }
        </>
    )
}

export default Admin