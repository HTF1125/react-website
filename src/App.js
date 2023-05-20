import logo from "./logo.svg";
import "./App.css";

import { BsArrowLeftShort } from "react-icons/bs";
import { AiFillEnvironment } from "react-icons/ai";
import { useState } from "react";

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="flex">
      <div
        className={`bg-dark-purple h-screen p-5 pt-8 ${sidebarOpen ? "w-72" : "w-20"
          } duration-300 text-white relative`}
      >
        <BsArrowLeftShort
          className={`bg-white 
          text-dark-purple 
          text-3xl rounded-full 
          absolute -right-3 top-9 
          border border-dark-purple cursor-pointer ${!sidebarOpen && "rotate-180"
            } duration-300`}
          onClick={() => setSidebarOpen(!sidebarOpen)}
        />

        <div className="inline-flex">
          <AiFillEnvironment
            className={`bg-amber-300 text-4xl mr-2 rounded cursor-pointer block float-left duration-500 ${sidebarOpen && "rotate-[360deg]"
              }`}
          />
          <h1
            className={`text-white origin-left font-medium text-2xl duration-300 ${!sidebarOpen && "scale-0"
              }`}
          >
            Tailwind
          </h1>
        </div>
      </div>
      <div className="bg-light-white p-7 text-2xl font-bold">
        <h1 className="">HomePage</h1>
      </div>
    </div>
  );
}

export default App;
