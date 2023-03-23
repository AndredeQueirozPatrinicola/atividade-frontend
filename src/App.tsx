import React from 'react';
import './App.css';
import { AddUser } from './components/AddUser/AddUser';
import { ListUser } from './components/ListUser/ListUser';
import { useSelector } from 'react-redux';


export interface Data{
  id: number;
  email: string;
  username: string;
  password: string;
  name: {
    firstname: string;
    lastname: string;
  }
  address: {
    city:string;
    street: string;
    number: number;
    zipcode: string;
    geolocation: {
      lat: string;
      long: string;
    },
  },
  phone: string;
}

interface RootState{
  users: []
}

export interface ListUserProp{
  users: Data[]
}

function App(){
  const userList = useSelector((state: RootState) => state.users);
  return (
    <div className='app'>
      <AddUser
        users={userList}
      />
      <ListUser
        users={userList}
      />      
    </div>
  )
}

export default App;
