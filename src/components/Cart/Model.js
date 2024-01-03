import React, { Fragment } from 'react'
import classes from './Model.module.css'
import { createPortal } from 'react-dom'

const ModelOverlay = (props)=>{
return <div className={classes.modal}>
    <div className={classes.content}>{props.children}</div>
</div>
}
const Backdrop = props=>{
    return (
        <div className={classes.backdrop}/>
    )
}

export default function Model(props) {
  return (
    <Fragment>
        {createPortal(<Backdrop/>,document.getElementById("ModelOverlay"))}
        {createPortal(<ModelOverlay>{props.children}</ModelOverlay>,document.getElementById("ModelOverlay"))}
    </Fragment>
  )
}
