import React, { useState } from 'react'
import "./Form.css"

function Form({onCheckout}) {
    const [userData, setUserData] = useState({
        nombre: "",
        email: "",
        telefono: "",
    })

    function handleInputChange(evt){
        const inputText = evt.target.value
        const inputName = evt.target.name
        const newUserData = {...userData}
        newUserData[inputName] = inputText
        setUserData(newUserData)
    }

    function onSubmit(evt){
        evt.preventDefault()
        onCheckout(userData)
    }
  return (
    <>
        <form className="form">
            <h2>Ingresa tus datos para finalizar tu compra.</h2>
            <div className="form-group">
                <label className="label-input">Nombre</label>
                <input type="text" value = {userData.nombre} name = "nombre" required onChange = {handleInputChange}/>
            </div>
            <div className="form-group">
                <label className="label-input">Email</label>
                <input type="email" value = {userData.email} name = "email" required onChange = {handleInputChange}/>
            </div>
            <div className="form-group">
                <label className="label-input">Teléfono</label>
                <input type="text" value = {userData.telefono} name = "telefono" required onChange = {handleInputChange}/>
            </div>
            <button onClick={onSubmit} type="submit" className="comprar">
                Finalizar compra
            </button>
        </form>
    </>
    
  )
}

export default Form