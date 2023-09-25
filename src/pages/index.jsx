import { useState } from "react";

const rightNumber = Math.floor(Math.random() * 10 + 1);
export default function Home() {
  const [number, setNumber] = useState(0);
  return (
    <>
      <a
        className="underline"
        href="https://github.com/storialp/guessing-numbers/blob/main/src/pages/index.jsx"
      >
        See the code here
      </a>
      <div>
        <label
          htmlFor="number"
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          Number
        </label>
        <div className="mt-2">
          <input
            type="number"
            name="number"
            id="number"
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            placeholder="Type a number between 1 and 10"
            onChange={(e) => {
              setNumber(e.target.value);
              console.log(number);
            }}
          />
        </div>
        <p className="mt-2 text-sm text-gray-500" id="email-description">
          Type any number between 1 and 10 and we will tell you if it is right
        </p>
      </div>
      {number == rightNumber ? (
        <h1 className="text-green-500">YOU GUESSED IT, CONGRATS!</h1>
      ) : (
        <p>try again</p>
      )}
    </>
  );
}
