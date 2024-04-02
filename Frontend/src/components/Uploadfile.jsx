import axios from "axios";
import React, { useState } from "react";

export const UploadFile = () => {
    const [image, setImage] = useState();

    const submitImage = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("file", image);
        console.log(image)
        try {
            const result = await axios.post(
                "http://localhost:3000/profile_pic/upload/a-80012", // Update with your backend endpoint
                {formData},
                {
                    hheaders: { 
                        'Authorization':localStorage.getItem('token'),
                        'Content-Type': 'multipart/form-data' }
                }
            );
            console.log(result.data);
        } catch (error) {
            console.error("Error uploading image:", error);
        }
    };

    const onInputChange = (e) => {
        setImage(e.target.files[0]);
    };

    return (
        <div>
            <form onSubmit={submitImage}>
                <input type="file" accept="image/*" onChange={onInputChange} />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};
