import ThankYou from "src/assets/illustration-thank-you.svg";

function ThanksCard({ rating }) {
  return (
    <section className="min-h-screen overflow-hidden bg-black flex items-center justify-center bg-black">
      <div className="md:max-w-[412px] max-w-[327px] rounded-xl py-8 px-6 md:py-10 md:px-8 bg-[#131518] grid gap-6 place-items-center">
        <img src={ThankYou} alt="" />
        <div className="px-4 rounded-full bg-[#262E38] text-[#FC7614]">
          You selected {rating} out of 5
        </div>
        <div className="text-center space-y-4">
          <h2 className="text-white text-preset-2 ">Thank You!</h2>
          <p className="text-preset-5-regular text-[#969FAD]">
            We appreciate you taking the time to give a rating. If you ever need
            more support, don’t hesitate to get in touch!
          </p>
        </div>
      </div>
    </section>
  );
}

export default ThanksCard;
