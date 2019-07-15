import React, {Fragment, useState} from 'react';

function Pregunta(props) {
  // extraemos la funcion
  const {guardarPresupuesto, guardarPreguntaPresupuesto} = props;


  // definir el state de presupuesto y de error
  const [cantidad, guardarCantidad] = useState(0);
  const [error, guardarError] = useState(false);

  const agregarPresupuesto = e => {
    e.preventDefault();
    // validar
    if (cantidad < 1 || isNaN(cantidad)) {
      guardarError(true);
      return;
    }

    // Si pasa la validacion
    guardarError(false);
    guardarPresupuesto(cantidad);
    guardarPreguntaPresupuesto(false);
  };

  return (
    <Fragment>
      <h2>Coloca tu presupuesto</h2>
      {error ? <p className="alert alert-danger error">
        El presupuesto es incorrecto.
      </p> : null}
      <form
        onSubmit={agregarPresupuesto}
      >
        <input
          type="number"
          className="u-full-width"
          placeholder="Agrega tu Presupuesto"
          onChange={e => guardarCantidad(parseInt(e.target.value, 10) )}
        />

        <input
          type="submit"
          className="button-primary u-full-width"
          value="Definir Presupuesto"
        />
      </form>
    </Fragment>

  );

}

export default Pregunta;
