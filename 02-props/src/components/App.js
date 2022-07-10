import React from "react";
import Button from "./button";

class App extends React.Component{
  render() {
    return (
      <>
        <h1>Hello World</h1>
        <Button color="red" text="Primer Boton"/>
        <Button color="blue" text="Segundo Boton"/>
        <Button color="orange" text="Tercer Boton" />
        <Button color="green" text="Cuarto Boton" />
        <Button/>
      </>

    );
   }
}

export default App;
