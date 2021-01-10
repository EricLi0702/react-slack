import React from 'react';
import { useHistory } from'react-router-dom';
import "./SidebarOption.css";
import db from './firebase.js'
export default function SidebarOption({Icon,title, id, addChannelOption}) {
    const history = useHistory();
    
    const selectChannel = () => {
        if(id) {
            history.push(`/room/${id}`)
        }else{
            history.push(title)
        }
    }

    const addChannel = () => {
        const channelName = prompt(['Please enter the channel'])

        if(channelName){
            db.collection('rooms').add({
                name:channelName,

            })
        }
    }
    return (
        <div className="sidebarOption" onClick={addChannelOption ? addChannel : selectChannel}>
            {Icon && (<Icon className="sidebarOption__icon"></Icon>)}
            {Icon ? (
                <h3 className="sidebarOption__channel">{title}</h3>
            ):(
                <h3 class="d-flex">
                    <span className="sidebarOption__hash">#</span> 
                    <span className="sidebarOption__hash">{title}</span>
                </h3>
            )}
        </div>
    )
}
