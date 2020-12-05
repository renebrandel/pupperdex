import { useContext } from 'react'
import { Context } from '../containers/Pupperdex'

function AddBreedButton() {
  const [, dispatch] = useContext(Context)
  return (<div className="BreedButton sketched dotted" onClick={async () => {
    // Save a new dog breed // breed-save
    let newBreed;

    dispatch({name: 'ADD_BREED', payload: newBreed})
  }}>+ Add new breed</div>)
}

export default AddBreedButton;