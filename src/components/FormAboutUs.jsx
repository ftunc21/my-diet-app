import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Form, Input, notification, message } from 'antd';

const FormAboutUs = () => {
    const navigate = useNavigate();
    const [form] = Form.useForm();

    const onFinish = (values) => {

        console.log(values);

        message.success('Mesajınız başarıyla gönderildi!');
        notification.success({
            message: 'Başarılı',
            description: 'Geri Dönüşün İçin Teşekkür Ederiz',
        });


        navigate('/about-us');
    };

    return (
        <div className='container mx-auto px-6 py-12'>
            <h1 className='text-6xl font-extrabold text-green-700 mb-4'>Bize <span className='text-orange-600'>Ulaşın</span> </h1>
            <Form
                form={form}
                layout='vertical'
                onFinish={onFinish}
                className='bg-white p-6 rounded-lg shadow-md'
            >
                <Form.Item
                    name='name'
                    label='Adınız'
                    rules={[{ required: true, message: 'Lütfen adınızı girin!' }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    name='email'
                    label='E-posta Adresiniz'
                    rules={[{ required: true, message: 'Lütfen e-posta adresinizi girin!' }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    name='message'
                    label='Mesajınız'
                    rules={[{ required: true, message: 'Lütfen mesajınızı girin!' }]}
                >
                    <Input.TextArea rows={4} />
                </Form.Item>
                <Form.Item>
                    <Button type='primary' htmlType='submit'>
                        Gönder
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
};

export default FormAboutUs;
