import logo from "./logo.svg";
import "./App.css";
import HomePage from "./pages/home/HomePage";
import { useCallback, useState } from "react";

function App() {
  const changePage = useCallback((NewPage) => {
    setPage(NewPage);
  }, []);

  const [Page, setPage] = useState(<HomePage changePage={changePage} />);

  return Page;
}

export default App;
