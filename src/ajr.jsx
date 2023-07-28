import { useRef, useState } from "react";
import { data } from "./data";
import Alert from "./alert";

function Ajr() {
  const [countData, setCountData] = useState(0);
  const [show, setShow] = useState(data["أذكار الصباح"]);
  const [end, setend] = useState(false);
  const [count, setCount] = useState(+show[countData].count);

  const myRef = useRef(null);

  const executeScroll = () => myRef.current.scrollIntoView();

  const reducer = (action) => {
    switch (action) {
      case "next":
        if (countData !== show.length - 1) {
          setCountData((countData) => countData + 1);
          setCount(() => +show[countData].count);
        } else {
          setend(true);
          setTimeout(() => {
            setend(false);
          }, 2000);
        }
        break;
      case "prev":
        if (countData !== 0) {
          setCountData((countData) => countData - 1);
          setCount(() => +show[countData].count);
        }
        break;
      case "decr":
        if (count - 1 === 0) {
          setCount(0);
          reducer("next");
        } else if (count !== 0) {
          console.log("kaka");
          setCount(count - 1);
        }
        break;
      default:
        "";
    }
  };

  return (
    <>
      {end ? (
        <>
          <Alert />
        </>
      ) : (
        ""
      )}

      <nav className="navbar grid grid-flow-col gap-5 grid-rows-4 lg:grid-rows-none ">
        {Object.keys(data).map((e, index) => {
          return (
            <button
              key={index}
              className="btn navbar-center"
              onClick={() => {
                setShow(data[e]);
                setCountData(0);
                executeScroll();
              }}
            >
              {e}
            </button>
          );
        })}
      </nav>
      <div
        className="h-screen w-screen justify-center flex items-center"
        ref={myRef}
        id="card-ajr"
      >
        <div className="card   w-screen h-96 bg-base-100 shadow-xl ">
          <div className="card-body">
            <h2 className="text-center">
              {countData + 1}\{show.length}
            </h2>
            <h2 className="card-title">{show[countData]?.content || ""}</h2>
            <p className="text-amber-500">
              {show[countData]?.description || ""}
            </p>
            <p className="rtl:">{count} مرات/مرة </p>
            <div className="card-actions ">
              <button
                className="btn btn-primary "
                onClick={() => reducer("prev")}
              >
                السابق
              </button>
              <button
                className="btn btn-primary"
                onClick={() => reducer("decr")}
              >
                قُرِئْتُ
              </button>
              <button
                className="btn btn-primary justify-end "
                onClick={() => reducer("next")}
              >
                التالي
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Ajr;
