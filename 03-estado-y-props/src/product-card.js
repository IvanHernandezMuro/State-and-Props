import React  from 'react';

class ProductCard extends React.Component{
  render() {
    const styles = {
      backgroundColor: "black",
      color: "white"
    };
    if (this.props.discount > 0){
      styles.backgroundColor= "yellow";
      styles.color= "red";
    }
    return (
      <figure className="snip1171">
        <img src={this.props.picture} alt="sample71" />
        <div className="price">{this.props.price}</div>
        <figcaption>
          <h3>{this.props.name}</h3>
          <p>{this.props.description}</p>
          <button style={styles}>Lo quiero</button>
        </figcaption>
      </figure>
    );
  }
}


export default ProductCard;
