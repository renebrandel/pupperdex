import BreedPage from './BreedPage'
import DogPage from './DogPage'
import React, { useReducer, createContext } from 'react'

const initialState = {
  breeds: [],
  selectedBreed: null
}

function Pupperdex() {
  const [state, dispatch] = useReducer((_state, action) => {
    console.log(action)
    switch(action.name) {
      case 'ADD_BREED':
        return {
          breeds: [
            action.payload,
            ..._state.breeds
          ],
          selectedBreed: _state.selectedBreed
        }
      case 'SET_BREEDS':
        return { breeds: action.payload, selectedBreed: _state.selectedBreed }
      case 'SELECT_BREED':
        return {
          breeds: _state.breeds.map(breed => breed.id === action.payload.id ? action.payload : breed),
          selectedBreed: action.payload
        }
      default:
        return _state
    }
  }, initialState)

  return (
    <Context.Provider value={[state, dispatch]}>
      <div className="Pupperdex">
        <BreedPage />
        <div className="separator" />
        <DogPage />
      </div>
    </Context.Provider>
  );
}

export const Context = createContext(initialState)

export default Pupperdex;