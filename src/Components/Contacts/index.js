import React, { useEffect, useState } from 'react'
import List from './List'
import Form from './Form'
import Style from './style.css'


function Contacts() {
    const [contacts,setContacts]=useState([
        {
            id: 1,
            name: "Ahmet",
            phone: "111 111 11 11"
        },
        {
            id: 2,
            name: "Mehmet",
            phone: "222 222 22 22"
        },
        {
            id: 3,
            name: "Ayşe",
            phone: "333 333 33 33"
        }
    ])
    useEffect(() => {
        console.log(contacts);
        
    },[contacts])
  return (
    <div id="Container">
      <h1>Telefon Rehberi</h1>
      <List contacts={contacts} />
      <Form setContacts={setContacts} contacts={contacts}/>
    </div>
  )
}

export default Contacts
