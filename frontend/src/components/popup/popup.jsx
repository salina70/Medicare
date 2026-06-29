import React from "react"
import {createPortal} from 'react-dom'
import { usePopup } from "../../context/popupContext"

export function Popup() {
    return createPortal(<PopupDialog/>, document.getElementById('modal-root')) 
}

export function PopupDialog() {
    const {isActive, toggle} = usePopup()
    return <section className={`popup__section ${isActive ? 'popup__section--active': ''}`}>
    <header className="popup__section__header">
        <a href="#" className="popup__section__close" onClick={toggle}>X</a>
    </header>
        <PopupContent/>
    </section>
}

export function PopupContent({children}) {
    return <div className="popup__body">
        {children}
    </div> 
}