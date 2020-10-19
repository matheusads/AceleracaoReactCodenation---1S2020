import React, {useState, useEffect} from 'react';

import './App.scss';
import Topbar from './components/Topbar';
import Filters from './components/Filters';
import Contacts from './components/Contacts';


function App () {
  const [contacts, setContacts] = useState([]);
  const [showContacts, setShowContacts] = useState([]);
  
  const filterList = event => {
    let updatedList = contacts.filter(function(item){
      return item.name.toLowerCase().includes(event.target.value.toLowerCase());
    });
    setShowContacts(updatedList)
  }

  useEffect(() => {
    fetch('https://5e82ac6c78337f00160ae496.mockapi.io/api/v1/contacts')
    .then((response) => response.json())
    .then((data) => {
      setContacts(data)
      setShowContacts(data)
    });
  }, []);

    return (
      <React.Fragment>
        <Topbar/>
        <Filters onChange={filterList} />
        <Contacts data={showContacts}/>
      </React.Fragment>
    )
  
}

export default App;
