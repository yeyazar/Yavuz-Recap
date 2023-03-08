import { useState } from "react";
import Header from "../../components/header/Header";
import { HomeContainer, HomeImage, MainContainer } from "./Home.style";
import homeImage from "../../assets/books.jpg";

const Home = () => {
  // const printType = ["all", "books", "magazines"];
  const [query, setQuery] = useState("");
  const [selectType, setSelectType] = useState("all");
  const [myData, setMyData] = useState(null);

  return (
    <HomeContainer>
      <Header
        setQuery={setQuery}
        setSelectType={setSelectType}
      />

      <HomeImage>
        <img src={homeImage} alt="home-image" />
      </HomeImage>

      <MainContainer></MainContainer>
    </HomeContainer>
  );
};

export default Home;
