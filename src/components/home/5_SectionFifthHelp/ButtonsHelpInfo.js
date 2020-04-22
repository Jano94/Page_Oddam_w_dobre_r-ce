import React from "react";

const ButtonsHelpInfo = ({title, info, things}) => {
  return (
      <>
          <ul className="container row">
              <li className="col-2"> </li>
              <li className="col-4 help-box">
                  <h3 className="help-title"> {title} </h3>
                  <h5 className="help-info"> {info} </h5>
              </li>
              <li className="col-4 things-box">
                  <p className="help-things"> {things}</p>
              </li>
              <li className="col-2"> </li>
          </ul>
      </>

  )
};
export default ButtonsHelpInfo;