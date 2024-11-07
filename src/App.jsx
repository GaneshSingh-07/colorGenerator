import { useState } from "react";
import { Form } from "./form";
import { GenColor } from "./genColor";
import Values from "values.js";
import { ToastContainer, toast } from "react-toastify";

function App() {
  const [colour, setColour] = useState(new Values("#71fef5").all(10));
  // console.log(colorList);

  const addColour = (value) => {
    try {
      const newColorList = new Values(value).all(10);
      setColour(newColorList);
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <main>
      <h1 className="text-center font-semibold text-xl p-8 space-x-2">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500">
          Generate
        </span>
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-indigo-500 to-emerald-500">
          Color
        </span>
      </h1>
      <Form addColour={addColour} />
      <GenColor colorList={colour} />
      <ToastContainer
        pauseOnFocusLoss={false}
        autoClose={1000}
        position="top-center"
      />
    </main>
  );
}

export default App;
