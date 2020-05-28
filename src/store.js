import { createStore } from 'redux';

const initialState = {
  jugadores: [
    {
      id: 1,
      nombre: 'Angel Cabrera',
      foto: `https://source.unsplash.com/150x150/?person`
    },
    {
      id: 2,
      nombre: 'Alejandro Cabrera',
      foto: `https://source.unsplash.com/170x170/?person`
    },
    {
      id: 3,
      nombre: 'Jose Cabrera',
      foto: `https://source.unsplash.com/160x160/?person`
    },
    {
      id: 4,
      nombre: 'Cabrera Cabrera',
      foto: `https://source.unsplash.com/180x180/?person`
    },
    {
      id: 5,
      nombre: 'Suniaga Cabrera',
      foto: `https://source.unsplash.com/190x190/?person`
    }
  ],
  titulares: [],
  suplentes: [],
}

const reducerEntrenador = (state = initialState, action) => {
  if (action.type === 'AGREGAR_TITULAR') {
    return {
      ...state,
      titulares: state.titulares.concat(action.jugador),
      jugadores: state.jugadores.filter(jugador => jugador.id !== action.jugador.id)
    }
  }

  if (action.type === 'AGREGAR_SUPLENTE') {
    return {
      ...state,
      suplentes: state.suplentes.concat(action.jugador),
      jugadores: state.jugadores.filter(jugador => jugador.id !== action.jugador.id)
    }
  }

  if (action.type === 'REMOVER_SUPLENTE') {
    return {
      ...state,
      suplentes: state.suplentes.filter(jugador => jugador.id !== action.jugador.id),
      jugadores: state.jugadores.concat(action.jugador),
    }
  }

  if (action.type === 'REMOVER_TITULAR') {
    return {
      ...state,
      titulares: state.titulares.filter(jugador => jugador.id !== action.jugador.id),
      jugadores: state.jugadores.concat(action.jugador),
    }
  }

  return state;
}

export default createStore(reducerEntrenador);