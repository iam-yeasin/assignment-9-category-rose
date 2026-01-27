const WinterTips = () => {
  return (
    <section className="my-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-2">
            ❄️ Winter Care Tips for Pets ❄️
          </h2>
          <p className="text-gray-600 font-semibold">
            Simple tips to keep your furry friends warm, healthy, and happy
            during the cold season.
          </p>
        </div>

        {/* cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 cursor-pointer">
          <div className="bg-[#fffaee] rounded-xl shadow p-6 text-center">
            <h3 className="font-semibold text-lg mb-2">Keep Them Warm</h3>
            <p className="text-gray-600 text-sm">
              Use winter clothing and limit outdoor exposure during extreme
              cold.
            </p>
          </div>

          <div className="bg-[#fffaee] rounded-xl shadow p-6 text-center">
            <h3 className="font-semibold text-lg mb-2">Protect Their Paws</h3>
            <p className="text-gray-600 text-sm">
              Apply paw balm regularly to prevent dryness and cracking.
            </p>
          </div>

          <div className="bg-[#fffaee] rounded-xl shadow p-6 text-center">
            <h3 className="font-semibold text-lg mb-2">Nutritious Diet</h3>
            <p className="text-gray-600 text-sm">
              Provide a healthy diet to maintain energy and body warmth.
            </p>
          </div>

          <div className="bg-[#fffaee] rounded-xl shadow p-6 text-center">
            <h3 className="font-semibold text-lg mb-2">Regular Grooming</h3>
            <p className="text-gray-600 text-sm">
              Keep fur clean and dry to avoid skin problems in winter.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WinterTips;
