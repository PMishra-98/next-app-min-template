"use client"
import { useEffect } from "react";
const error=({error,reset})=>{
    useEffect(() => {
        // Optionally log the error to an error reporting service
        console.error(error);
      }, [error]);
    return(
        <div align="center" mt={200}>
        <h2>Somthing went wrong!</h2>
        <h6>Error- {error.message}</h6>
         <button onClick={()=>reset()}>Try Again</button>
         </div>
    )
}
export default error;