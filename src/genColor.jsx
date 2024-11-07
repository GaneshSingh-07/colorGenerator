import React from "react";
import { SingleColor } from "./singleColor";

export const GenColor = ({ colorList }) => {
  return (
    <div className="flex flex-wrap mx-2 mt-8">
      {colorList.map((singleList, index) => {
        return <SingleColor key={index} color={singleList} index={index} />;
      })}
    </div>
  );
};
