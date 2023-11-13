import { useRouteError } from "react-router-dom";

const Error = () => {
  let err = useRouteError();
  console.log(err);
  return (
    <div className="error-page">
      <h1>Oopsss!!!!</h1>
      <h2>Something went wrong</h2>
    </div>
  );
};

export default Error;
