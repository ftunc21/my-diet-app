// src/components/AddPost.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Input, Button, Layout } from 'antd';

const { Content } = Layout;

const AddPost = ({ addPost }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const navigate = useNavigate();

  const handleSubmit = () => {
    const newPost = {
      id: Date.now(),
      avatar: 'https://i.pravatar.cc/150',
      title,
      content,
      answers: 0,
      votes: 0,
      views: 0,
      tags: []
    };
    addPost(newPost);
    navigate('/blog');
  };

  return (
    <Layout style={{ padding: '24px' }}>
      <Content>
        <Form layout="vertical" onFinish={handleSubmit}>
          <Form.Item label="Title" required>
            <Input value={title} onChange={(e) => setTitle(e.target.value)} />
          </Form.Item>
          <Form.Item label="Content" required>
            <Input.TextArea value={content} onChange={(e) => setContent(e.target.value)} />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Content>
    </Layout>
  );
};

export default AddPost;
