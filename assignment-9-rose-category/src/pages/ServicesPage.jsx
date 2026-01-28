import { useEffect } from "react";
import serviceCategories from "../data/serviceCategories.json";
import { Link } from "react-router-dom";

const ServicesPage = () => {
  useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  return (
    <section className="my-16 px-4">
      <h2 className="text-3xl font-bold text-center mb-20">Our All Services</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-11/12 mx-auto">
        {serviceCategories.map((service) => (
          <div
            key={service.serviceId}
            data-aos="fade-up"
            data-aos-delay="100"
            className="bg-white rounded-xl shadow-md hover:shadow-lg transition overflow-hidden"
          >
            <img
              src={service.image}
              alt={service.serviceName}
              className="w-full h-80 object-cover cursor-pointer"
            />

            <div className="p-5">
              <h3 className="text-lg font-semibold mt-2">
                {service.serviceName}
              </h3>

              <div className="flex justify-between items-center mt-3">
                <p className="font-bold">$ {service.price}</p>
                <p className="font-semibold">⭐ {service.rating}</p>
              </div>

              <Link
                to={`/service-details/${service.serviceId}`}
                className="block text-center mt-4 bg-black text-white py-2 rounded hover:bg-pink-950 transition"
              >
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesPage;
