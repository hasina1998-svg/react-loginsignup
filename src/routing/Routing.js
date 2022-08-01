import { BrowserRouter, Route, Routes } from "react-router-dom"
import ForgotPassword from "../component/ForgotPassword"
import Login from "../component/Login"
import OtpHandler from "../component/OtpHnadler"
import SignUp from '../component/SignUP'

const Routing=()=>{
    return(
        <div>
            <BrowserRouter>
            <Routes>
                <Route path='/' element={<Login/>}/>
                <Route path='/signup' element={<SignUp/>}/>
                <Route path='/forgotpassword' element={<ForgotPassword/>}/>
                <Route path='/otphandler' element={<OtpHandler/>}/>
            </Routes>
            </BrowserRouter>

        </div>
    )
}
export default Routing