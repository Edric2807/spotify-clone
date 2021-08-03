import React from 'react';
import styled from 'styled-components';
import SidebarOption from './SidebarOption';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import LibraryMusicOutlinedIcon from '@material-ui/icons/LibraryMusicOutlined';
import { useStateValue } from '../StateProvider';
import { getTokenFromResponse } from "../spotify";

function Sidebar() {
    const [{ playlists }, dispatch] = useStateValue();
    console.log(`THIS IS PLAYLIST 👉 ${playlists}`);
    return (
        <SidebarContainer>
            <img 
              src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg" 
              alt="spotify logo"
            />
            <SidebarOption Icon={HomeOutlinedIcon} option="Home" />
            <SidebarOption Icon={SearchOutlinedIcon} option="Search" />
            <SidebarOption Icon={LibraryMusicOutlinedIcon} option="Your Library" />
           
            <br />
            <strong><p>PLAYLISTS</p></strong>
            <hr />

            {playlists?.items?.map((playlist) => (
                    <SidebarOption option={playlist.name} />
            ))}
        </SidebarContainer> 
    );
}


//         <SidebarOption option={playlist.name} />
//       ))}
//     </div>
//   );
// }

// export default Sidebar;
export default Sidebar;

const SidebarContainer = styled.div`
    display: flex;
    flex-direction: column;
    flex: 0.2;
    padding-left: 10px;
    padding-right: 10px;
    min-width: 230px;
    height: 100vh;
    color: white;
    background-color: #040404;
    
    /* SPOTIFY LOGO */
    > img {
        margin-right: auto;
        object-fit: contain;
        height: 57px;
        padding: 10px;
        margin-left: -5px;
    }

    /* The word "PLAYLISTS" */
    > strong > p {
        margin-left: 10px;
        padding: 5px;
        font-size: 14px;
    }
    /* Line under the word "PLAYLISTS" */
    > hr {
        border: 1px solid #282828;
        width: 90%;
        margin: 10px auto;
    }
`;