import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";

//components
import { Home, UploadPost, UpdatePost, Login, Register } from "../Pages/index";

// redux store
import { getPosts } from "../store/actions/posts";

const Layout = () => {

    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(getPosts());
    },[dispatch])

    return (
        <Routes>
            <Route exact path="/" element={ <Home /> } />
            <Route path="/upload-post" element={ < UploadPost /> } />
            <Route path="/update-post" element={ < UpdatePost /> } />
            <Route path="/login"  element={ <Login /> } />
            <Route path="/Signup" element={ <Register /> } />
        </Routes>
    )
}

export default Layout;