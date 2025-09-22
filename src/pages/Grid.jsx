const Grid = () => {
  const cards = [
    {
      title: "1. Message-Market Fit for Leads",
      subtitle: "Timeline: upto 12 weeks for U.S",
      bg: "bg-indigo-800 rounded-4xl  ",
    },
    {
      title: "2. AI Lead Magnets for Replies",
      subtitle: "Why: Best prospects don't reply to cold meeting request",
      bg: "bg-green-400",
    },
    {
      title: "3. Pre-Meeting Nurture",
      subtitle: "Why: Un-impressed prospects question your authority & value",
      bg: "bg-yellow-300 rounded-4x",
    },
    {
      title: "4. Keynote - Showcase Your Value",
      subtitle:
        "Proprietary Frameworks for Service Firms & Aha Moment Demos for SaaS",
      bg: "bg-orange-500 rounded-4x ",
    },
    {
      title: "5. The Perfect Pitch Landing Page",
      subtitle:
        "Why: Drop retargeting pixel when prospect is on the call via Offer Page",
      bg: "bg-pink-300 rounded-4x ",
    },
    {
      title: "6. Closing Specific AI Follow Ups.",
      subtitle:
        "It takes upto 15 follow-ups from lead to meeting & 30 until closure.",
      bg: "bg-pink-600 rounded-4x ",
    },
    {
      title: "7. Retargeting CRM Ads",
      subtitle:
        "Why: Follow up on deals without looking desperate, synced with CRM",
      bg: "bg-blue-500 rounded-4x ",
    },
    {
      title: "8.  24 Months Lead Nurture.",
      subtitle: "Why: Be top-of-mind when lead is ready-to-buy",
      bg: "bg-green-400 rounded-4x ",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto  py-6 px-2">
      {/* Responsive Grid */}
      <div className="grid grid-cols-1  sm:grid-cols-2  lg:grid-cols-2 gap-4 lg:gap-10">
        {cards.map((card, i) => (
          <div
            key={i}
            className={`${card.bg} rounded-2xl md:px-4 pt-4 pb-10  px-10 md:gap-2 gap-8 text-white p-6 shadow-lg flex flex-col justify-between`}
          >
            <h3 className="myMd:text-4xl text-3xl  px-2  font-bold pt-2 text-white ">
              {card.title}
            </h3>
            <p className="text-[1.5rem] md:text-3xl md:px-2 pr-4 md:py-4 py-2   myMD:leading-8  leading-10  text-white">
              {card.subtitle}
            </p>
            <div className="mt-4 bg-white  w-full rounded-xl">
              <img
                className="object-cover  object-center "
                src="./Images/message.png"
                alt=""
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Grid;
