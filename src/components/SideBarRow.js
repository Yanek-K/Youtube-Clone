import React from 'react'
import './SideBarRow.css'

function SideBarRow({ title, Icon, selected }){
    return(
        <div className={`SideBarRow ${selected && 'selected'}`}>
            <Icon className="SideBarRow__icon" />
            <h2 className="SideBarRow__title">{title}</h2>
        </div>
    )
}

export default SideBarRow