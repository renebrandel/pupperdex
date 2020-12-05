import BreedButton from '../components/BreedButton'
import AddBreedButton from '../components/AddBreedButton'
import { useEffect, useContext, useCallback } from 'react';
import { Context } from './Pupperdex'

function BreedPage() {
  const [{ breeds }, dispatch] = useContext(Context)

  const fetchBreeds = useCallback(async () => {
      // Query for all dog breeds // breed-query
      let queriedBreeds = []
      dispatch({ name: 'SET_BREEDS', payload: queriedBreeds })
  }, [dispatch])

  useEffect(fetchBreeds, [fetchBreeds])

  return (
    <div className="BreedPage">
      <div className='title'>{`Breed`}</div>
      <div className='subtitle'>{breeds.filter(({ dog }) => dog).length} out of {breeds.length} puppers found!
        <span className='refresh-link' onClick={fetchBreeds}>Refresh</span>
      </div>
      <div className="breed-list">
        <AddBreedButton />
        {breeds.map(breed => <BreedButton key={breed.id} breed={breed} />)}
      </div>
    </div>
  );
}

export default BreedPage;