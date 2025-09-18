import { useState } from "react";
import RatingCard from "./RatingCard";
import ThanksCard from "./ThanksCard";

function App() {
  const [submitRating, setSubmitRating] = useState(null);

  return (
    <>
      {submitRating ? (
        <ThanksCard rating={submitRating} />
      ) : (
        <RatingCard onSubmit={setSubmitRating} />
      )}
    </>
  );
}

export default App;
