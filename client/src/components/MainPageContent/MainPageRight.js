import React, { useEffect } from "react";
import CodeMirror from "@uiw/react-codemirror";

import "codemirror/keymap/sublime.js";
import "codemirror/theme/dracula.css";

const MainPageRight = () => {
  const errors = [
    "this",
    "is",
    "Array",
    "of",
    "random",
    "words",
    "asdfasd",
    "fgfgteg",
    "qwerqwer"
  ];

  var editors = document.getElementsByClassName("CodeMirror");
  useEffect(() => {
    for (let i = 1; i < editors.length; i++) {
      editors[i].remove();
    }
  }, [editors]);

  return (
    <div>
      <div className="flex justify-between p-1.5 border-2 rounded-lg">
        <div className="p-1">filler</div>
        <div></div>
        <div className="border-2 border-purple-500 rounded-lg p-1">timer</div>
      </div>
      <div className="border-2 border-purple-400 rounded-lg m-1.5 p-1.5 flex justify-center h-80 items-center text-left">
        <CodeMirror
          value="console.log('hello world!');"
          height="300px"
          options={{
            theme: "dracula",
            keyMap: "sublime",
            mode: "jsx"
          }}
        />
      </div>
      <div className="border-2 border-yellow-400 m-1.5 p-1.5 flex rounded-lg flex-row-reverse">
        <button className="bg-green-400 hover:bg-green-500 rounded-lg p-1 m-1 px-2">
          Submit
        </button>
        <button className="bg-gray-300 hover:bg-gray-400 rounded-lg px-2 m-1 w-10">
          Run
        </button>
      </div>
      <div className="border-2 border-pink-400 rounded-lg p-1.5 m-1.5 h-44 overflow-scroll overflow-x-hidden">
        {errors.map((error) => (
          <div className="border-2 rounded-lg p-1.5 m-1.5">{error}</div>
        ))}
      </div>
    </div>
  );
};

export default MainPageRight;
