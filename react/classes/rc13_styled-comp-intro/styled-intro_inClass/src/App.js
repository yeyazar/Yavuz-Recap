import { Button } from "./components/Buton.styled";
import { FS13Button } from "./components/Buton.styled";

const App = () => {
  return (
    <>
      <h1>Styled Components</h1>
      <Button>Send</Button>
      <Button primary>Send</Button>
      <FS13Button react>Work</FS13Button>
      <FS13Button >More!</FS13Button>
    </>
  );
};

export default App;
