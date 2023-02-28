import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const PersonDetail = () => {
  const navigate = useNavigate();
  const { state: person } = useLocation();
  console.log(person);

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
