import React from 'react'
import styled from 'styled-components'
import Comment from './Comment';

const Container= styled.div`

`;
const NewComment= styled.div`
display: flex;
align-items: center;
gap: 10px;
`;
const Avtar= styled.img`
width: 50px;
height: 50px;
border-radius:50%;
padding: 1px 0px;
`;
const Input= styled.input`
border: none;
border-bottom: 1px; solid ${({theme})=>theme.soft};
background-color: transparent;
outline: none;
padding: 5px;
width: 100%;
`;

const Comments = () => {
    return (
        <Container>
            <NewComment>
                <Avtar src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/800px-Image_created_with_a_mobile_phone.png"/>
                <Input placeholder='Add a comment...'/>
            </NewComment>
            <Comment/>
            <Comment/>
            <Comment/>
            <Comment/>
            <Comment/>
            <Comment/>

        </Container>
      )
}

export default Comments