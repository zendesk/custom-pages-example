import React from "react";
import "./App.css";
import Modal from "./components/Modal";
import Testimonials from "./components/Testimonials";

function App() {
  return (
    <div className="App">
      <header>
        <h1>insert logo and nav bar here</h1>
      </header>
      <div>
        <h3>Sign-up for VIP Support</h3>
      </div>
      {/* insert Modal functionality where needed */}
      <div>
        <Testimonials />
      </div>
      <footer>{/* insert social icons, etc. */}</footer>
    </div>
  );
}

export default App;
