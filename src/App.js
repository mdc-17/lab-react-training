import React, { Component } from 'react';
import IdCard from "./idcard/IdCard";
import Greetings from "./greetings/Greetings";
import Random from "./random/Random";
import BoxColor from './boxcolor/BoxColor';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>ID Cards</h1>
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

        <h1>Random</h1>
        <Random min={1} max={100} />

        <h1>BoxColor</h1>
        <BoxColor r={255} g={0} b={0} />

      </div>
    );
  }
}

export default App;
