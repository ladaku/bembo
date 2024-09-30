import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { productList } from "./redux/productAction";
import Banner from "./components/banner";

function App() {
  const dispatch = useDispatch();
  const lop = useSelector((state) => state);
  const [count, setCount] = useState(0);
  console.log(lop, "kopi");
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + Reactor</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <button onClick={() => dispatch(productList())}>get list</button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
        <Banner />
      </div>
      {/* <video width="600" controls preload="auto">
        <source
          src="https://chudai-api.ouwi.fun/v1/api/chudai/z-pXWjFuIKt5HuzHKOOac.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video> */}
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
