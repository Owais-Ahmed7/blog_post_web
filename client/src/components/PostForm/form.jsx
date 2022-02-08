import { useState, useEffect } from "react";
import styled from  "styled-components";
import "./form.css"
import { useDispatch, useSelector } from "react-redux";
import { createPost, updatePost } from "../../store/actions/posts";
import FileBase64 from "react-file-base64"


const Form = ({ currentId, setCurrentId, setPostCreated, postCreated, showForm, setShowForm }) => {

    const [postData, setPostData] = useState({
        creator: "",
        title: "",
        message: "",
        tags: "",
        selectedFile: ""
    });
    const post = useSelector((state) => currentId ? state.posts.find((post) => post._id === currentId) : null); 
    const dispatch = useDispatch();

    useEffect(() => {
        if(post) setPostData(post);
    },[post])

    function onSubmit(e) {
        e.preventDefault();
        if(currentId) {
            dispatch(updatePost(currentId, postData));
            setShowForm(false);
        }else {
            dispatch(createPost(postData));
            setPostCreated(!postCreated);
            setShowForm(false);
        }
        setPostData({ creator:"", title:"",message: "",tags: "",selectedFile: ""});
        setCurrentId(null);
    }

    return <>
        <PostForm className={showForm ? "show" : "hide"} methode="Post" path="http://localhost:5000/posts/">
            <FormHeading>{ currentId ? 'Edit' : 'Create' } Post</FormHeading>
            <InputBox>
               <div>
                    <span className="label"><CreatorLabel htmlFor="creator">Creator</CreatorLabel></span>
                    <CreatorInput 
                        name="creator" 
                        type="input" 
                        autoComplete="off"
                        className="input"
                        value={postData.creator}
                        onChange={(e) => setPostData({...postData, creator: e.target.value}) } 
                    />
                </div>
                <div>
                    <span className="label"><TitleLabel htmlFor="title">Title</TitleLabel></span>
                    <TitleInput 
                        name="title" 
                        type="input"
                        className="input"
                        autoComplete="off"
                        value={postData.title}
                        onChange={(e) =>setPostData({...postData, title: e.target.value}) } 
                    />
                </div>
                <div>
                    <span className="label"><MessageLabel htmlFor="message">Message</MessageLabel></span>
                    <MessageInput 
                        name="message" 
                        type="text" 
                        className="input"
                        autoComplete="off"
                        value={postData.message}
                        onChange={(e) =>setPostData({...postData, message: e.target.value}) } 
                    />
                </div>
                <div>
                    <span className="label"><TagsLabel htmlFor="tags">Tags</TagsLabel></span>
                    <TagsInput 
                        name="tags" 
                        type="text" 
                        className="input"
                        autoComplete="off"
                        value={postData.tags}
                        onChange={(e) =>setPostData({...postData, tags: e.target.value}) }  
                    />
                </div>
            </InputBox>
            <FileBox>
                <FileBase64 
                    type="file"
                    multiple={false}
                    onDone={({base64}) => setPostData({...postData, selectedFile: base64})}
                />
            </FileBox>
            <SubmitButton onClick={onSubmit} type="submit" >Submit</SubmitButton>
        </PostForm>
    </>
};

export default Form;

const FormHeading = styled.h2`
    font-size: 2rem;
`;

const PostForm = styled.form`
    /* font-family: ; */
    display: flex;
    /* background-color: #6867AC; */
    flex-direction: column;
    align-content: space-between;
    transition: 0.3s;
`;

const InputBox = styled.div`
    margin: 1rem 0 0 0;
`;

//creator field
const CreatorLabel = styled.label``;

const CreatorInput = styled.input`
    padding: 1rem 1rem;
    outline: none;
`; 

//title field
const TitleInput = styled.input`
    padding: 1rem 1rem;
    outline: none;
`;

const TitleLabel = styled.label``;

// message field
const MessageInput = styled.input`
    padding: 1rem 1rem;
    outline: none;
`;

const MessageLabel = styled.label``;

// tags field
const TagsInput = styled.input`
    padding: 1rem 1rem;
    outline: none;
`;

const TagsLabel = styled.label``;

//select file 
const FileBox = styled.div`
    position: relative;
    background-color: dodgerblue;
    padding: 6px 10px;
    text-align: center !important;
    margin-bottom: 10px;
    font-weight: bold;
    cursor: pointer;
    border-radius: 10px;
    color: #fff;
`;

const FileInput = styled.input`
    cursor: pointer;
`;

const FileLabel = styled.label`
    color: white;
    background-color: dodgerblue;
    position: absolute;
    font-size: 1.2rem;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: center;
`;

//submit button
const SubmitButton = styled.button`
    text-align: center;
    margin: auto;
    border: 2px solid #E60965;
    padding: 6px 10px;
    font-size: 0.9rem;
    font-weight: 700;
    background-color: #E60965;
    border-style: none;
    width: 100%;
    border-radius: 5px;

    :hover {
        border-radius: 12px;
        border: 2px solid dodgerblue !important;
        transition-duration: 0.2s !important;
        cursor: pointer;
    }
`;