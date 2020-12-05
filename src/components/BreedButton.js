import { useContext } from 'react';
import {Context} from '../containers/Pupperdex'

function BreedButton({ breed }) {
  const [, dispatch] = useContext(Context)
  return (<div
    className="BreedButton sketched"
    onClick={() => dispatch({ name: 'SELECT_BREED', payload: breed })}>
    {breed.name}
  </div>)
}

export default BreedButton;