import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Card from "./components/Card";
import Tour from "./components/Tour";
import tour1 from "./images/tour-1.jpeg";
import tour2 from "./images/tour-2.jpeg";
import tour3 from "./images/tour-3.jpeg";
import tour4 from "./images/tour-4.jpeg";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <div className="service-container">
        <h2 className="first dup1">
          OUR<span className="second dup2">SERVICES</span>
        </h2>
        <div className="card-container">
          <Card
            icon={<i class="fa-solid fa-piggy-bank"></i>}
            title="SAVING MONEY"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores!"
          />
          <Card
            icon={<i class="fa-solid fa-tag"></i>}
            title="ENDLESS HIKING"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores!"
          />
          <Card
            icon={<i class="fa-brands fa-apple"></i>}
            title="AMAZING COMFORT"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores!"
          />
        </div>
      </div>
      <div className="feature-container">
        <h2 className="first dup1">
          FEATURED<span className="second dup2">TOURS</span>
        </h2>
        <div className="tour-container">
          <Tour
            image={tour1}
            date="August 14th,2019"
            title="Tibet Adventure"
            country="China"
            price="6 days from $2100"
          />
          <Tour
            image={tour2}
            date="October 10th,2019"
            title="Best of Java"
            country="Indoneshia"
            price="12 days from $5100"
          />
          <Tour
            image={tour3}
            date="September 21th,2019"
            title="Explore Hong Kong"
            country="Hong Kong"
            price="26 days from $1000"
          />
          <Tour
            image={tour4}
            date="December 2nd,2019"
            title="Kenya Highlights"
            country="Kenya"
            price="11 days from $5400"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
