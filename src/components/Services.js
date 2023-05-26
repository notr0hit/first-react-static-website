import React from "react";
import ServiceCard from "./ServiceCard";

function Services() {
  return (
    <section>
      <h2>Services</h2>
      <div className="services-container">
        <ServiceCard
          icon="fa fa-wallet"
          serviceTitle="Endless Hiking"
          serviceDescription="lorem ipsum"
        />
        <ServiceCard
          icon="fa fa-wallet"
          serviceTitle="Another Service"
          serviceDescription="Lorem ipsum dolor sit amet"
        />
        <ServiceCard
          icon="fa fa-wallet"
          serviceTitle="Yet Another Service"
          serviceDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
        />
      </div>
    </section>
  );
}

export default Services;
