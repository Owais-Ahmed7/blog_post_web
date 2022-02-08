import { Routes, Route } from "react-router-dom";

//components
import { Home, Login, Register } from "../Pages/index";

const Layout = () => {
    return (
        <Routes>
            <Route exact path="/" element={ <Home  /> } />
            <Route path="/sign-in"  element={ <Login /> } />
            <Route path="/Sign-up" element={ <Register /> } />
        </Routes>
    )
}

export default Layout;