import { useEffect, useState } from "react";
import "./App.css";
import Ajr from "./ajr";

function App() {
  const [sterter, setSterter] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setSterter(false);
    }, 2000);
  });
  return (
    <>
      {sterter ? (
        <h1 className="text-sky-500 h-screen w-full flex items-center justify-center place-content-center text-6xl">
          ألأذكار
        </h1>
      ) : (
        <Ajr />
      )}
    </>
  );
}

export default App;
