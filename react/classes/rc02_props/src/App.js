import Person from "./components/Person";

function App() {
  return (
    <div>
      <Person
        name="Vega"
        img="https://cdn.pixabay.com/photo/2022/03/23/18/56/beach-7087722_640.jpg"
        tel="+49 12 123 12 12"
      />
      <Person
        name="Navy"
        img="https://cdn.pixabay.com/photo/2022/11/03/06/20/hand-7566739_640.jpg"
        tel="+47 12 123 12 12"
      />
      <Person
        name="Xagev"
        img="https://cdn.pixabay.com/photo/2023/02/07/13/39/monkey-7774171_640.jpg"
        tel="+44 12 123 12 12"
      />
    </div>
  );
}

export default App;
