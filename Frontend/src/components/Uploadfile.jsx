import axios from "axios"
import React,{useState} from "react"
import { Button } from "./SigninHelper";
import { UpdatePicAtom } from "../Atoms/Updatepic";
import { useRecoilState } from "recoil";

export const UploadFile = () =>
{
    const [image,setImage]=useRecoilState(UpdatePicAtom);
    const onInputchange=(e)=>{
        //console.log(e.targetfiles[0]);
        setImage(e.target.files[0]);
    };

    
    return (
        <div>
            <div className="flex justify-center space-x-3">
                <div className="shadow-lg rounded-lg">
                    <div className="pl-3 pt-3">

                        <label className="block mb-2 text-sm font-medium text-gray-500 " for="file_input">Update Profile Pic </label>
                        <div className="pb-3 pr-3">
                            <input className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" id="file_input" type="file" onChange={onInputchange}></input>
                        </div>
                        {/* <input type="file" accept="image/*" onChange={onInputchange} ></input> */}
                    </div>
                </div>
                

            </div>

            
        </div>
    );
}