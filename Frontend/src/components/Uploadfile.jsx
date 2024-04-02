import axios from "axios";
import React, { useState } from "react";

export const UploadFile = () => {
    const [image, setImage] = useState();

    const submitImage = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("image", image);

        try {
            const result = await axios.post(
                "http://localhost:3000/upload", // Update with your backend endpoint
                formData,
                {
                    headers: { 'Content-Type': 'multipart/form-data' }
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
