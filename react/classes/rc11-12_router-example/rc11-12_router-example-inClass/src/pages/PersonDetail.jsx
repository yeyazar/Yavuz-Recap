import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const PersonDetail = () => {
  const navigate = useNavigate();
  //   const { state: person } = useLocation();
  const { id } = useParams();
  console.log(id);

  const [person, setPerson] = useState({});

  const getPerson = () => {
    fetch(`https://reqres.in/api/users/${id}`)
      .then((res) => res.json())
      .then((data) => setPerson(data.data))
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    getPerson();
  }, []);

  return (
    <div className="container text-center">
      <h3>
        {person?.first_name} {person?.last_name}
      </h3>
      <img className="rounded" src={person.avatar} alt="" />
      <p>{person?.email}</p>
      <button onClick={() => navigate("/")} className="btn btn-success me-3">
        Go Home
      </button>
      <button onClick={() => navigate(-1)} className="btn btn-danger">
        Go Back
      </button>
    </div>
  );
};

export default PersonDetail;
