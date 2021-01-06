import { useEffect, useState } from "react"

const App = () => {
  const [user, setUser] = useState([])
  const [firstLoad, setFirstLoad] = useState(true)

  const fetchUser = async () => {
    const res = await fetch('https://randomuser.me/api/')
    const { results } = await res.json()
    setUser(results)
  }

  useEffect(() => {
    if(firstLoad) {
      fetchUser()
      setFirstLoad(false)
    }
  })

  return (
    <main className='bg-gray-700 min-h-screen text-white grid place-items-center'>
      <div className='bg-gray-600 w-3/4 h-1/2 rounded-md shadow-lg relative overflow-hidden'>
        <div className='h-20 bg-gray-500 relative mb-12'>
          <img src={user[0].picture.medium} alt="profile" className='rounded-full absolute top-9 left-28 border-2 border-white shadow-md'/>
        </div>
        <div className='flex flex-col items-center justify-center'>
          <h1 className='mb-2'><span className='font-bold text-green-400'>Email :</span> {user[0].email}</h1>
          <h1 className='mb-2'><span className='font-bold text-green-400'>Name :</span> {user[0].name.first} {user[0].name.last}</h1>
          <h1 className='mb-2'><span className='font-bold text-green-400'>Phone :</span> {user[0].phone}</h1>
          <h1 className='mb-2'><span className='font-bold text-green-400'>Age :</span> {user[0].dob.age} years old</h1>
          <h1 className='mb-2'><span className='font-bold text-green-400'>Country :</span> {user[0].location.country}</h1>
          <h1 className='mb-2'><span className='font-bold text-green-400'>City :</span> {user[0].location.city} {user[0].location.postcode}</h1>
          <button onClick={fetchUser} className='outline-none bg-green-400 py-1 px-2 rounded-md shadow-md text-sm'>New User</button>
        </div>
      </div>
    </main>
  );
}

export default App;
