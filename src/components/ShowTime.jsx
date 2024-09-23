import React, { useState } from "react";
function ShowTime() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);
  const date = new Date();
  date.setDate(date.getDate() + count);

  return (
    <div className="flex flex-col items-center w-[400px] border border-gray-500 m-auto ">
      <div className="flex gap-2 mt-4">
        <input
          value={step}
          type="range"
          min="1"
          max="10"
          onChange={(e) => setStep(+e.currentTarget.value)}
        />
        <span>steps :{step} </span>
      </div>
      <div className="flex gap-4 mt-4">
        <button
          onClick={() => {
            setCount((prev) => prev - step);
          }}
          className="px-4 py-2 bg-green-500"
        >
          -
        </button>
        <input
          value={count}
          onChange={(e) => setCount(+e.target.value)}
          className="border border-gray-600 p-1"
          type="number"
        />
        <button
          onClick={() => {
            setCount((prev) => prev + step);
          }}
          className="px-4 py-2 bg-green-500"
        >
          +
        </button>
      </div>
      <span>
        {count === 0
          ? `Today is `
          : count > 0
          ? `${count}days from Today is `
          : `${count} days ago was `}
        {date.toDateString()}
      </span>
    </div>
  );
}

export default ShowTime;
