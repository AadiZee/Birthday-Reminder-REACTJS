import React, { useState, useEffect } from "react";
import data from "./data";
import List from "./List";

function App() {
  const [people, setPeople] = useState(data);
  const [but, setBut] = useState();

  useEffect(() => {
    if (people.length !== 0) {
      setBut(<button onClick={() => setPeople([])}>Clear All</button>);
    } else if (people.length === 0) {
      setBut(<button onClick={() => setPeople(data)}>ReshowList</button>);
    }
  }, [people]);

  return (
    <main>
      <section className="container">
        <h3>{people.length} birthdays today</h3>
        <List people={people} />

        {but}
      </section>
    </main>
  );
}

export default App;
