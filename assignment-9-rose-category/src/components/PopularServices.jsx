import React from "react";
import servicesData from "../data/services.json";
import { Link } from "react-router-dom";

import AOS from "aos";
import { useEffect } from "react";

const PopularServices = () => {
  const popularServices = servicesData.slice(0, 6);

  useEffect(() => {
    AOS.refresh();
  }, []);

  return (
    <section className="my-16 px-4">
      <h2 className="text-3xl font-bold text-center mb-20">
        ❄️ Popular Winter Care Services ❄️
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-11/12 mx-auto">
        {popularServices.map((service) => (
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
              {/* <span className="inline-block text-sm bg-blue-100 text-blue-700 px-3 py-1 rounded-full mb-2">
                {service.category}
              </span> */}

              <h3 className="text-lg font-semibold mt-2">
                {service.serviceName}
              </h3>

              {/* <p className="text-sm text-gray-600 mt-1">
                By {service.providerName}
              </p> */}

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

export default PopularServices;
