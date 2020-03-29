import React from "react";


function Wrapper(props){
    return (
        <div>
    <div className="wrapper">{props.children}
    
    </div>
     <p  className="bottom"> Developed by <br></br> Nitin Goswami</p>
     </div>
    )
    }
export default Wrapper;