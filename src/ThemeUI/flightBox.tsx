import React from "react";
import { ThemeDatePickerProps } from "../Constant/theme";
import useStyle from './style';
const FlightBox = (props: ThemeDatePickerProps) => {
    const classes = useStyle();
    return (
        <div className="col-lg-3 col-md-6 col-sm-12 col-12">
            <div className="flight_Search_boxed">
                <div className={classes.flightBox}>
                    <p>{props?.topText}</p>
                    {props.children}
                    <span>{props?.bottomText}</span>
                    {props?.nameIcon ? <div className={`${props.classIcon}`}>
                        <i className={`${props.nameIcon}`}></i>
                    </div> : <></>}
                </div>
            </div>
        </div>
    )
}
export default FlightBox;