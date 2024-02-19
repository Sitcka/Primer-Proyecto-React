// import React from 'react';
// Importamos el archivo css
import '../stylesheet/Testimonio.css';
export function Testimonio(props) {
  // El proposito de react es crear componentes reusables
  return (
    <div className='contenedor-testimonio'>
      <img className='imagen-testimonio'
        src={require(`../images/testimonio-${props.imagen}.png`)}
        alt='Fotografia de mujer blanca'
      />
      <div className="contenedor-texto-testimonio">
        <p className="nombre-testimonio">
          <strong>{props.nombre}</strong> en {props.pais}
          </p>
        <p className="cargo-testimonio">
          {props.cargo} en <strong>{props.empresa}</strong>
          </p>
        <p className="texto-testimonio">
          {props.testimonio}
          </p>
      </div>
    </div>
  )
}
// export default Testimonio;
//Para poder exportarlo en App.js, la exportacion por defecto es que va hacer el unico elemento que se va exportar de este archivo, y tambien existe exportacion nombrada, por defecto solo podemos exportar uno