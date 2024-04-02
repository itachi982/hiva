import axios from "axios"
import React,{useState} from "react"

export const UploadFile = () =>
{
    const [image,setImage]=useState();
    const onInputchange=(e)=>{
        console.log(e.targetfiles[0]);
        setImage(e.target.files[0]);
    };

    
    return (
        <div>
            <form>
            <input type="file" accept="image/*" onChange={onInputchange} ></input>
            <button type="submit">Submit</button>
            </form>
        </div>
    );
}