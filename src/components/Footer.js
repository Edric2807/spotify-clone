import React from 'react';
import styled from 'styled-components';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import ShuffleIcon from '@material-ui/icons/Shuffle';
import RepeatIcon from '@material-ui/icons/Repeat';
import { Grid, Slider } from '@material-ui/core';
import PlaylistPlayIcon from "@material-ui/icons/PlaylistPlay";
import VolumeDownIcon from "@material-ui/icons/VolumeDown";

function Footer() {
    return (
        <FooterContainer>
            {/* Footer LEFT */}
            <FooterLeft>
                <img
                  src="https://upload.wikimedia.org/wikipedia/en/thumb/c/c1/The_Weeknd_-_After_Hours.png/220px-The_Weeknd_-_After_Hours.png"
                  alt=""
                />
            <SongInfo>
                <h4>Blinding Lights</h4>
                <p>The Weekend</p>
            </SongInfo>
            </FooterLeft>
            {/* Footer CENTER */}
            <FooterCenter>
                <ShuffleIcon />
                <SkipPreviousIcon />
                <PlayCircleOutlineIcon />
                <SkipNextIcon />
                <RepeatIcon />
            </FooterCenter>
            {/* Footer RIGHT */}
            <FooterRight>
                <Grid container spacing={2}>
                    <Grid item>
                        <PlaylistPlayIcon />
                    </Grid>
                    <Grid item>
                        <VolumeDownIcon />
                    </Grid>
                    <Grid item xs>
                        <Slider />
                    </Grid>
                </Grid>
            </FooterRight>
        </FooterContainer>
    )
}

export default Footer;

const FooterContainer = styled.div`
    position: fixed;
    display: flex;
    justify-content: space-between;
    bottom: 0;
    height: 65px;
    width: 97%;
    padding: 20px;
    background-color: #282828;

    color: white;
`;

const FooterLeft = styled.div`
    flex: 0.3;
    display: flex;
    align-items: center;
    width: 300px;
    
    > img {
        height: 60px;
        width: 60px;
        margin-right: 20px;
        object-fit: contain;
    }
`;

const SongInfo = styled.div`
    > h4 {
        margin-bottom: 5px;
    }

    > p {
        font-size: 12px;
    }
`;

const FooterCenter = styled.div`
    flex: 0.4;
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 300px;
    padding: 0 100px;
    color: white;

    > .MuiSvgIcon-root {
        cursor: pointer;
        :hover {
            transition: transform 200ms ease-in-out;
            transform: scale(1.2);
        }
    }
    > .MuiSvgIcon-root:nth-child(1),
      .MuiSvgIcon-root:nth-child(5) {
        color: #1ed15e;
    }
    > .MuiSvgIcon-root:nth-child(3) {
        font-size: 40px;
    }
`;

const FooterRight = styled.div`
    flex: 0.3;
    display: flex;
    align-items: center;
    justify-content: space-between;
    > * .MuiSlider-root {
        color: green;
    }
`;