import React from 'react';

class Button extends React.Component{
/*  constructor(props) {
    super(props);   //Invocando el constructor de la clase padre (React.Component)
    console.log(props);
  }
*/
  render() {
    const estilos = {
      backgroundColor: this.props.color || "white",
    };
    return <button style={estilos}>{this.props.text || "Un boton"} </button>;
  }
}

export default Button;
