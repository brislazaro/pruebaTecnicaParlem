import "./App.css";
import Header from "./components/Header/Header";
import Layout from "./components/Layout/Layout";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="">
      <Header />
      <Layout>
        <Outlet />
      </Layout>
      <footer className="flex items-center h-14 bg-slate-400 px-6"></footer>
    </div>
  );
}

export default App;
