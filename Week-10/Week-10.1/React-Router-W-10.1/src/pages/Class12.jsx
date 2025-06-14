import { useNavigate } from "react-router-dom";

export const Class12 = () => {
  const navigate = useNavigate();

  const redirect = () => {
    navigate("/");
  };

  return (
    <>
      <h1>Neet programs for class 12</h1>
      <button onClick={redirect}>Back To Home </button>
    </>
  );
};
