import React from 'react'
import styled from 'styled-components'


const Container = styled.div`
display: flex;
gap: 10px;
margin: 30px 0px;
`;

const Avtar = styled.img`
width: 50px;
height: 50px;
border-radius:50%;
padding: 1px 0px;
`;

const Details = styled.div`
display: flex;
flex-direction: column;
gap: 10px; 
`;

const Name = styled.span`
font-size: 13px;
font-weight:; 500;
color: ${({ theme }) => theme.text};
`;

const Date = styled.span`
font-size: 12px;
font-weight: 400;
color: ${({ theme }) => theme.textSoft};
margin-left: 5px;
`;

const Text = styled.span`
font-size: 14px;
color: ${({ theme }) => theme.text};
`;

const Comment = () => {
    return (
        <Container>
            <Avtar src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/800px-Image_created_with_a_mobile_phone.png" />
            <Details>
                <Name>Clone
                    <Date>22/08/22</Date>
                </Name>

                <Text>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum rerum unde asperiores quod! Quam reiciendis dignissimos ex officiis! Nobis vitae sed facilis praesentium repellat? Illum quis sequi autem dolore excepturi?
                </Text>
            </Details>
        </Container>
    )
}

export default Comment