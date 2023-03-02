import { Button } from "./components/Buton.styled";
import { FS13Button } from "./components/Buton.styled";
import HeaderText from "./components/HeaderText";

const App = () => {
  return (
    <>
      <HeaderText color="green">Styled Components</HeaderText>
      <Button>Send</Button>
      <Button primary>Send</Button>
      <FS13Button react>Work</FS13Button>
      <FS13Button >More!</FS13Button>
    </>
  );
};

export default App;
