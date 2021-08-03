import React from 'react'
import styled from 'styled-components'

function SidebarOption({ option, Icon }) {
    return (
        <SidebarOptionContainer>
            {Icon && <Icon />}
            {Icon ? <h4>{option}</h4> : <p>{option}</p>}
        </SidebarOptionContainer>
    )
}

export default SidebarOption;

const SidebarOptionContainer = styled.div`
    display: flex;
    color: grey;
    height: 40px;
    cursor: pointer;
    transition: 250ms color ease-in;

    :hover {
        color: white;
    }
    /* Home, Search, Library Icons */
    > .MuiSvgIcon-root {
        padding-left: 10px;
        padding-right: 10px;
    }
    /* Playlist names */
    > p {
        margin-top: 10px;
        margin-left: 20px;
        font-size: 14px;
    }
`;