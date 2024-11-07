import React from "react";
import { useState } from "react";

export const Form = ({ addColour }) => {
  const [val, setVal] = useState("#71fef5");
  const handleSubmit = (e) => {
    e.preventDefault();
    addColour(val);
  };
  return (
    <form className="text-center space-x-4 mt-8" onSubmit={handleSubmit}>
      <div className="flex items-center justify-center space-x-4">
        <input
          type="color"
          name="color"
          id="color"
          value={val}
          className="h-10 w-16 bg-transparent"
          onChange={(e) => setVal(e.target.value)}
        />
        {/* //component from uiverse */}
        <div className="flex items-center justify-center">
          <div className="rounded-lg bg-gray-200">
            <div className="flex">
              <input
                type="text"
                className="w-full max-w-[160px] bg-white pl-2 text-base font-semibold outline-0 border-2 rounded-md"
                id="hexcode"
                value={val}
                onChange={(e) => setVal(e.target.value)}
              />
              <input
                type="submit"
                defaultValue="Generate"
                className="bg-blue-500 p-2 rounded-tr-lg rounded-br-lg text-white font-semibold hover:bg-blue-800 transition-colors"
              />
            </div>
          </div>
        </div>
        {/* //end component */}
      </div>
    </form>
  );
};
