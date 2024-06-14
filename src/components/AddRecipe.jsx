import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Form, Input, InputNumber, Upload } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { RecipesContext } from '../contexts/RecipesContext';

const { TextArea } = Input;

const AddRecipe = () => {
  const navigate = useNavigate();
  const [fileList, setFileList] = useState([]);
  const { recipes, setRecipes } = useContext(RecipesContext);

  const onFinish = (values) => {
    const newRecipe = {
      ...values,
      image: fileList.length > 0 ? URL.createObjectURL(fileList[0].originFileObj) : '',
      ratings: 0, // Yeni tarifler için başlangıçta 0 puan
    };

    setRecipes([...recipes, newRecipe]);
    navigate('/recipes'); // Form gönderildikten sonra tarifler sayfasına yönlendirme
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  const handleFileChange = ({ fileList }) => setFileList(fileList);

  return (
    <div className="container mx-auto px-6 py-12">
      <h2 className="text-4xl font-bold mb-4">Tarif Ekle</h2>
      <Form
        name="add-recipe"
        layout="vertical"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          label="Tarif Başlığı"
          name="title"
          rules={[{ required: true, message: 'Lütfen tarif başlığı girin!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Açıklama"
          name="description"
          rules={[{ required: true, message: 'Lütfen tarif açıklaması girin!' }]}
        >
          <TextArea rows={4} />
        </Form.Item>

        <Form.Item
          label="Pişirme Süresi (Dakika)"
          name="time"
          rules={[{ required: true, message: 'Lütfen pişirme süresini girin!' }]}
        >
          <InputNumber min={1} />
        </Form.Item>

        <Form.Item
          label="Zorluk Seviyesi"
          name="difficulty"
          rules={[{ required: true, message: 'Lütfen zorluk seviyesini girin!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Resim Yükle"
          name="image"
        >
          <Upload
            listType="picture"
            fileList={fileList}
            onChange={handleFileChange}
            beforeUpload={() => false} // Prevent automatic upload
          >
            <Button icon={<UploadOutlined />}>Resim Yükle</Button>
          </Upload>
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Kaydet
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default AddRecipe;
