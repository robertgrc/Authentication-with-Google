import "./App.css";
import Header from "./components/Header";
// import Login from "./components/Login";
import Main from "./components/Main";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="app">
      {/* <Login /> */}
      <Header />
      <div className="app__central">
        <Sidebar />
        <Main />
      </div>
    </div>
  );
}

export default App;
