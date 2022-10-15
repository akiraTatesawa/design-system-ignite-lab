import "./styles/global.css";

export function App() {
  return (
    <>
      <h1 className="font-bold text-lg text-teal-600">Hello React</h1>
      <button
        type="button"
        className="bg-cyan-500 font-semibold
         hover:bg-cyan-300 transition-all
         px-4 py-3 rounded-md text-gray-800 m-3"
      >
        Enviar
      </button>
    </>
  );
}
