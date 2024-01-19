import "./App.css";
import MyPage from "./components/MyPage";
import MyPageContext from "./components/MyPageContext";
// import HeaderContext from "../components/HeaderContext";
// import MainContext from "../components/MainContext";
// import FooterContext from "../components/FooterContext";

function App() {
  return (
    <>
      <h1>React Context API</h1>
      <MyPageContext />
      <hr />
      <MyPage />

      
    </>
  );
}

export default App;
