import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import EmployeeForm from "./components/EmployeeForm";
import "./App.css";

function Home() {
  return <EmployeeForm heading="Add Employee" submitLabel="Add Employee" />;
}

function About() {
  return (
    <main className="info-page">
      <h1>About</h1>
      <p>
        This INT304 React application demonstrates reusable components, routing,
        controlled form inputs, state updates, and form submission handling.
      </p>
    </main>
  );
}

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="site-header">
          <div className="site-title">Employee Management System</div>
          <nav aria-label="Primary navigation">
            <Link to="/">Employee Form</Link>
            <Link to="/about">About</Link>
          </nav>
        </header>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
