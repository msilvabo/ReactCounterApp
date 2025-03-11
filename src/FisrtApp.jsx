import PropTypes from "prop-types";

export const FirstApp = ({ title, subtitle }) => { // Corrige el nombre a "FirstApp"
  const nombre = "FirstApp";
  const message = "Este es un mensaje";
  const datos = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  const objeto = {
    dato1: "Saludo",
    dato2: "nombre",
  };

  return (
    <>
      <h1>{nombre} - {title}</h1>
      <h2>{subtitle}</h2>
      <p>{message}</p>
      <h2>{datos.join(", ")}</h2> {/* Para mostrar los números con comas */}
      <code>{JSON.stringify(objeto)}</code>
      <h3>{objeto.dato2}</h3>
      {saludar()}
    </>
  );
};

const saludar = () => {
  const fecha = new Date();
  const fechaFormateada = fecha.toLocaleDateString("es-ES");
  return <p>Hola, hoy es {fechaFormateada}</p>;
};


FirstApp.propTypes = {
    title: PropTypes.string.isRequired, // Se marca como requerido
    subtitle: PropTypes.string.isRequired, // Se marca como requerido
  };
  

