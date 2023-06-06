import React from "react";
import sample from "../assets/sample.avif";
import sample2 from "../assets/sample2.avif";
import sample3 from "../assets/sample3.avif";

const Value = () => {
  return (
    <div className="value-div">
      <h1 className="value-heading">
        The value that holds us true an to account
      </h1>
      <div className="value-items">
        <div className="items">
          <div>
            <div className="imgDiv">
              <img src={sample} alt=""></img>
              <h5>Simplicity</h5>
            </div>
            <p>
              Things beinf made beautiful simple are at the heart of everything
              we do.
            </p>
          </div>
          <div>
            <div className="imgDiv">
              <img src={sample2} alt=""></img>
              <h5>Simplicity</h5>
            </div>
            <p>
              We believe in making things better for everyone, even if just by a
              little bit!
            </p>
          </div>
          <div>
            <div className="imgDiv">
              <img src={sample3} alt=""></img>
              <h5>Simplicity</h5>
            </div>
            <p>
              We work on the basis of creating trust which can be nurtured
              through authenticity and transparency
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Value;
