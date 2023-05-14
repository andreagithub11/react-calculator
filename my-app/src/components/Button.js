import {useContext} from "react";
import {ResultContext} from "../context/ResultContext";

const Button = (props) => {

  const {value} = props;

  const {
    result,
    setResult
  } = useContext(ResultContext);


   const onClick = () => {
    setResult(result + value);
  };
   const onClearClick = () => {
    setResult('');
  };
   const onEqualsClick = () => {
    try{
      const evaluation = eval(result);
      setResult(evaluation.toString());
    }catch(e){
      setResult('Error');
    }
  };

  const handleNumClick = () =>{
    switch (value){
      case "C": onClearClick(); break;
      case "=": onEqualsClick(); break;
      default: onClick(); break;
    }
  };

  return (
    <div className="row">
      <button className="btn btn-outline-dark btn-lg m-1" onClick={handleNumClick}>{value}</button>
    </div>
  );

}

export default Button;
