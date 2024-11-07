import { ToastContainer, toast } from "react-toastify";

export const SingleColor = ({ index, color }) => {
  const { hex, weight } = color;
  const copyClip = async () => {
    if (navigator.clipboard) {
      try {
        await navigator.clipboard.writeText(`#${hex}`);
        toast.success("coppied to clipboard");
      } catch (error) {
        toast.error("something went wrong");
      }
    } else {
      toast.error("Clipboard Not Available");
    }
  };
  return (
    <div
      style={{ backgroundColor: `#${hex}` }}
      className={`basis-1/3 h-32 md:h-48 ${
        index > 12 ? "text-white" : "text-black"
      }`}
    >
      <div
        className={`h-full w-full flex flex-col items-center justify-center`}
        onClick={copyClip}
      >
        <p>{`${weight}%`}</p>
        <p>{`#${hex}`}</p>
      </div>
      {/* <ToastContainer pauseOnFocusLoss={false} autoClose={1000} /> */}
    </div>
  );
};
