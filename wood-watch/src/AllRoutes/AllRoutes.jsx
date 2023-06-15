import {Routes,Route} from "react-router-dom"
import Login from "../component/Login"
import Home from "../component/Hom"
import Signup from "../component/Signup"

function AllRoutes(){
    return (
        <>
        <Routes>
            <Route path="/login" element={<Login></Login>}></Route>
             <Route path="/" element={<Home></Home>}></Route>
             <Route path="/signup" element={<Signup></Signup>}></Route>
        </Routes>
       
        </>
    )
}
export default AllRoutes