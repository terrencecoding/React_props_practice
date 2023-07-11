import React from "react";
import Card from "./Card";
import contacts from "../contacts";

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      {contacts.map(({ id, name, imgURL, phone, email }) => (
        <Card key={id} name={name} img={imgURL} phone={phone} email={email} />
      ))}
    </div>
  );
}

export default App;
