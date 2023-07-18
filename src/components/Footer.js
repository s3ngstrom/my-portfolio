import React from "react";

export default function Footer() {
  return (
    <div className="text-center py-4">
      <h4 className="text-lg font-bold">Built With</h4>
      <div className="flex items-center justify-center mt-2">
        <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noopener noreferrer">
          <img
            className="object-cover object-center rounded"
            alt="JavaScript"
            src="./javascript.png"
            style={{
              maxWidth: "50px",
              display: "block",
            }}
          />
        </a>
        <a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">
          <img
            className="object-cover object-center rounded"
            alt="React"
            src="./react.svg"
            style={{
              maxWidth: "50px",
              display: "block",
            }}
          />
        </a>
        <a href="https://tailwindcss.com/" target="_blank" rel="noopener noreferrer">
          <img
            className="object-cover object-center rounded"
            alt="Tailwind CSS"
            src="./tailwind.svg"
            style={{
              maxWidth: "50px",
              display: "block",
            }}
          />
        </a>
      </div>
    </div>
  );
}
