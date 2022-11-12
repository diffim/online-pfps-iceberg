import React from "react";
import "./css-files/Pfp.css";

type PfpProps = { image: string; imgDescription: string; imgClassName: string };

function Pfp(props: PfpProps) {
  return (
    <div className={`pfp ${props.imgClassName}`}>
      <img className="pfp__img" src={props.image} />
      <h4>{props.imgDescription}</h4>
    </div>
  );
}

export default Pfp;
