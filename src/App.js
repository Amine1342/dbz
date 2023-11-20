import Vegeta from "./components/Vegeta";
import Sangoku from "./components/Sangoku";
import Friezer from "./components/Friezer";
import Broly from "./components/Broly";
import ErrorBoundary from "./components/ErrorBoundary";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container text-center">
        <h1 className="mt-3 mb-5 text-success">
          Cliquez sur les bons personnages
        </h1>

        <div className="row">
          <ErrorBoundary>
            <Vegeta />
          </ErrorBoundary>

          <ErrorBoundary>
            <Friezer />
          </ErrorBoundary>

          <ErrorBoundary>
            <Sangoku />
          </ErrorBoundary>

          <ErrorBoundary>
            <Broly />
          </ErrorBoundary>
        </div>
      </div>
    </div>
  );
}

export default App;
