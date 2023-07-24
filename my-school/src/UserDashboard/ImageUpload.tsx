import React from 'react';
import axios from 'axios';

const ImageUploader: React.FC = () => {
  const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData();
    const fileInput = event.currentTarget.myImage as HTMLInputElement;
    formData.append('myImage', fileInput.files?.[0] || '');

    try {
      const response = await axios.post<string>('http://localhost:8080/uploadphoto', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log(response);
      // Optionally, you can show a success message or perform other actions on successful upload.
    } catch (error) {
      console.error('Error uploading image:', error);
      // Handle error, show an error message, etc.
    }
  };

  return (
    <div>
      <h1>Image Upload</h1>
      <form onSubmit={handleFormSubmit}>
        <input type="file" name="myImage" accept="image/*" />
        <input type="submit" value="Upload Photo" />
      </form>
    </div>
  );
};

export default ImageUploader;
