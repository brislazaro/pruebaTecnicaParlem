import "./App.css";
import Layout from "./components/Layout/Layout";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="">
      <header className="flex items-center h-14 bg-slate-400 px-6">
        header
      </header>
      <Layout>
        <Outlet />
      </Layout>
      <footer className="flex items-center h-14 bg-slate-400 px-6"></footer>
    </div>
  );
}

export default App;
