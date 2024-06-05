// src/components/Blog.jsx
import React, { useState } from 'react';

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [topic, setTopic] = useState('');
  const [isFormVisible, setFormVisible] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPost = { title, content, topic };
    setPosts([...posts, newPost]);
    setTitle('');
    setContent('');
    setTopic('');
    setFormVisible(false);
  };

  return (
    <div className="container mx-auto px-6 py-12">
      <h2 className="text-4xl font-bold mb-4">Blog</h2>
      <div className="flex">
        <div className="w-3/4">
          {posts.map((post, index) => (
            <div key={index} className="mb-6 border p-4 rounded">
              <h3 className="text-2xl font-bold">{post.title}</h3>
              <p className="text-gray-700">{post.content}</p>
              <p className="text-gray-500 italic">Konu: {post.topic}</p>
            </div>
          ))}
        </div>
        <div className="w-1/4">
          <button
            onClick={() => setFormVisible(!isFormVisible)}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Blog Ekle
          </button>
          {isFormVisible && (
            <form onSubmit={handleSubmit} className="mt-4">
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
                  Başlık
                </label>
                <input
                  type="text"
                  id="title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="content">
                  İçerik
                </label>
                <textarea
                  id="content"
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  required
                ></textarea>
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="topic">
                  Konu
                </label>
                <input
                  type="text"
                  id="topic"
                  value={topic}
                  onChange={(e) => setTopic(e.target.value)}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  required
                />
              </div>
              <button
                type="submit"
                className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Ekle
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Blog;
