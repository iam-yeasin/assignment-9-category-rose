const WhyChooseUs = () => {
  return (
    <section className="my-20 px-4">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-2">💖 Why Choose Us? 🦴</h2>
        <p className="text-gray-600 font-semibold">
          We provide trusted, compassionate, and reliable care for your pets.
        </p>
      </div>

      <div className="bg-[#fffaee] py-16">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 cursor-pointer">
          {/* Card 1 */}
          <div
            data-aos="fade-right"
            data-aos-delay="100"
            className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition"
          >
            <div className="text-4xl mb-4">🐾</div>
            <h3 className="text-lg font-semibold mb-2">
              Experienced Professionals
            </h3>
            <p className="text-gray-600 text-sm">
              Our vets have years of hands-on experience in pet healthcare.
            </p>
          </div>

          {/* Card 2 */}
          <div
            data-aos="fade-right"
            data-aos-delay="100"
            className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition"
          >
            <div className="text-4xl mb-4">⏰</div>
            <h3 className="text-lg font-semibold mb-2">24/7 Support</h3>
            <p className="text-gray-600 text-sm">
              We are available anytime to support you and your pets.
            </p>
          </div>

          {/* Card 3 */}
          <div
            data-aos="fade-left"
            data-aos-delay="100"
            className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition"
          >
            <div className="text-4xl mb-4">💊</div>
            <h3 className="text-lg font-semibold mb-2">Modern Equipment</h3>
            <p className="text-gray-600 text-sm">
              Advanced tools and facilities for accurate diagnosis and care.
            </p>
          </div>

          {/* Card 4 */}
          <div
            data-aos="fade-left"
            data-aos-delay="100"
            className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition"
          >
            <div className="text-4xl mb-4">🤝</div>
            <h3 className="text-lg font-semibold mb-2">
              Trusted by Pet Owners
            </h3>
            <p className="text-gray-600 text-sm">
              Hundreds of happy pet owners trust us with their pets.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
