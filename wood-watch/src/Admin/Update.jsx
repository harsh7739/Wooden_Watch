// import { Form } from "react-router-dom"

// import { FormControl } from "@chakra-ui/react"
import { Center, FormControl,Input,FormLabel } from "@chakra-ui/react"
import { calcLength } from "framer-motion"

function Update(){
    async function handleSubmit(e){
        e.preventDefault();
        
    }
    return (
        <>
        <h1 style={{fontFamily:"fantasy",fontSize:"30px",color:"green"}}>Update Data</h1>
        <Center>
         <form style={{width:"80%",margin:"auto",backgroundColor:"teal",color:"black"}} onSubmit={handleSubmit}>
         {/* <FormControl style={{width:"80%",margin:"auto",backgroundColor:"teal",color:"black"}} > */}
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
  <Input type='text' name="rating" />

<input type="submit" value={"submit"} style={{padding:"10px",backgroundColor:"red",color:"white"}} />
  

{/* </FormControl> */}
         </form>
      </Center>
        </>
    )
    
}
export default Update