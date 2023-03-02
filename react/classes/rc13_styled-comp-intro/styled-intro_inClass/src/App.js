import { Button } from "./components/Buton.styled";
import { FS13Button } from "./components/Buton.styled";
import HeaderText from "./components/HeaderText";
import Sarmal from "./components/Sarmal";

const App = () => {
  return (
    <>
      <Sarmal bg="#dede">
        <HeaderText giveColor="red">Styled Components</HeaderText>
        <HeaderText giveColor="turquoise" bgColor="pink">
          Styled Components
        </HeaderText>
        <Button>Send</Button>
        <Button primary>Send</Button>
        <FS13Button react>Work</FS13Button>
        <FS13Button>More!</FS13Button>
      </Sarmal>
    </>
  );
};

export default App;
