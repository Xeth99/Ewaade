import React, { useState } from "react";

function InputPage() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const handleCheckName = () => {
    if (name.trim().toLowerCase() === "ewaade") {
      setMessage("I love you, Ewaade ❤️");
    } else if (name.trim().toLowerCase() === "wura") {
      setMessage("Na your name be that? 😏");
    } else {
      setMessage("You are not mine. Wetin you dey look for 😏.");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen p-4">
      <div className="bg-white p-8 shadow-md rounded-lg">
        <h2 className="text-xl font-semibold mb-4">Enter your name:</h2>
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full px-4 py-2 border border-transactionCard rounded-md focus:outline-none focus:border-primary"
        />
        <br className="mt-4" />
        <div className="flex flex-col md:flex-row gap-4 mt-4">
          <button
            onClick={handleCheckName}
            className="mt-6 py-2 px-6 font-PoppinsMedium rounded-lg text-primary hover:before:bg-primary border-primary relative overflow-hidden border bg-white transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-primary before:transition-all before:duration-500 hover:text-white hover:before:left-0 hover:before:w-full md:w-40 lg:w-40 w-full"
          >
            <span className="relative z-10">Submit</span>
          </button>
        </div>
        {message && (
          <p
            className={`mt-4 ${
              name === "ewaade" ? "text-primary" : "text-error"
            }`}
          >
            {message}
          </p>
        )}
      </div>
    </div>
  );
}

export default InputPage;
