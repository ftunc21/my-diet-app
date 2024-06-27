import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Form, Input, InputNumber, Upload, message } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { DietsContext } from '../contexts/DietsContext';

const { TextArea } = Input;

const CreateDiet = () => {
  const navigate = useNavigate();
  const [fileList, setFileList] = useState([]);
  const { diets, setDiets } = useContext(DietsContext);

  const onFinish = (values) => {
    const formData = new FormData();
    formData.append('title', values.title);
    formData.append('description', values.description);
    formData.append('detailed_description', values.detailed_description);
    formData.append('time', values.time);
    formData.append('difficulty', values.difficulty);

    if (fileList.length > 0) {
      formData.append('image', fileList[0].originFileObj);
    }

    fetch('http://localhost:8000/api/diets/', {
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
        setDiets([...diets, data]);
        message.success('Diyet Planı başarıyla kaydedildi!');
        navigate('/diet-plans');
      })
      .catch(error => {
        console.error('Error:', error);
        message.error('Diyet Planı kaydedilirken bir hata oluştu.');
      });
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  const handleFileChange = ({ fileList }) => setFileList(fileList);

  return (
    <div className="container mx-auto px-6 py-12">
      <h2 className="text-4xl font-bold mb-4">Diyet Planı Ekle</h2>
      <Form
        name="create-diet"
        layout="vertical"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          label="Diyet Planı Başlığı"
          name="title"
          rules={[{ required: true, message: 'Lütfen diyet planı başlığı girin!' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Açıklama"
          name="description"
          rules={[{ required: true, message: 'Lütfen diyet planı açıklaması girin!' }]}
        >
          <TextArea rows={4} />
        </Form.Item>
        <Form.Item
          label="Detaylı Açıklama"
          name="detailed_description"
          rules={[{ required: true, message: 'Lütfen detaylı diyet planı açıklaması girin!' }]}
        >
          <TextArea rows={4} />
        </Form.Item>
        <Form.Item
          label="Pişirme Süresi (Dakika)"
          name="time"
          rules={[{ required: true, message: 'Lütfen pişirme süresini girin!' }]}
        >
          <InputNumber min={1} className="w-full" />
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

export default CreateDiet;
