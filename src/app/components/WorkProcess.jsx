export default function WorkProcess() {
  const steps = [
    {
      number: "01",
      title: "Initial Consultation",
      description: "Suspendisse viverra id magna vel rhoncus. Integer ac.",
    },
    {
      number: "02",
      title: "Assessment Analysis",
      description: "Suspendisse viverra id magna vel rhoncus. Integer ac.",
    },
    {
      number: "03",
      title: "Planning",
      description: "Suspendisse viverra id magna vel rhoncus. Integer ac.",
    },
    {
      number: "04",
      title: "Implementation",
      description: "Suspendisse viverra id magna vel rhoncus. Integer ac.",
    },
  ];

  return (
    <section className="relative w-full bg-white text-black py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 grid grid-cols-2 gap-4">
            {steps.map((step, index) => (
              <div
                key={index}
                className="bg-[#FFF5F2] text-white rounded-lg p-6 relative"
              >
                <div className="bg-white rounded-full w-14 h-14 flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-[#8A0206]">
                    {step.number}
                  </span>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-[#8A0206]">
                  {step.title}
                </h3>
                <p className="text-gray-700">{step.description}</p>
              </div>
            ))}
          </div>

          <div className="md:w-1/2 mt-8 md:mt-0 md:pl-8 flex flex-col justify-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              How Do We Work, to Help You Fast
            </h2>
            <p className="text-gray-700 mb-8">
              Nulla semper condimentum tellus in ultricies. Nunc tempor ipsum
              nec fermentum consequat. Cras et felis ultricies.
            </p>
            <button className="bg-[#8A0206] hover:bg-[#9e3329] text-white rounded-full py-3 px-6 w-fit transition-all">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
