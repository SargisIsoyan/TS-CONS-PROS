import prosData from "modules/pros/prosReducer";
import consData from "modules/cons/consReducer";
import {combineReducers} from "redux";

export default combineReducers({
    consData,
    prosData
});
