import React from 'react';
import styled from 'styled-components';
import SearchIcon from "@material-ui/icons/Search";
import { Avatar } from "@material-ui/core";
import { useStateValue } from "../StateProvider";

function Header() {
    const [{ user }, dispatch] = useStateValue();
    return (
        <HeaderContainer>
            <HeaderLeft>
                <SearchIcon />
                <input 
                    placeholder="Search for Artists, Songs"
                    type="text"
                />
            </HeaderLeft>

            <HeaderRight>
                <Avatar 
                  src={user?.images[0]?.url}
                  alt={user?.display_name}
                />
                <h4>{user?.display_name}</h4>
            </HeaderRight> 
        </HeaderContainer>
    )
}

export default Header;

const HeaderContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 30px;
`;
const HeaderLeft = styled.div`
    flex: 0.5;
    min-width: 80px;
    display: flex;
    align-items: center;
    background-color: white;
    color: gray;
    border-radius: 30px;
    padding: 10px;
    
    > input {
        border: none;
        width: 100%;
        outline: none;
    }
`;
const HeaderRight = styled.div`
    display: flex;
    align-items: center;    
    
    > h4 {
        margin-left: 10px;
    }
`;