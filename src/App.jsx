import Header from "./components/header";
import Basics from "./components/basics";
import Usestate from "./components/usestateNprops";
import MoreUsestate from "./components/moreUsestate";
import Composable from "./components/composable";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {

  return (
    <>
      <Header/>
      <Basics/>
      <Usestate/>
      <MoreUsestate/>
      <Composable/>
    </>
  )
}

export default App
