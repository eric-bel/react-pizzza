import { Header } from "./components";
import Home from "./components/Pages/Home";

{
  /* <Routes>
  <Route path="/" element={<App />} />
</Routes>; */
}

function App() {
  return (
    <>
      <div className="App">
        <div className="wrapper">
          <Header />
          <div className="content">
            <Home />
          </div>
        </div>
      </div>
      ;
    </>
  );
}

export default App;
