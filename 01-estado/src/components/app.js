import React from "react";

class App extends React.Component {
	state = {
		products: [
			{
				name: "Nintendo Switch v1.1",
				price: 6500,
				description: "Consola de Nintendo portable.",
				picture:
					"https://m.media-amazon.com/images/I/61-PblYntsL._AC_SL1500_.jpg",
			},
			{
				name: "Nintendo Switch v1.1",
				price: 6500,
				description: "Consola de Nintendo portable.",
				picture:
					"https://m.media-amazon.com/images/I/61-PblYntsL._AC_SL1500_.jpg",
			},
			{
				name: "Xbox Series X",
				price: 18000,
				description: "Consola de última generación de Microsoft.",
				picture:
					"https://compass-ssl.xbox.com/assets/b9/0a/b90ad58f-9950-44a7-87fa-1ee8f0b6a90e.jpg?n=XSX_Page-Hero-0_768x792.jpg",
				discount: 0.1,
			},
			{
				name: "Xbox Series X",
				price: 18000,
				description: "Consola de última generación de Microsoft.",
				picture:
					"https://compass-ssl.xbox.com/assets/b9/0a/b90ad58f-9950-44a7-87fa-1ee8f0b6a90e.jpg?n=XSX_Page-Hero-0_768x792.jpg",
				discount: 0.1,
			},
			{
				name: "Playstation 5",
				price: 20000,
				description: "Consola de última generación de Sony.",
				picture:
					"https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/ps5-playstaton-5-2-1600255876.jpg",
			},
			{
				name: "Playstation 5",
				price: 20000,
				description: "Consola de última generación de Sony.",
				picture:
					"https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/ps5-playstaton-5-2-1600255876.jpg",
			},
		],
	};

	render() {
		return (
			<div className="container">
				{this.state.products.map((product) => (
					<figure className="snip1171">
						<img src={product.picture} />
						<div className="price">${product.price}</div>
						<figcaption>
							<h3>{product.name}</h3>
							<p>{product.description}</p>
							<a>Agregar al carrito</a>
						</figcaption>
					</figure>
				))}
			</div>
		);
	}
}
</body>

export default App;

