import { useEffect, useState } from 'react';

function DogDetails({ dog }) {

  const [photo, setPhoto] = useState()
  useEffect(() => {
    // Fetch dog photo // photo-dog-fetch

  }, [dog.id])

  return (
    <div className="DogDetails">
      <img alt="dog" className="sketched puppy-photo" src={photo}></img>
      <div className="title centered">{dog.name} - {dog.birthDate}</div>
    </div>
  );
}

export default DogDetails;