import React from "react";

const testimonials = [
  {
    name: "Rima Akter",
    photo: "https://i.pravatar.cc/150?img=47",
    feedback: "PlantLab helped me save my succulents! The reminders and care tips are so helpful.",
  },
  {
    name: "Mahin Hasan",
    photo: "https://i.pravatar.cc/150?img=15",
    feedback: "As a beginner, the beginner-friendly blogs were exactly what I needed to get started.",
  },
  {
    name: "Adiba Nusrat",
    photo: "https://i.pravatar.cc/150?img=38",
    feedback: "I love the dashboard overview – it makes plant care feel like a game!",
  },
];

const Testimonials = () => {
  return (
    <section className=" dark:bg-gray-800 py-12">
      <h2 className="text-3xl md:text-4xl text-center text-green-700 font-bold italic pb-10">
        What Our Users Say
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {testimonials.map((t, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg flex flex-col items-center text-center"
          >
            <img
              src={t.photo}
              alt={t.name}
              className="w-20 h-20 rounded-full object-cover mb-4 border-4 border-green-200"
            />
            <p className="italic text-gray-600 dark:text-gray-300 mb-3">"{t.feedback}"</p>
            <h4 className="font-semibold text-green-800 dark:text-green-200">{t.name}</h4>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
