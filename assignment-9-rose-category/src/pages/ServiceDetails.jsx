import { useParams } from "react-router-dom";
import allServices from "../data/allServices";
import toast from "react-hot-toast";
import { useEffect, useState } from "react";
import { auth } from "../firebase/firebase.config";
import { Navigate, useLocation } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";

const ServiceDetails = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  // console.log(location);

  const service = allServices.find((item) => item.serviceId === parseInt(id));

  useEffect(() => {
    window.scrollTo(0, 0);
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    // Listens for Firebase auth changes and updates user state
    return () => unsubscribe();
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

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[60vh]">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  if (!user) {
    return <Navigate state={location?.pathname} to="/login" />;
  }

  return (
    <section className="max-w-6xl mx-auto px-4 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
        {/* Image */}
        <div>
          <img
            src={service.image}
            alt={service.serviceName}
            data-aos="fade-right"
            className="w-full h-[420px] object-cover rounded-xl shadow-md"
          />
        </div>

        {/* Details */}
        <div data-aos="fade-up">
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
            data-aos="fade-left"
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
