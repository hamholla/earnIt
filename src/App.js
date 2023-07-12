import React from "react";
import ActivityList from "./components/ActivityList";

function App() {
  return (
    <div className="container mx-auto ">
      <div className="flex mb-6 flex-column justify-center flex-wrap align-center">
        <h1 className="my-6 text-5xl text-red w-full text-center">ChamPain</h1>
        <p className="">How many have you earned?</p>
      </div>
      <div className="flex flex-row flex-wrap justify-center">
        <ActivityList />
      </div>
    </div>
  );
}

export default App;
