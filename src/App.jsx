import { useState } from "react";
import ContactList from "./components/ContactList.jsx";

import "./App.css";
import SelectedContact from "./components/SelectedContact.jsx";

export default function App() {
  const [selectedContactId, setSelectedContactId] = useState(null)


     return (
          <div>
          {selectedContactId ? (
          <SelectedContact selectedContactId={selectedContactId} setSelectedContactId={setSelectedContactId}/>
          ) : (
               <ContactList setSelectedContactId={setSelectedContactId}/>)}
               
          </div>
     );
}
