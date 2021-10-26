import React from 'react';
import { Image } from 'antd';

const ImageUpload = ({ onChange, value = {}, isEdit }) => {
  const handleChange = (e) => {
    e.preventDefault();

    const reader = new FileReader();
    const file = e.target.files[0];

    reader.onloadend = () => {
      onChange({
        file: file,
        imagePreviewUrl: reader.result
      });
    };

    reader.readAsDataURL(file);
  };

  return (
    <div className="image-loader">
      {value.imagePreviewUrl && (
        <Image 
          width={200}
          src={value.imagePreviewUrl}
        />
      )}
      {isEdit && <input className="image-loader__input" type="file" name="myImage" onChange={handleChange} />}
    </div>
  );
}

export default ImageUpload;