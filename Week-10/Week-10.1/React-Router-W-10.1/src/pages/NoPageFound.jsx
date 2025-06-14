import { useNavigate } from "react-router-dom";

export const NoPageFound = () => {
  const navigate = useNavigate();

  const redirect = () => {
    navigate("/");
  };

  return (
    <>
      <h1>"Error! This Page Doesen't Exist"</h1>
      <button onClick={redirect}>Back To Home </button>
    </>
  );
};
