import React from 'react';
import styled from 'styled-components';
import { accessUrl } from "../spotify";

function Login() {
    return (
        <LoginContainer>
            <img 
                // src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
                src="https://cdn.dribbble.com/users/441326/screenshots/3165191/spotify-gif---oliver-keane.gif" 
                alt="spotify logo" 
            />
            <a href={accessUrl}>LOGIN WITH SPOTIFY</a>

        </LoginContainer>
    )
}

const LoginContainer = styled.div`
    display: grid;
    place-items: center;
    height: 100vh;
    background-color: black;
    
    > img {
        max-width: 400px;
        max-height: 300px;
    }

    > a {
        padding: 20px;
        border-radius: 99px;
        background-color: #1db954;
        font-weight: 800;
        color: white;
        text-decoration: none;
        margin-top: 50px;
        margin-bottom: 250px;
    }
`;

export default Login;