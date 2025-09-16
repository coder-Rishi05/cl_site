import { useState } from "react";
import { ChevronDown, ChevronRight } from "lucide-react";

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const problems = [
    {
      question: "A Pipeline that you can’t Control?",
      answer: "The 8 step framework solves it permanently",
      highlight: true,
    },
    {
      question: "Dependent on one key superstar employee?",
      answer: "",
    },
    {
      question: "Want to replicate yourself using AI?",
      answer: "",
    },
    {
      question:
        "Want a minimum effective sales system for a recession in your business?",
      answer: "",
    },
    {
      question:
        "Worry that Lead Pipeline isn’t engaged or isn’t follow-up upon?",
      answer: "",
    },
  ];

  const toggleIndex = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full h-screen ">
      <div className="max-w-2xl mx-auto py-8 px-4 sm:px-6 md:px-8">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center text-purple-800 mb-2">
          Do you have these problems?
        </h2>
        <p className="text-center text-base sm:text-lg text-purple-600 mb-6">
          Our Framework Addresses these:
        </p>

        <div className="space-y-4">
          {problems.map((item, index) => (
            <div key={index} className="border-t border-gray-300">
              <button
                onClick={() => toggleIndex(index)}
                className={`w-full flex justify-between items-center py-3 text-left text-base sm:text-lg font-semibold transition-colors 
                ${item.highlight ? "text-orange-500" : "text-purple-800"}`}
              >
                {item.question}
                {openIndex === index ? (
                  <ChevronDown className="w-5 h-5 text-gray-500 flex-shrink-0" />
                ) : (
                  <ChevronRight className="w-5 h-5 text-gray-500 flex-shrink-0" />
                )}
              </button>
              {openIndex === index && item.answer && (
                <p className="text-purple-600 mb-3 ml-2 text-sm sm:text-base">
                  {item.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faq;
