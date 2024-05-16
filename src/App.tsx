import "tailwindcss/tailwind.css";
import Header from "./components/Header";
import { Routes, Route, Navigate } from "react-router";
import Planet from "./components/Planet";
function App() {
  return (
    <div className="bg-cover bg-center min-h-screen bg-[url('./images/background-stars.svg')] bg-[#070724]">
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to={"/Earth"} />}></Route>
        <Route path="/:planet" element={<Planet />}></Route>
      </Routes>
      <div></div>
    </div>
  );
}

export default App;
