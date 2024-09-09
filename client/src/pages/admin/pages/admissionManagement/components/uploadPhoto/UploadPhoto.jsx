import React, { useState } from 'react';
import { Upload, Image } from 'lucide-react';

const PhotoUpload = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file && file.type.substr(0, 5) === "image") {
            setSelectedImage(URL.createObjectURL(file));
        } else {
            setSelectedImage(null);
            alert("Please select an image file");
        }
    };

    return (
        <div className="p-6 bg-white rounded-lg flex gap-8 items-center" style={{boxShadow:'0 0 5px rgba(0,0,0,.1)'}}>

            <label
                htmlFor="image-upload"
                className="flex items-center justify-center w-full h-full px-4 py-8 transition bg-white border-2 border-gray-300 border-dashed rounded-md appearance-none cursor-pointer hover:border-gray-400 focus:outline-none"
            >
                {selectedImage ? (
                    <div className="flex flex-col items-center">
                        <Upload className="w-8 h-8 text-gray-400" />
                        <span className="mt-2 text-base leading-normal text-gray-600">Change Image</span>
                    </div>
                ) : (
                    <div className="flex flex-col items-center">
                        <Upload className="w-8 h-8 text-gray-400" />
                        <span className="mt-2 text-base leading-normal text-gray-600">Select an image</span>
                    </div>
                )}
            </label>
            <input
                type="file"
                id="image-upload"
                accept="image/*"
                className="hidden"
                onChange={handleImageChange}
            />

            {selectedImage && (
                <div className="relative min-w-[10rem] h-[10rem] bg-gray-100 rounded-md overflow-hidden">
                    <img src={selectedImage} alt="Preview" className="w-full h-full object-cover" />
                </div>
            )}
        </div>
    );
};

export default PhotoUpload;