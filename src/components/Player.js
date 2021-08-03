import React from 'react';
import Body from './Body';
import Footer from './Footer';
import Sidebar from './Sidebar';
import styled from 'styled-components';
function Player({ spotify }) {
    return (
        <PlayerContainer>
            <PlayerBody>
                <Sidebar />
                <Body />
            </PlayerBody>
            <Footer />
        </PlayerContainer>
    )
}

export default Player;

const PlayerContainer = styled.div`

`;

const PlayerBody = styled.div`
    display: flex;
`;