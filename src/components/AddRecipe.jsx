import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Form, Input, InputNumber, Upload, message } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { RecipesContext } from '../contexts/RecipesContext';


const { TextArea } = Input;

const AddRecipe = () => {
  const navigate = useNavigate();

  const [fileList, setFileList] = useState([]);

  const { recipes, setRecipes } = useContext(RecipesContext);

  const onFinish = (values) => {

    const formData = new FormData();


    formData.append('title', values.title);
    formData.append('description', values.description);
    formData.append('detailed_description', values.detailed_description);
    formData.append('time', values.time);
    formData.append('difficulty', values.difficulty);
    formData.append('stuff', values.stuff);


    if (fileList.length > 0) {
      formData.append('image', fileList[0].originFileObj);
    }


    fetch('http://localhost:8000/api/recipes/', {
      method: 'POST',
      body: formData,
    })
      .then(response => {

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        return response.json();
      })
      .then(data => {

        setRecipes([...recipes, data]);

        message.success('Tarif başarıyla kaydedildi!');

        navigate('/recipes');
      })
      .catch(error => {

        console.error('Error:', error);
        message.error('Tarif kaydedilirken bir hata oluştu.');
      });
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
          label="Detaylı Açıklama"
          name="detailed_description"
          rules={[{ required: true, message: 'Lütfen detaylı tarif açıklaması girin!' }]}
        >
          <TextArea rows={4} />
        </Form.Item>

        <Form.Item
          label="Kullanılacak Malzemeler ve Oranları"
          name="stuff"
          rules={[{ required: true, message: 'Lütfen malzemeleri girin!' }]}
        >
          <TextArea rows={4} />
        </Form.Item>

        <Form.Item
          label="Pişirme Süresi (Dakika)"
          name="time"
          rules={[{ required: true, message: 'Lütfen pişirme süresini girin!' }]}
        >
          <InputNumber min={1} style={{ width: '100%' }} />
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
            beforeUpload={() => false}
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
