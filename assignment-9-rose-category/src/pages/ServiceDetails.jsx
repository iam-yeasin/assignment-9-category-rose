import { useParams } from "react-router-dom";
import allServices from "../data/allServices";
import toast from "react-hot-toast";
import { useEffect } from "react";

const ServiceDetails = () => {
  const { id } = useParams();

  const service = allServices.find((item) => item.serviceId === parseInt(id));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!service) {
    return (
      <div className="flex items-center justify-center py-10 rounded-xl">
        <img src="/service.png" alt="" className="rounded-xl h-96" />
      </div>
    );
  }

  const handleBooking = (e) => {
    e.preventDefault();
    toast.success("Service booked successfully 🐾");
    e.target.reset();
  };

  return (
    <section className="max-w-6xl mx-auto px-4 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
        {/* Image */}
        <div>
          <img
            src={service.image}
            alt={service.serviceName}
            className="w-full h-[420px] object-cover rounded-xl shadow-md"
          />
        </div>

        {/* Details */}
        <div>
          <span className="inline-block bg-blue-100 text-blue-700 px-4 py-1 rounded-full text-sm mb-4">
            {service.category}
          </span>

          <h1 className="text-3xl font-bold mb-3">{service.serviceName}</h1>

          <p className="text-gray-600 mb-6">{service.description}</p>

          <div className="space-y-2 mb-6">
            <p className="text-lg">
              💰 <span className="font-semibold">Price:</span> ${service.price}
            </p>
            <p className="text-lg">
              ⭐ <span className="font-semibold">Rating:</span> {service.rating}
            </p>
            <p className="text-lg">
              📦 <span className="font-semibold">Slots Available:</span>{" "}
              {service.slotsAvailable}
            </p>
          </div>

          <div className="mb-8">
            <h3 className="text-lg font-semibold mb-1">Service Provider</h3>
            <p>{service.providerName}</p>
            <p className="text-sm text-gray-500">{service.providerEmail}</p>
          </div>

          {/* Booking Form */}
          <form
            onSubmit={handleBooking}
            className="border rounded-xl p-6 shadow-sm mt-20"
          >
            <h3 className="text-xl font-semibold mb-4">Book This Service</h3>

            <input
              type="text"
              placeholder="Your Name"
              required
              className="w-full border p-3 rounded mb-4"
            />

            <input
              type="email"
              placeholder="Your Email"
              required
              className="w-full border p-3 rounded mb-4"
            />

            <button
              type="submit"
              className="w-full bg-black text-white py-3 rounded hover:bg-pink-950 transition cursor-pointer"
            >
              Confirm Booking
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ServiceDetails;
