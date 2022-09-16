import React from "react";

function funHandler(){
    function funClick(){
        console.log("funClicked")
    }
    return (
        <div>
            <button onClick = {funClick}>Click dear</button>
        </div>
    )
}
 
// funHandler is different than funHandler()
// funHandler means passing the fun & funHandler() means 
export default funHandler;
