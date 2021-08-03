import React from 'react';
import styled from 'styled-components';
import Header from './Header';
import { useStateValue } from "../StateProvider";

function Body( {spotify }) {
    const [{ discover_weekly }, dispatch] = useStateValue();
    const playPlaylist = (id) => {
        spotify
        .play({
            // TODO: Change hardcoded ID to Spotify API. BUG.
            context_uri: "spotify:user:spotify:playlist:0ms9VMingcmKXMuczPfIdS"
        })
    }

    return (
        <BodyContainer>
            <Header spotify={spotify} />
            <BodyInfo>
                <img
                  //TODO:  FETCH: Discover weekly NOT working now. Fix the bug.
                  src={discover_weekly?.images[0].url}
                  alt=""
                />
                <BodyInfoText>
                    <strong>PLAYLIST</strong>
                    <h2>{discover_weekly?.name}</h2>
                    <p>{discover_weekly?.description}</p>
                </BodyInfoText>
                {console.log(`THIS IS DISCOVER WEEKLY 💚 =>>>> ${discover_weekly?.url}`)}
            </BodyInfo>
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

const BodyInfo = styled.div`
    display: flex;
    align-items: flex-end;
    padding: 10px;
    > img {
        height: 20vw;
        margin: 0 20px;
        box-shadow: 0 4px 60px rgba(0, 0, 0, 0.5);
    }
`;

const BodyInfoText = styled.div`
    flex: 1;

    > h2 {
        font-size: 48px;
        margin-bottom: 10px;
    }
    
    > p {
        font-size: 14px;
    }
`;