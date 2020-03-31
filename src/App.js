import React, { Component } from 'react';
import IdCard from "./idcard/IdCard";
import Greetings from "./greetings/Greetings";

class App extends Component {
  render() {
    return (
      <div className="App">
        <IdCard
        firstName="John"
        lastName="Doe"
        gender="male"
        height={178}
        birth="1992-07-14"
        picture="https://randomuser.me/api/portraits/men/44.jpg"
      />

      <IdCard
        firstName="Obrien"
        lastName="Delores "
        gender="female"
        height={172}
        birth="1988-05-11"
        picture="https://randomuser.me/api/portraits/women/44.jpg"
      />

        <h1>Greetings</h1>
        <Greetings lang="de">Ludwig</Greetings>
        <Greetings lang="fr">François</Greetings>
      </div>
    );
  }
}

export default App;
