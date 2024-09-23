import React, { useState } from "react";
function Tips() {
  const [billamount, setbillamount] = useState({
    bill: "0",
    tip1: "0",
    tip2: "0",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setbillamount({ ...billamount, [name]: value });
  };
  const average = (+billamount.tip1 + +billamount.tip2) / 2;
  const tips = (+billamount.bill * average) / 100;
  const total = (+billamount.bill + tips).toFixed(2);
  const clear = () => {
    setTotal("");
    setbillamount({
      bill: "",
      tip1: "0",
      tip2: "0",
    });
  };
  return (
    <div className="bg-slate-900 w-screen h-screen text-white mt-8 mb-4">
      <div className="flex justify-center">
        <form className="mt-4 flex flex-col gap-6">
          <div className="flex gap-4">
            <label>How much was The bill ?</label>
            <input
              value={billamount.bill}
              name="bill"
              onChange={handleChange}
              className="rounded-md text-black"
              type="number"
            />
          </div>
          <div className="flex gap-4">
            <label>How d you like the service?</label>
            <select
              name="tip1"
              value={billamount.tip1}
              onChange={handleChange}
              className=" text-black"
            >
              <option value="0">Dissatified(0%)</option>
              <option value="5">It Was Okay(5%)</option>
              <option value="10">It was Good (10%)</option>
              <option value="20">Amazing(20%)</option>
            </select>
          </div>
          <div className="flex gap-4">
            <label>How did your 0.02000friend like the service?</label>
            <select
              name="tip2"
              value={billamount.tip2}
              onChange={handleChange}
              className="text-black"
            >
              <option value="0">Dissatified(0%)</option>
              <option value="5">It Was Okay(5%)</option>
              <option value="10">It was Good (10%)</option>
              <option value="20">Amazing(20%)</option>
            </select>
          </div>

          <button
            onClick={clear}
            className="px-2 py-1 bg-green-700 w-[100px] rounded-md m-auto"
          >
            Reset
          </button>
          <h3>
            {+billamount.bill
              ? `you pay ${total}  billamount ${billamount.bill} +  ${tips} `
              : ""}
          </h3>
        </form>
      </div>
    </div>
  );
}

export default Tips;
