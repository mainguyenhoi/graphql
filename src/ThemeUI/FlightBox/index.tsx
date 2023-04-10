import React from "react";
import useStyle from './styles';
interface ThemeDatePickerProps {
    topText?: string,
    children: any,
    bottomText?: string,
    classIcon?: string,
    nameIcon?: string,
    decor?: any,
}
const FlightBox = (props: ThemeDatePickerProps) => {
    const classes = useStyle();
    return (
        <div className={classes.root}>
            <div className="flight_Search_boxed">
                <div className={classes.flightBox}>
                    <p>{props?.topText}</p>
                    {props.children}
                    <span>{props?.bottomText}</span>
                    {props?.nameIcon ? <div className={`${props.classIcon}`}>
                        <i className={`${props.nameIcon}`}></i>
                    </div> : <></>}
                    {props?.decor ? props.decor() : <></>}
                </div>
            </div>
        </div>
    )
}
export default FlightBox;