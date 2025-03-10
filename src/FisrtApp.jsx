import React from 'react';

export const FisrtApp = ( {title , subtitle}) => {

    if (!title) {
        throw new Error('Title no existe')
    }
    const nombre = 'FirtApp'
    const message = 'Este es un mensaje'
    const datos = [1,2,3,4,5,6,7,8,9,0];
    const objeto = {
        dato1 : 'Saludo',
        dato2 : 'nombre',
    }

    
  return (
    <>
        <h1>{nombre} - {title}</h1>
        <h2>{subtitle}</h2>
        <p>{message}</p>
        <h2>{datos}</h2>
        <code>{JSON.stringify(objeto)}</code>
        <h3>{objeto.dato2}</h3>
        {saludar()}
    </>
  );
};

const saludar = () => {
    const fecha = new Date();
    const fechaFormateada = fecha.toLocaleDateString("es-ES"); 
    return <p>hola, hoy es ...{fechaFormateada} </p>;
}