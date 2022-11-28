import React from 'react'
const Button =({isActive, clicked})=> {

    return (
        <div>
            <button onClick ={clicked}>{isActive ? "Obtener otro Usuario": "Obtener Usuario"}</button>
        </div>
    )
}

export default Button

