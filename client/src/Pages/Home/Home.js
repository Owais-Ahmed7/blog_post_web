import styled from "styled-components";
import Container from "@mui/material/Container";

//form component
import Form from "../../components/PostForm/form";

//posts fetching from redux store
import { useSelector } from "react-redux";

const Home = () => {

    const posts = useSelector((state) => state.posts);
    console.log(posts);

    return (
        <HomePage>
            <Container>
                <Row>
                    <PostsCol>
                        <h1>Blogs</h1>
                    </PostsCol>
                    <UploadCol>
                        <Form />
                    </UploadCol>
                </Row>
            </Container>
        </HomePage>
    )
}

export default Home;


const HomePage = styled.div`
    background: lightgrey;
`;

const Row = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    display: grid;
    grid-gap: 1rem;

    @media (max-width: 900px) {
        div:nth-child(1) {
            grid-template-columns: 100%;
        }
        div:nth-child(2) {
            display: none;
        }
    }

    @media (min-width: 900px) {
        grid-template-columns: 70% 28%;
    }
`;

const PostsCol = styled.div`
    padding: 30px 0 30px 0;
`;

const UploadCol = styled.div`
    padding: 30px 0 30px 0;
`;