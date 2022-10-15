import "./styles/global.css";

export function App() {
  return (
    <>
      <h1 className="font-bold text-lg text-teal-600">Hello React</h1>
      <button
        type="button"
        className="bg-violet-400 font-semibold
         hover:bg-violet-600 transition-all
         px-4 py-3 rounded-sm text-white m-3"
      >
        Enviar
      </button>
    </>
  );
}
