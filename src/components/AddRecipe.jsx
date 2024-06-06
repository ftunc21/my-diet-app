// src/components/AddRecipe.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Input, Button, Upload } from 'antd';
import { UploadOutlined } from '@ant-design/icons';


const { TextArea } = Input;

const AddRecipe = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [details, setDetails] = useState('');
  const [image, setImage] = useState(null);

  const handleImageUpload = (info) => {
    setImage(info.file.originFileObj);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    navigate('/recipes');
  };

  return (
    <div className="container mx-auto px-6 py-12">
      <h2 className="text-4xl font-bold mb-4">Yeni Tarif Ekle</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
            Tarif Başlığı
          </label>
          <Input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
            Kısa Açıklama
          </label>
          <Input
            type="text"
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="details">
            Tarif
          </label>
          <TextArea
            id="details"
            value={details}
            onChange={(e) => setDetails(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="image">
            Fotoğraf
          </label>
          <Upload
            id="image"
            beforeUpload={() => false}
            onChange={handleImageUpload}
            className="w-full"
          >
            <Button icon={<UploadOutlined />}>Fotoğraf Yükle</Button>
          </Upload>
        </div>
        <Button type="primary" htmlType="submit" className="w-full mt-4 submit-button">
          Kaydet
        </Button>
      </form>
    </div>
  );
};

export default AddRecipe;
