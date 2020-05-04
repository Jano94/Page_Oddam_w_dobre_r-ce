
import React from "react";

const ButtonsHelpInfo = ({title, info, things}) => {
    return (
        <>
            <ul className="row">
                <li className="col-xl-1 col-lg-1 col-md-1 col-sm-0 col-0"> </li>
                <li className="col-xl-5 col-lg-5 col-md-5 col-sm-7 col-7">
                    <h3 className="help-title"> {title} </h3>
                    <h5 className="help-info"> {info} </h5>
                </li>
                <li className="col-xl-5 col-lg-5 col-md-5 col-sm-5 col-5">
                    <p className="help-things"> {things}</p>
                </li>
                <li className="col-xl-1 col-lg-1 col-md-1 col-sm-0 col-0 border-none"> </li>
            </ul>
        </>

    )
};
export default ButtonsHelpInfo;