import { useState } from "react";
import Header from "../../components/header/Header";
import { HomeContainer, HomeImage, MainContainer } from "./Home.style";
import homeImage from "../../assets/books.jpg";
import axios from "axios";

const Home = () => {
  // const printType = ["all", "books", "magazines"];
  const [query, setQuery] = useState("");
  const [selectType, setSelectType] = useState("all");
  const [myData, setMyData] = useState(null);
  const APP_KEY = process.env.REACT_APP_apiKey;

  const url = `https://www.googleapis.com/books/v1/volumes?q=${query}&printType=${selectType}&key=${APP_KEY}`;

  const getData = async () => {

    try {
      const {data} = await axios.get(url)
      console.log(data);
    } catch (error) {
      console.log(error);
    }

  }

  return (
    <HomeContainer>
      <Header setQuery={setQuery} setSelectType={setSelectType} getData={getData}/>

      <HomeImage>
        <img src={homeImage} alt="home-image" />
      </HomeImage>

      <MainContainer></MainContainer>
    </HomeContainer>
  );
};

export default Home;
