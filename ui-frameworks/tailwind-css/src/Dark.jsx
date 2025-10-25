import { useState } from "react";

// https://tailwindcss.com/docs/dark-mode
function Dark() {
  const [isMidnight, setIsMidnight] = useState(false);

  const toggleTheme = () => {
    setIsMidnight((prev) => !prev);
  };

  return (
    <div className="dark bg-white dark:bg-gray-800 rounded-lg px-6 py-8 ring shadow-xl ring-gray-900/5">
      <div>
        <span className="inline-flex items-center justify-center rounded-md bg-indigo-500 p-2 shadow-lg hoverable">
          {/* hover:cursor-pointer hover:bg-white hover:text-black */}
          Dark
        </span>
      </div>
      <h3 className="text-gray-900 dark:text-white mt-5 text-base font-medium tracking-tight ">
        Writes upside-down
      </h3>
      <p className="text-gray-500 dark:text-gray-400 mt-2 text-sm ">
        The Zero Gravity Pen can be used to write in any orientation, including
        upside-down. It even works in outer space.
      </p>
      <br />
      <div data-theme={isMidnight ? "midnight" : "light"}>
        <button
          onClick={toggleTheme}
          className="border p-2 rounded mb-4 cursor-pointer"
        >
          Toggle Theme
        </button>

        <h1 className="text-3xl font-bold theme-midnight:hidden text-black">
          Hello Theme
        </h1>
        <p className="theme-midnight:bg-black theme-midnight:text-white p-4">
          This background turns black in midnight mode!
        </p>
      </div>
    </div>
  );
}

export default Dark;
