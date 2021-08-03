import React from 'react';
import styled from 'styled-components';

function Body() {
    return (
        <BodyContainer>
            <h1>Body</h1>
        </BodyContainer>
    )
}

export default Body;

const BodyContainer = styled.div`
    padding: 30px;
    margin-left: -56px;
    width: 100%;
    height: 100vh;
    overflow-y: overlay;
    flex: 0.8;
    color: white;
    background: linear-gradient(rgb(91, 87, 115), rgba(0, 0, 0, 1));
`;