import React from "react"
import {Link} from "react-router-dom"
import { Flex, Spacer } from '@chakra-ui/react'


function Navbar(){
    return (
        <>
        <Flex p='4'  justifyContent={"space-around"} alignItems={"center"} h={"50px"}
         bg={"rgb(69,67,53)"}>
        <Link to="/" style={{color:"orange",textDecoration:"none"}}>Home</Link>
        <Link to="/login" style={{color:"orange",textDecoration:"none"}}>Login</Link>
        <Link to="/signup" style={{color:"orange",textDecoration:"none"}}>Signup</Link>
        <Link to="/product" style={{color:"orange",textDecoration:"none"}}>Product</Link>
        <Link to="/admin" style={{color:"orange",textDecoration:"none"}}>Admin</Link>
        </Flex>
        </>
    )
}
export default Navbar