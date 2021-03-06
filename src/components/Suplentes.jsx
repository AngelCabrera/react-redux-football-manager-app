import React from 'react';
import { connect } from 'react-redux';

const Suplentes = ({ suplentes, removerSuplente }) => (
  <section>
    <h2>Suplentes</h2>
    <div className='suplentes'>
      {suplentes.map((jugador) => (
        <article className='suplente' key={jugador.id}>
          <div>
            <img src={jugador.foto} alt={jugador.nombre} />
            <button onClick={() => removerSuplente(jugador)}>&times;</button>
          </div>
          <p>{jugador.nombre}</p>
        </article>
      ))}
    </div>
  </section>
);

const mapStateToProps = (state) => ({
  suplentes: state.suplentes,
});

const mapDispatchToProps = (dispatch) => ({
  removerSuplente(jugador) {
    dispatch({
      type: 'REMOVER_SUPLENTE',
      jugador,
    });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Suplentes);
