import React, { useState } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

const RadioComponent = () => {
  const [isB2C, setB2C] = useState(false);
  const [text, setText] = useState("");
  const onSubmit = e => {
    e.preventDefault();
    const data = {
      isB2C,
      text
    };
    console.log(data);
  };
  const handleRadio = e => {
    if (e.target.value === "individual") {
      setB2C(true);
    } else {
      setB2C(false);
    }
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-12">
          <h2>who is your customer?</h2>
          <hr />
          <form onSubmit={onSubmit}>
            <div className="radio">
              <label>
                <input
                  type="radio"
                  value="individual"
                  name="rad"
                  onChange={e => handleRadio(e)}
                />
                Individual
              </label>
            </div>
            <div>
              <label>
                <input
                  type="radio"
                  value="company"
                  name="rad"
                  onChange={e => handleRadio(e)}
                />
                Company
              </label>
            </div>
            <input
              type="text"
              value={text}
              onChange={e => setText(e.target.value)}
            ></input>
            <br />
            <br />
            <button className="btn btn-primary" type="submit">
              Save
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default RadioComponent;
