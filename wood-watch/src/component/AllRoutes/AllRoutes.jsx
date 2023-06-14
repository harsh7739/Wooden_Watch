import {Routes,Route} from "react-router-dom"
import Login from "../Login"
import Home from "../Hom"

function AllRoutes(){
    return (
        <>
        <Routes>
            <Route path="/login" element={<Login></Login>}></Route>
        </Routes>
        <Routes>
            <Route path="/" element={<Home></Home>}></Route>
        </Routes>
       
        </>
    )
}
export default AllRoutes