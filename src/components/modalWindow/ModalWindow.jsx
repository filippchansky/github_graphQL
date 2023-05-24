import { useState } from "react";
import "./modalWindow.css"

const ModalWindow = ({children, active, setActive}) => {
    
    return ( 
        <div className={active? "modal active": "modal"} onClick = {setActive(false)}>
            <div className="modal__content">
                {children}
            </div>
        </div>
     );
}
 
export default ModalWindow;