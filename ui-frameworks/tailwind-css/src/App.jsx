import Core from "./Core";
import Dark from "./Dark";
import ResponsiveDesign from "./ResponsiveDesign";

function App() {
  return (
    <div className="mx-auto max-w-md flex flex-col gap-5">
      <div className="flex flex-col gap-5 border-2 border-amber-300 rounded-xl p-2 mt-[100px]">
        <a href="#hero" className="text-3xl font-bold text-red-500">
          Hello There 🚀
        </a>
        <a href="#hero" className="text-3xl font-bold text-custom-pink hoverable">
          Tailwind CSS V4
        </a>
        <button className="btn-primary">Save changes</button>
      </div>

      <hr style={{ color: "lightgray" }} />

      <Core />

      <hr style={{ color: "lightgray" }} />

      <ResponsiveDesign />

      <hr style={{ color: "lightgray" }} />

      <Dark />
    </div>
  );
}

export default App;
