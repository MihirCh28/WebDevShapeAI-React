import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";

function App() {
  return (
    <div>
      <Header />
      <div className="main_div">
        <Note />
        <Note />
        <Note />
      </div>
      <Footer />
    </div>
  );
}

export default App;
