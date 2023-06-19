// import { Form } from "react-router-dom"

import { Center, FormControl,Input,FormLabel } from "@chakra-ui/react"
// import { Form } from "react-router-dom"

function Add(){

    function AddFun(e){
        e.preventDefault()
        console.log("hiiii")
        let obj = {
         avatar:e.target[0]?.value,
         category:e.target[1]?.value,
         name:e.target[2]?.value,
         title:e.target[3]?.value,
         price:e.target[4]?.value,
         rating:e.target[5]?.value
        }
        console.log(obj)
        handleAdd(obj)
    }
    async function handleAdd(obj){
       
        try {
            let res = await fetch(`https://63f4a4662213ed989c473978.mockapi.io/products`,{
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify(obj)
            })
            res = await res.json()
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <>
        <h1 style={{fontFamily:"fantasy",fontSize:"30px",color:"gold"}}>Add Data</h1>
      <Center>
        <form style={{width:"80%",margin:"auto",backgroundColor:"teal",color:"black"}} onSubmit={AddFun}>
      <FormControl style={{width:"80%",margin:"auto",color:"black",boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px"}} >
  <FormLabel>Enter image link</FormLabel>
  <Input type='text' name="avatar" />
  
  <FormLabel>Enter category</FormLabel>
  <Input type='text' name="category" />
  
  <FormLabel>Enter name</FormLabel>
  <Input type='text' name="name" />
 
  <FormLabel>Enter title</FormLabel>
  <Input type='text' name="title" />
  
  <FormLabel>Enter price</FormLabel>
  <Input type='text' name="price" />
  
  <FormLabel>Enter rating</FormLabel>
  <Input type='number' name="rating" />

<input type="submit" value={"submit"} style={{padding:"10px",backgroundColor:"red",color:"white"}}/>
  

</FormControl>
</form>
      </Center>
        </>
    )
    
}
export default Add