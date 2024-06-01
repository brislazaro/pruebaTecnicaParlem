import "./App.css";
import Footer from "./components/Footer/Footer";
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
      <Footer />
    </div>
  );
}

export default App;
