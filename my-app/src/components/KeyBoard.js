import Button from "./Button";

const Keyboard = () => {

  const buttonKeys = [
    [7, 8, 9, "/"],
    [4, 5, 6, "*"],
    [1, 2, 3, "-"],
    ["+", 0, "."]
  ];

  const clearButton = () => {
    return(
      <Button
        value={"C"}
      />
    );
  };

  const equalsButton = () => {
    return(
      <Button
        value={"="}
      />
    );
  };

  return (
    <div className="Keyboard">
      <div className="row">
        {buttonKeys.flat().map((value, idx) => (
          <div className="col-3" key={idx}>
            <Button
              value={value}
            />
          </div>
        ))}
        <div className="col-3">
          {clearButton()}
        </div>
        <div className="col-3">
          {equalsButton()}
        </div>
      </div>
    </div>
  );
};

export default Keyboard;
