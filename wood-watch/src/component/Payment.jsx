import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Input,
    Center,
  } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
function Payment(){
    const navigate = useNavigate()
    function handleSubmit(){
  
        alert("payment is successful")
        navigate("/")

    }
    return (
        <>
        {/* <h1>Payment Page</h1> */}
        <div style={{width:"99vw",height:"100vh",margin:"auto",backgroundColor:"gold",color:"black",
        boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px"}}>
        <Center>
         <form style={{width:"40%",margin:"auto",backgroundColor:"blue",color:"black",
        boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px"}} onSubmit={handleSubmit}>
         {/* <FormControl style={{width:"80%",margin:"auto",backgroundColor:"teal",color:"black"}} > */}
  <FormLabel>Enter Account holder Name</FormLabel>
  <Input type='text' placeholder='Account Holder Name' required />
  <FormLabel>Enter Card Number </FormLabel>
  <Input type='number' placeholder='Card Number' required />
  <FormLabel>Enter Card expiry date</FormLabel>
  <Input type='date' placeholder='date of expiry' required/>
  <FormLabel>Enter CVV</FormLabel>
  <Input type='password' placeholder='CVV' required/>
  

<input type="submit" value={"pay"} style={{backgroundColor:"red",color:"white",
paddingRight:"40px",paddingLeft:"40px",paddingTop:"10px",paddingBottom:"10px",borderRadius:"8px"}} 
/>
  

{/* </FormControl> */}
         </form>
      </Center>
      </div>
        </>
    )
}
export default Payment