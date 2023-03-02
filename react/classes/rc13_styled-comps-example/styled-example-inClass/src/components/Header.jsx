import Button from "./styled/Button";
import Nav from "./styled/Nav";

const Header = () => {
  return (
    <div>
      <Nav>
        <img src="./images/logo.png" width={"300px"} alt="logo" />
        
          <Button color="#AF3A53">Apply Courses</Button>
          <Button bg="#AF3A53">Talk to Adviser</Button>
        
      </Nav>
    </div>
  );
};

export default Header;
