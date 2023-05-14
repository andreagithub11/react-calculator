import {useContext} from "react";
import {ResultContext} from "../context/ResultContext";

const Screen = () => {

  const { result } = useContext(ResultContext);

  return (
    <div className="screen bg-light text-center p-3 mb-3"> {result} </div>
  );

}

export default Screen;
