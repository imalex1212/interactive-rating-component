import { useState } from "react";

function RatingCard({ onSubmit }) {
  const [rating, setRating] = useState(null);

  function handleSubmit() {
    if (rating !== null) {
      onSubmit(rating);
    } else {
      alert("Please selected a rating");
    }
  }

  return (
    <section className="min-h-screen overflow-hidden bg-black flex items-center justify-center ">
      <div className="px-6 py-8 rounded-lg bg-[#131518] max-w-[327px] md:max-w-[412px]">
        <div className="space-y-8">
          {/* Start Container */}
          <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#262E38] flex items-center justify-center">
            <img
              src="src/assets/icon-star.svg"
              className="w-4 h-4 object-cover"
            />
          </div>

          {/* Feedback Text Container */}
          <div className="space-y-4">
            <h1 className="text-preset-2 text-preset-1 text-white">
              How did we do?
            </h1>
            <p className="text-preset-5-regular text-preset-4-regular text-gray-500">
              Please let us know how we did with your support request. All
              feedback is appreciated to help us improve our offering!
            </p>
            <div className="flex justify-between text-gray-500 text-preset-5-bold text-preset-3">
              {["1", "2", "3", "4", "5"].map((point, index) => {
                return (
                  <button
                    key={index}
                    onClick={() => setRating(point)}
                    className={`cursor-pointer w-[42px] h-[42px] md:w-[51px] md:h-[51px] rounded-full flex items-center justify-center bg-[#262E38] hover:bg-gray-200 ${
                      rating === point ? "bg-orange-500" : ""
                    }`}
                  >
                    {point}
                  </button>
                );
              })}
            </div>

            {/* Submit button */}
            <button
              onClick={handleSubmit}
              className="cursor-pointer w-full text-gray-950 px-[104px] py-[16px] bg-orange-500 rounded-full flex items-center justify-center text-preset-5-bold text-preset-5-semibold hover:bg-gray-200"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default RatingCard;
