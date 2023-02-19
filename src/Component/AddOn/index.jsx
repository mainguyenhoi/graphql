import ThemeButton from "../ThemeComponent/button";
import ThemeDatePicker from "../ThemeComponent/datepicker";
import AddOnType from "./AddOnType";

const AddOn = () => {
    return (<>
        <div className="container">
            <AddOnType />
            <ThemeDatePicker />
        </div>

    </>)
}

export default AddOn;