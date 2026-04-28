import React, { useRef, useState } from "react";

function Symptoms() {
  const [showLeft, setshowLeft] = useState(true);
  const [hideRight, sethideRight] = useState(false);
  const scrollRef = useRef();

  const scrollLeft = () => {
    const el = scrollRef.current;

    el.scrollBy({ left: -200, behavior: "smooth" });

    setTimeout(() => {
      if (el.scrollLeft <= 0) {
        setshowLeft(true);
      }
      sethideRight(false);
    }, 300);
  };

  const scrollRight = () => {
    const el = scrollRef.current;

    el.scrollBy({ left: 200, behavior: "smooth" });

    setTimeout(() => {
      setshowLeft(false);

      if (el.scrollLeft + el.clientWidth >= el.scrollWidth) {
        sethideRight(true);
      }
    }, 300);
  };

  const symptoms = [
    { name: "Fever", icon: "fa-solid fa-temperature-high" },
    { name: "Cold", icon: "fa-solid fa-wind" },
    { name: "Headache", icon: "fa-solid fa-head-side-virus" },
    { name: "Cough", icon: "fa-solid fa-lungs" },
    { name: "Sore Throat", icon: "fa-solid fa-microphone-lines" },

    { name: "Back Pain", icon: "fa-solid fa-bone" },
    { name: "Neck Pain", icon: "fa-solid fa-person" },
    { name: "Joint Pain", icon: "fa-solid fa-bone" },
    { name: "Muscle Pain", icon: "fa-solid fa-dumbbell" },

    { name: "Skin Rash", icon: "fa-solid fa-allergies" },
    { name: "Itching", icon: "fa-solid fa-hand-dots" },
    { name: "Acne", icon: "fa-solid fa-face-grin-beam-sweat" },

    { name: "Eye Pain", icon: "fa-solid fa-eye" },
    { name: "Blurred Vision", icon: "fa-solid fa-glasses" },
    { name: "Tooth Pain", icon: "fa-solid fa-tooth" },
    { name: "Ear Pain", icon: "fa-solid fa-ear-listen" },

    { name: "Stomach Pain", icon: "fa-solid fa-user-injured" },
    { name: "Nausea", icon: "fa-solid fa-face-dizzy" },
    { name: "Vomiting", icon: "fa-solid fa-face-dizzy" },
    { name: "Diarrhea", icon: "fa-solid fa-toilet" },
    { name: "Constipation", icon: "fa-solid fa-poop" },

    { name: "Chest Pain", icon: "fa-solid fa-heart-pulse" },
    { name: "Breathing Issue", icon: "fa-solid fa-lungs-virus" },
    { name: "Palpitations", icon: "fa-solid fa-heart" },

    { name: "Fatigue", icon: "fa-solid fa-bed" },
    { name: "Dizziness", icon: "fa-solid fa-rotate" },
    { name: "Weakness", icon: "fa-solid fa-person-walking" },

    { name: "Anxiety", icon: "fa-solid fa-brain" },
    { name: "Stress", icon: "fa-solid fa-brain" },
    { name: "Insomnia", icon: "fa-solid fa-moon" },

    { name: "Fever with Chills", icon: "fa-solid fa-snowflake" },
    { name: "Swelling", icon: "fa-solid fa-hand" },
  ];

  return (
    <div className="relative mt-10">
      {/* Left Button */}
      <button
        hidden={showLeft}
        onClick={scrollLeft}
        className="left absolute left-0 top-1/2 -translate-y-1/2 bg-gray-500 shadow-md rounded-full p-2 z-10 hover:bg-gray-400 pointer"
      >
        <i className="fa-solid fa-chevron-left"></i>
      </button>

      {/* Scroll Container */}
      <div ref={scrollRef} className="flex gap-4 overflow-hidden pr-12 pl-10">
        {symptoms.map((sym, index) => (
          <div
            key={index}
            className="flex items-center gap-2 border border-gray-600 px-3 py-2 rounded-xl cursor-pointer transition flex-shrink-0"
          >
            <i className={`${sym.icon} text-green-500`}></i>
            <span className="text-xs">{sym.name}</span>
          </div>
        ))}
      </div>

      {/* Right Button */}
      <button
        hidden={hideRight}
        onClick={scrollRight}
        className="absolute right-0 top-1/2 -translate-y-1/2 bg-gray-500 shadow-md rounded-full p-2 z-10 hover:bg-gray-400 pointer"
      >
        <i className="fa-solid fa-chevron-right"></i>
      </button>
    </div>
  );
}

export default Symptoms;
