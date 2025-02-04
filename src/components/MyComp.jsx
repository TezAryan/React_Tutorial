import React,{ useEffect } from "react";


const MyComponent =() => {
    

    useEffect(() => {
        console.log('My component is mounting...')
    } , []) 

    return function () {
        console.log("Unmounting.....");
                                                // this statement will run when we are unmounting the button the return staement                                                                                                                                                                            
        };
    
    return (
        <h3>My Component</h3>
    )
}

export default MyComponent