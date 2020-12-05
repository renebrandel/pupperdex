import { useContext, useState } from 'react';
import { Context } from '../containers/Pupperdex'

function NewDog({ breed }) {
  const [, dispatch] = useContext(Context)
  const [name, setName] = useState('')
  const [birthDate, setBirthDate] = useState(new Date().toISOString().slice(0, 10))
  const [file, setFile] = useState()
  return (
    <form className='NewDog' onSubmit={(e) => {
      const saveDog = async () => {
        try {
          // Save a new dog instance // dog-save

          // Upload a dog photo to S3 // dog-photo-upload

          // Update the breed with the dog's info // breed-update
          let savedBreed;
          dispatch({ name: 'SELECT_BREED', payload: savedBreed})
          console.log(savedBreed)
        } catch (e) {
          console.log(e)
        }
      }
      saveDog()
      e.preventDefault()
    }}>
      <input placeholder="Pupper's name" value={name} onChange={e => setName(e.target.value)} />
      <input placeholder="Pupper's birthDate" type="date" value={birthDate} onChange={e => setBirthDate(e.target.value)} />
      <input type="file" onChange={e => setFile(e.target.files[0])} accept="image/*" className="sketched upload-btn"></input>
      <input className="sketched" type="submit" value="Add a new Dog" />
    </form>
  )
}

export default NewDog