import { useState } from "react";
import styled from  "styled-components";
import "./form.css"
//material ui
import Button from '@mui/material/Button';
import Input from '@mui/material/Input';

const Form = () => {

    const [postData, setPostData] = useState({
        creator: "",
        title: "",
        message: "",
        tags: "",
        selectedFile: ""
    })

    function onSubmit() {
        
    }

    return <>
        <PostForm methode="Post" path="http://localhost:5000/posts">
            <FormHeading>Create Post</FormHeading>
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
                <FileInput 
                    className="file-input" 
                    accept="image/*" 
                    name="selectedFile" 
                    type="file" 
                    onChange={(e) => setPostData({...postData, selectedFile: toString(e.target.value)})} 
                />
                {/* <label htmlFor="selectedFile">Choose a file...</label> */}
            </FileBox>
            <SubmitButton onSubmit={onSubmit} type="submit" >Upload</SubmitButton>
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
    flex-direction: column;
    align-content: space-between;
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