import React,{useState} from 'react';
import ChatLogo from "../../../images/chatLogo.png";
import BookmarksSharpIcon from '@mui/icons-material/BookmarksSharp';
import "./ChatNav.css";
import {Avatar} from "@material-ui/core";
import VisibilityIcon from '@mui/icons-material/Visibility';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import BarChartIcon from '@mui/icons-material/BarChart';
import VideocamIcon from '@mui/icons-material/Videocam';
import {IconButton } from '@mui/material';
import {useSelector} from "react-redux";


function ChatNav(props) {
    const [click, setClick] = useState(false);
    const user = useSelector((e)=>e.reducer);
    // console.log(user?.user?.photoURL);
    let linkStyle;
    if(click){
        linkStyle = {
            color : '#111'
        };
    }
    const iconPack = [
        {
            id:0,logoName:BookmarksSharpIcon
        },{
            id:1,logoName:VisibilityIcon
        },{
            id:2,logoName:PeopleAltIcon
        },{
            id:3,logoName:BarChartIcon
        },{
            id:4,logoName:VideocamIcon
        }
    ];
    const myIcon = iconPack.slice(0,5);
    return (
        <div className='navChat'>
            <div className='nav_block'>
        <img src={ChatLogo} alt="chatLogo" width="30" height="30" title='Change Song Playlist' onClick={props.name}/>
            </div>
            <div className='nav_blocks'>
            {
                myIcon.map(currElem =><IconButton key={currElem.id} onClick={()=>setClick(!click)}><currElem.logoName 
                style={linkStyle}/><br/></IconButton>)
            }
            </div>
            <div className='nav_blocks1'>
            <IconButton>
                <Avatar src={user?.user?.photoURL}/>
            </IconButton>
            </div>
        </div>
    );
}

export default ChatNav;
