import React from 'react'
import {useDispatch} from 'react-redux'
import * as Action from './modules/action';
export default function dropdownItemLocation(props) {
    const dispatch = useDispatch();
    const handleChangeLocation = () =>{
        let action = Action.actChangeLocation(props.location);
        dispatch(action);
    }
    return (
        <a className="dropdown-item" href="#" onClick={handleChangeLocation}>{props.location.city}</a>
    )
}