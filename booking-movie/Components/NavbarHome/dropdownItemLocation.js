import React from 'react'
import {useDispatch} from 'react-redux'
import * as Action from './modules/action';
export default function dropdownItemLocation(props) {
    const closeModalLocation=()=>{
        document.getElementById("modal-locaition").style.display="none";
        let close =  document.getElementsByClassName("modal-backdrop");
        if(close.length>0)
        {
            close[0].style.display="none";
        }
    }
    const dispatch = useDispatch();
    const handleChangeLocation = () =>{
        closeModalLocation();
        let action = Action.actChangeLocation(props.location);
        dispatch(action);
    }
    return (
        <a className="dropdown-item" href="#" onClick={handleChangeLocation}>{props.location.city}</a>
    )
}