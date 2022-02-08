import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import Container from "@mui/material/Container";
import "./home.css"
//react spinner
import { ClimbingBoxLoader } from "react-spinners";

//postcard component
import PostCard from "../../components/PostCard/PostCard";
//form component
import Form from "../../components/PostForm/form";
// redux store
import { fetchPosts } from "../../store/actions/posts";

const Home = () => {

    //for updating post
    const [ currentId, setCurrentId ] = useState(0);
    //for updating UI after post delete
    const [ finishPost, setFinishPost ] = useState(false);
    //for updating UI after post create
    const [ postCreated, setPostCreated ] = useState(false);
    //show post form
    const [ showForm, setShowForm ] = useState(false);
         
    //repopulate post after updating
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchPosts());
        console.log("use Effect render checking");
        console.log(dispatch(fetchPosts()));
    }, [currentId, dispatch, finishPost]);
    // currentId, dispatch, deletePost

    //fetch posts from store
    const posts = useSelector((state) => state.posts);
    console.log("home page posts",posts);

    return (
        <HomePage className="svg-background">
            <Container>
                <Row>
                    <PostsCol>
                        <CardGrid>
                            { !posts.length 
                            ? <LoadingIconBox>
                                <ClimbingBoxLoader color={"#E60965"} loading={"true"} size={30} />
                            </LoadingIconBox>
                            : posts.map((post) => { 
                            return <PostCard 
                                        setShowForm={setShowForm}
                                        setFinishPost={setFinishPost} 
                                        finishPost={finishPost} 
                                        setCurrentId={setCurrentId} 
                                        key={post._id} 
                                        post={post} 
                                    />
                            }) }
                        </CardGrid>
                    </PostsCol>
                    <FormCol>
                        <UploadPost className="show-form" onClick={() => setShowForm(!showForm)}>Upload post</UploadPost>
                        <Form 
                            setShowForm={setShowForm}
                            showForm={showForm}
                            setPostCreated={setPostCreated} 
                            postCreated={postCreated} 
                            setCurrentId={setCurrentId} 
                            currentId={currentId} 
                        />
                    </FormCol>
                </Row>
            </Container>
        </HomePage>
    )
}

export default Home;


const HomePage = styled.div`
    overflow-x: hidden;
`;

const LoadingIconBox = styled.div`
    text-align: center;
    margin: 7rem 0;
    grid-column: 2;

    @media screen and (min-width: 900px) {
        margin-top: 13rem;
    }
`;

const Row = styled.div`
    max-width: 100%;
    margin: 0 auto;
    display: grid;
    grid-gap: 1rem;

    @media (min-width: 900px) {
        grid-template-columns: 70% 28%;
    }

    @media (max-width: 900px) {
        grid-template-row: 100% 100%;
    }
`;

const PostsCol = styled.div`
    padding: 30px 0 30px 0;

    @media screen and (max-width: 450px) {
        text-align: center;
        margin: auto;
    }
`;

const CardGrid = styled.div`
    display: grid;
    grid-template-columns: 32% 32% 32%;
    grid-column-gap: 1rem;
    grid-row-gap: 1rem;

    @media screen and (max-width: 1100px) and (min-width: 900px) {
        grid-template-columns: 49% 49%;
    }

    @media screen and (max-width: 750px) {
        grid-template-columns: 49% 49%;
    }

    @media screen and (max-width: 450px) {
        grid-template-columns: 100%;
        justify-content: center;
    }
`;

const FormCol = styled.div`
    padding: 30px 0 30px 0;

    @media (max-width: 900px) {
        grid-row: 1;
        max-width: 50%;
        margin: auto;
        text-align: center;
    }

    @media (max-width: 680px) {
        max-width: 100%;
    }

    @media (max-width: 360px) {
        width: 240px;
    }
/* 
    @media (min-width: 900px) {
        grid-column: 2;
    } */
`;

const UploadPost = styled.h1`

`;