import React from "react";
import Navbar from "./Navbar";
import Jumbotron from "./Jumbotron";
import Card from "./Card";
import Footer from "./Footer";


//include images into your bundle
const Home = () => {
	return (
		<div>
				<Navbar />
				<Jumbotron />
				<section className="container mt-4">
					<div className="row text-center">

						<div className="col-sm-12 col-md-6 col-lg-3">
							<Card
								img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRf4DkxQG7A2KS8o8ZWhQ2HKJKi89eHoXORNg&"
								title='Navidad'
								text="Cuál de estas fechas te gusta más?"
							/>
						</div>

						<div className="col-sm-12 col-md-6 col-lg-3">
							<Card
								img="https://images.squarespace-cdn.com/content/v1/55b7e44de4b0af4724ac5dd6/ad3872eb-0dbb-4abf-b855-df0c6114ba02/sylvester-g406905444_1920.jpg"
								title='Año Nuevo'
								text="Cuál de estas fechas te gusta más?"
							/>
						</div>

						<div className="col-sm-12 col-md-6 col-lg-3">
							<Card
								img="https://www.confidencecambio.com.br/wp-content/uploads/2023/04/pascoa.jpg"
								title='Pascua'
								text="Cuál de estas fechas te gusta más?"
							/>
						</div>
						<div className="col-sm-12 col-md-6 col-lg-3">
							<Card
								img="https://amorasemirtilos.pt/wp-content/uploads/2021/06/festa_aniversario_crianca.jpg"
								title='Cumpleaños'
								text="Cuál de estas fechas te gusta más?"
							/>
						</div>
					</div>
				</section>
				<Footer />
		</div>
	);
};

export default Home;