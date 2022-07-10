import React from "react";
import ProductCard from "./product-card";

//estado de los productos//
class App extends React.Component {
  state = {
    products: [
      {
        price: "$12.50 MXN",
        name: "Paleta Payaso",
        description: "Deliciosa paleta de malbabisco con cubierta de chocolate",
        picture: "https://ghrocks.files.wordpress.com/2010/02/paleta-payaso.jpg",
        discount: "0.1",
      },
      {
        price: "$4,700 MXN",
        name: "Nintendo de Mano",
        description: "Consola Nintendo Switch Lite con capacidad de 32 GB",
        picture:
          "https://http2.mlstatic.com/D_NQ_NP_760512-MLA41851508080_052020-O.jpg",
      },
      {
        price: "$18,000 MXN",
        name: "Xbox Series X",
        description: "Consola Xbox Series X con capacidad de 1 TB",
        picture:
          "https://static.13.cl/7/sites/default/files/esports/articulos/field-image/portadaxbox.jpg",
      },
      {
        price: "$7,000 MXN",
        name: "Xbox Series S",
        description: "Consola Xbox Series S con capacidad de 512 GB",
        picture:
          "https://www.somosxbox.com/wp-content/uploads/2020/09/xbox-series-x-xbox-series-s-que-xbox-compro-1-somosxbox.jpg",
      },
    ],
  };

  render() {
    return (
      <div className="container">
        {this.state.products.map((product) =>(
          <ProductCard
            name={product.name}
            price={product.price}
            description={product.description}
            picture={product.picture}
            discount={product.discount}
          />
        ))}
      </div>
    );
  }
}

export default App;
