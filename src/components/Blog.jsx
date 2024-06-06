// src/components/Blog.jsx
import React, { useState } from 'react';
import { Button, Input, Card, Col, Row, Typography, Form, Modal } from 'antd';

const { Title, Text } = Typography;
const { TextArea } = Input;

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [topic, setTopic] = useState('');
  const [isFormVisible, setFormVisible] = useState(false);

  const handleSubmit = () => {
    const newPost = { title, content, topic };
    setPosts([...posts, newPost]);
    setTitle('');
    setContent('');
    setTopic('');
    setFormVisible(false);
  };

  return (
    <div className="container mx-auto px-6 py-12">
      <Title level={2} className="mb-4">Blog</Title>
      <Row gutter={16}>
        <Col span={18}>
          {posts.map((post, index) => (
            <Card key={index} className="mb-4">
              <Title level={3}>{post.title}</Title>
              <Text>{post.content}</Text>
              <div className="mt-2">
                <Text type="secondary">Konu: {post.topic}</Text>
              </div>
            </Card>
          ))}
        </Col>
        <Col span={6}>
          <Button
            type="primary"
            onClick={() => setFormVisible(true)}
            className="mb-4"
          >
            Blog Ekle
          </Button>
          <Modal
            title="Yeni Blog Ekle"
            visible={isFormVisible}
            onCancel={() => setFormVisible(false)}
            footer={null}
          >
            <Form layout="vertical" onFinish={handleSubmit}>
              <Form.Item
                label="Başlık"
                name="title"
                rules={[{ required: true, message: 'Başlık gerekli' }]}
              >
                <Input
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </Form.Item>
              <Form.Item
                label="İçerik"
                name="content"
                rules={[{ required: true, message: 'İçerik gerekli' }]}
              >
                <TextArea
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                />
              </Form.Item>
              <Form.Item
                label="Konu"
                name="topic"
                rules={[{ required: true, message: 'Konu gerekli' }]}
              >
                <Input
                  value={topic}
                  onChange={(e) => setTopic(e.target.value)}
                />
              </Form.Item>
              <Form.Item>
                <Button type="primary" htmlType="submit">
                  Ekle
                </Button>
              </Form.Item>
            </Form>
          </Modal>
        </Col>
      </Row>
    </div>
  );
};

export default Blog;
