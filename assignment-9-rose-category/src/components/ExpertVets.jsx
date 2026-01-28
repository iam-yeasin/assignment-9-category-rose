const ExpertVets = () => {
  return (
    <section className="my-16">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold mb-2">🩺 Our Expert Vets 🩺</h2>
        <p className="text-gray-600 font-semibold">
          Experienced professionals caring for your pets.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 w-11/12 mx-auto cursor-pointer">
        {/* Vet 1 */}
        <div
          data-aos="zoom-in-up"
          data-aos-delay="100"
          className="bg-white rounded-xl shadow-md hover:shadow-lg transition overflow-hidden"
        >
          <img
            src="https://i.postimg.cc/8CYW8fyf/Dr_Emily_Carter.png"
            alt="Dr Emily Carter"
            className="w-full h-80 object-cover"
          />
          <div className="p-5">
            <h3 className="text-lg font-semibold">Dr. Emily Carter</h3>
            <p className="text-sm text-gray-500 mb-2">Animal Surgeon</p>
            <p className="text-gray-600 text-sm">
              Specialist in advanced surgical and emergency care.
            </p>
          </div>
        </div>

        {/* Vet 2 */}
        <div
          data-aos="zoom-in-up"
          data-aos-delay="100"
          className="bg-white rounded-xl shadow-md hover:shadow-lg transition overflow-hidden"
        >
          <img
            src="https://i.postimg.cc/rpHW6Rhp/Dr_Sarah_Johnson.png"
            alt="Dr Sarah Johnson"
            className="w-full h-80 object-cover"
          />
          <div className="p-5">
            <h3 className="text-lg font-semibold">Dr. Sarah Johnson</h3>
            <p className="text-sm text-gray-500 mb-2">Senior Veterinarian</p>
            <p className="text-gray-600 text-sm">
              Providing compassionate healthcare for pets of all ages.
            </p>
          </div>
        </div>

        {/* Vet 3 */}
        <div
          data-aos="zoom-in-up"
          data-aos-delay="100"
          className="bg-white rounded-xl shadow-md hover:shadow-lg transition overflow-hidden"
        >
          <img
            src="https://i.postimg.cc/yNG9q3f9/Dr_Mark_Lee.png"
            alt="Dr Mark Lee"
            className="w-full h-80 object-cover"
          />
          <div className="p-5">
            <h3 className="text-lg font-semibold">Dr. Mark Lee</h3>
            <p className="text-sm text-gray-500 mb-2">Pet Nutritionist</p>
            <p className="text-gray-600 text-sm">
              Expert in balanced nutrition plans for healthy pets.
            </p>
          </div>
        </div>

        {/* Vet 4 */}
        <div
          data-aos="zoom-in-up"
          data-aos-delay="100"
          className="bg-white rounded-xl shadow-md hover:shadow-lg transition overflow-hidden"
        >
          <img
            src="https://i.postimg.cc/3wqpM0LG/Dr_James_Wilson.png"
            alt="Dr James Wilson"
            className="w-full h-80 object-cover"
          />
          <div className="p-5">
            <h3 className="text-lg font-semibold">Dr. James Wilson</h3>
            <p className="text-sm text-gray-500 mb-2">Pet Behaviorist</p>
            <p className="text-gray-600 text-sm">
              Helping pets overcome anxiety and behavioral challenges.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExpertVets;
