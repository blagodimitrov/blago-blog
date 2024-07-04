import { useState } from 'react';
import BlogList from './BlogList';

const Home = () => {
  const [blogs, setBlogs] = useState([
    {
      title: 'Web Development',
      body: 'lorem ipsum...',
      author: 'Blago',
      id: 1,
    },
    { title: 'React and Vite', body: 'lorem ipsum...', author: 'React', id: 2 },
    {
      title: 'Combining Graphic Design and Programming',
      body: 'lorem ipsum...',
      author: 'Blago',
      id: 3,
    },
  ]);

  return (
    <div className='home'>
      <BlogList blogs={blogs} title='All Blogs' />
      <BlogList
        blogs={blogs.filter((blog) => blog.author === 'Blago')}
        title='Blago Blogs'
      />
    </div>
  );
};

export default Home;
