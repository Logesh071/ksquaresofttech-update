
import services from "../data/services.json";
import ServiceCard from "./ServiceCard";

const Services = () => {
  return (
    <div className="services-grid home-services-grid">
      {services.map((service) => (
        <ServiceCard
          key={service.id}
          service={service}
        />
      ))}
    </div>
  );
};

export default Services;
