import React from 'react';	
 
function reducer(state = {vehicle: ''}, action){
switch (action.type) {
    case "Car":
        return {
            vehicle: "It is a Car"
        };
    case "Bike":
        return {
            vehicle: "It is a Bike"
        };
    default:
        return "No";
    }
}
 
export default reducer;