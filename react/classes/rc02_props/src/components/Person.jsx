import Msg from "./Msg";

const Person = ({ name, tel, img }) => {
  /* console.log(props); */

  /* Destructuring */
  /* const {name, tel, img} =props */
  return (
    <div>
      {/* <h2>Hallo, Ich heiße {name}</h2> */}
      <Msg name={name}/>
      <img style={{ width: "300px" }} src={img} alt="" />
      <p>tel is {tel}</p>
    </div>
  );
};

export default Person;
