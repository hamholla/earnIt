import React from "react";
import ActivityList from "./ActivityList";

function App() {
  return (
    <div>
      <div className="container mx-auto flex flex-row flex-wrap justify-center">
        {/* <h1 className="mb-6 text-3xl">
          Select an activity to see how many beers youve earned!
        </h1> */}
        <ActivityList />
      </div>
    </div>
  );
}

export default App;
