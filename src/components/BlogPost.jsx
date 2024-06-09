// src/components/BlogPost.jsx
import React from 'react';
import { useParams } from 'react-router-dom';
import { Typography, Layout, Avatar, Tag } from 'antd';

const { Title, Paragraph } = Typography;
const { Content } = Layout;

const data = [
  {
    id: 1,
    avatar: 'https://i.pravatar.cc/150?img=1',
    title: 'Blog Post 1',
    content: 'This is the detailed content of blog post 1...',
    tags: ['publications', 'advisor', 'authorship']
  },
  {
    id: 2,
    avatar: 'https://i.pravatar.cc/150?img=2',
    title: 'Blog Post 2',
    content: 'This is the detailed content of blog post 2...',
    tags: ['job', 'phd', 'research']
  },
  {
    id: 3,
    avatar: 'https://i.pravatar.cc/150?img=3',
    title: 'Blog Post 3',
    content: 'This is the detailed content of blog post 3...',
    tags: ['technology', 'ai', 'ml']
  }
];

const BlogPost = () => {
  const { id } = useParams();
  const post = data.find(p => p.id === parseInt(id));

  return (
    <Layout style={{ padding: '24px' }}>
      <Content>
        <Title>{post.title}</Title>
        <div className="flex items-center mb-4">
          <Avatar src={post.avatar} />
          <div className="ml-2">
            {post.tags.map(tag => (
              <Tag key={tag}>{tag}</Tag>
            ))}
          </div>
        </div>
        <Paragraph>{post.content}</Paragraph>
      </Content>
    </Layout>
  );
};

export default BlogPost;
