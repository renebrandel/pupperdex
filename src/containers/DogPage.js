import { useContext } from 'react';
import {Context} from './Pupperdex'
import DogDetails from '../components/DogDetails';
import NewDog from '../components/NewDog';

function DogPage() {
  const [{ selectedBreed }] = useContext(Context)

  if (!selectedBreed) {
    return <div className="DogPage"><div className="centered">Selected a dog breed to get started.</div></div>
  }

  return (
    <div className="DogPage">
      <div className="title">{selectedBreed.name}</div>
      <div className="description">{selectedBreed.description}</div>
      <div className="line sketched" />
      {selectedBreed.dog ? <DogDetails dog={selectedBreed.dog} /> : <NewDog breed={selectedBreed} />}
    </div>
  );
}

export default DogPage;