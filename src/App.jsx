import { useState, useEffect } from 'react'
import { get } from 'react-hook-form'
import './App.css'
import { remove } from './components/hook/Services'
import UsersForm from './components/UsersForm'
import UsersList from './components/UsersList'

function App() {
  const [ users, setUsers ] = useState([])
  const [ editUser, setEditUser ] = useState(null)

  useEffect(()=> {
    get('users/')
    .then((res) => setUsers(res.data))
  },[])

  const getUsers = () => {
    get('users/')
    .then((res) => setUsers(res.data))
  }

  const editActualUser = (user) => {
    setEditUser(null)
    setEditUser(user)
  }

  const removeUser = (id) => {
    remove(`users/${id}`)
    .then(() => getUsers())
    
  }
  return (
    <div className="App">
     <UsersForm 
     getUsers={getUsers}
     editUser={editUser}
     deselectEdit={() => setEditUser(null)}
     />
     <UsersList 
     />
    </div>
  )
}

export default App
