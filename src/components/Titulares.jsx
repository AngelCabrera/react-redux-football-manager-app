import React from 'react';
import { connect } from 'react-redux';
import cancha from '../assets/images/cancha.svg';

const Titulares = ({ titulares, removerTitular }) => (
  <section>
    <h2>Titulares</h2>
    <div className='cancha'>
      {titulares.map((jugador) => (
        <article className='titular' key={jugador.id}>
          <img src={jugador.foto} alt={jugador.nombre} />
          <button onClick={() => removerTitular(jugador)}>&times;</button>
          <p>{jugador.nombre}</p>
        </article>
      ))}

      <img src={cancha} alt='Cancha de futbol' />
    </div>
  </section>
);

const mapStateToProps = (state) => ({
  titulares: state.titulares,
});

const mapDispatchToProps = (dispatch) => ({
  removerTitular(jugador) {
    dispatch({
      type: 'REMOVER_TITULAR',
      jugador,
    });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Titulares);
