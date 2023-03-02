import Button from "./styled/Button";
import Nav from "./styled/Nav";

const Header = () => {
  return (
    <div>
      <Nav>
        <div>
          <img src="./images/logo.png" width={"300px"} alt="logo" />
        </div>

        <div>
          <Button color="#AF3A53">Apply Courses</Button>
          <Button bg="#AF3A53">Talk to Adviser</Button>
        </div>
      </Nav>

      <div>

        
      </div>
    </div>
  );
};

export default Header;
