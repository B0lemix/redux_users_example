import React, { useEffect } from 'react'
import { fetchAllUsers } from './fetchAllUsers'
import { useDispatch, useSelector } from 'react-redux'

const UserList = () => {
  const { list: users } = useSelector((state) => state.users)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchAllUsers())
  }, [dispatch])

  /*  const users = [
    {
      id: 7,
      email: 'michael.lawson@reqres.in',
      first_name: 'Michael',
      last_name: 'Lawson',
      avatar: 'https://reqres.in/img/faces/7-image.jpg'
    },
    {
      id: 8,
      email: 'lindsay.ferguson@reqres.in',
      first_name: 'Lindsay',
      last_name: 'Ferguson',
      avatar: 'https://reqres.in/img/faces/8-image.jpg'
    },
    {
      id: 9,
      email: 'tobias.funke@reqres.in',
      first_name: 'Tobias',
      last_name: 'Funke',
      avatar: 'https://reqres.in/img/faces/9-image.jpg'
    },
    {
      id: 10,
      email: 'byron.fields@reqres.in',
      first_name: 'Byron',
      last_name: 'Fields',
      avatar: 'https://reqres.in/img/faces/10-image.jpg'
    },
    {
      id: 11,
      email: 'george.edwards@reqres.in',
      first_name: 'George',
      last_name: 'Edwards',
      avatar: 'https://reqres.in/img/faces/11-image.jpg'
    },
    {
      id: 12,
      email: 'rachel.howell@reqres.in',
      first_name: 'Rachel',
      last_name: 'Howell',
      avatar: 'https://reqres.in/img/faces/12-image.jpg'
    }
  ] */

  return (
      <div className="container flex  m-auto mb-4">
         <ul className="grid grid-cols-3 items-center justify-between mx-auto  w-3/4  ">
            {' '}
            {/**/}
            {users.map((user) => (
               <li
                  key={user.id}
                  className="flex flex-col hover:scale-125 m-10 duration-500 ease-in-out transition-all cursor-pointer mx-14  filter grayscale hover:filter-none "
               >
                  <div className="flex flex-col justify-between items-center border-4 rounded-xl p-6">
                     <img className="object-cover h-40 w-40" src={user.avatar} alt="avatar" />
                     <div className="flex flex-col font-bold">
                        <h5 className=" font-bold text-center">{` ${user.first_name} ${user.last_name}
                                
                              `}</h5>
                        <p className=" text-justify font-light">{user.email}</p>
                     </div>
                  </div>
               </li>
            ))}
         </ul>
      </div>
  )
}

export default UserList
