import {Routes,Route} from "react-router-dom"
import Login from "../component/Login"
import Home from "../component/Hom"
import Signup from "../component/Signup"
import Product from "../component/product"
import SingleProduct from "../component/SingleProduct"
import Admin from "../Admin/Admin"
// import Update from "../Admin/Update"
import Payment from "../component/Payment"

function AllRoutes(){
    return (
        <>
        <Routes>
            <Route path="/login" element={<Login></Login>}></Route>
             <Route path="/" element={<Home></Home>}></Route>
             <Route path="/signup" element={<Signup></Signup>}></Route>
             <Route path="/product" element={<Product></Product>}></Route>
             <Route path="/product/:id" element={<SingleProduct></SingleProduct>}></Route>
             <Route path="/admin" element={<Admin></Admin>}></Route>
             <Route path="/payment" element={<Payment></Payment>}></Route>
        </Routes>
       
        </>
    )
}
export default AllRoutes