import { useState } from "react";

const { VITE_APP_TITLE } = import.meta.env;

function App() {
  return (
    <div className="flex h-screen">
      <h1 className="m-auto">{VITE_APP_TITLE}</h1>
    </div>
  );
}

export default App;
