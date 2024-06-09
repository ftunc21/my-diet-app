// src/components/Blog.jsx
import React from 'react';
import { List, Avatar, Tag, Typography, Layout, Input } from 'antd';
import { useNavigate } from 'react-router-dom';

const { Title } = Typography;
const { Content, Sider } = Layout;
const { Search } = Input;

const data = [
  {
    id: 1,
    avatar: 'https://i.pravatar.cc/150?img=1',
    title: 'Blog Post 1',
    content: 'This is the content of blog post 1...',
    answers: 0,
    votes: 0,
    views: 0,
    tags: ['publications', 'advisor', 'authorship']
  },
  {
    id: 2,
    avatar: 'https://i.pravatar.cc/150?img=2',
    title: 'Blog Post 2',
    content: 'This is the content of blog post 2...',
    answers: 5,
    votes: 6,
    views: 118,
    tags: ['job', 'phd', 'research']
  },
  {
    id: 3,
    avatar: 'https://i.pravatar.cc/150?img=3',
    title: 'Blog Post 3',
    content: 'This is the content of blog post 3...',
    answers: 2,
    votes: 3,
    views: 42,
    tags: ['technology', 'ai', 'ml']
  }
];

const Blog = () => {
  const navigate = useNavigate();

  const handleClick = (id) => {
    navigate(`/blog/${id}`);
  };

  return (
    <Layout style={{ padding: '24px' }}>
      <Content>
        <Title level={2}>Trending Today</Title>
        <Search placeholder="Search posts..." style={{ marginBottom: '16px' }} />
        <List
          itemLayout="vertical"
          dataSource={data}
          renderItem={item => (
            <List.Item
              key={item.id}
              onClick={() => handleClick(item.id)}
              className="cursor-pointer hover:bg-gray-100"
            >
              <List.Item.Meta
                avatar={<Avatar src={item.avatar} />}
                title={<a>{item.title}</a>}
                description={
                  <div>
                    {item.tags.map(tag => (
                      <Tag key={tag}>{tag}</Tag>
                    ))}
                    <div className="text-gray-500 mt-2">
                      {item.answers} Answers &nbsp; | &nbsp;
                      {item.votes} Votes &nbsp; | &nbsp;
                      {item.views} Views
                    </div>
                  </div>
                }
              />
            </List.Item>
          )}
        />
      </Content>
      <Sider width={300} className="bg-white ml-4">
        <Title level={4}>Hot Questions</Title>
        <List
          dataSource={data.slice(0, 3)} // Mock data for hot questions
          renderItem={item => (
            <List.Item key={item.id} onClick={() => handleClick(item.id)} className="cursor-pointer hover:bg-gray-100">
              <List.Item.Meta
                title={<a>{item.title}</a>}
              />
            </List.Item>
          )}
        />
      </Sider>
    </Layout>
  );
};

export default Blog;
