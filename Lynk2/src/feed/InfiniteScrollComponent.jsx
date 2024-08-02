import React, { useState, useEffect, useRef, useCallback } from 'react';
import Post from './Post';
import './InfiniteScrollComponent.css';

const customPosts = [
  { id: 1, url:"https://akm-img-a-in.tosshub.com/indiatoday/images/story/201902/Aj.jpeg"  },
  { id: 2, url: "https://images.lifestyleasia.com/wp-content/uploads/sites/2/2024/05/24191916/Untitled-design-2024-05-24T164902.587-1600x900.jpg"},
  { id: 3, url: "https://library.sportingnews.com/styles/crop_style_16_9_desktop/s3/2022-12/Fjodjh5XwAEG79K.jpg.png?itok=JiLQhu1X"},
  { id: 4, url: "https://i0.wp.com/fitnessvolt.com/wp-content/uploads/2023/06/Jay-Cutlers-Quad-Stomp-Pose-699x1024.jpeg" }
];

const getRandomPosts = (posts) => {
  return posts
    .map((post) => ({ ...post }))
    .sort(() => Math.random() - 0.5);
};

const InfiniteScrollComponent = () => {
  const [posts, setPosts] = useState(getRandomPosts(customPosts));
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const observer = useRef();

  const fetchPosts = async (page) => {
    setLoading(true);
    const newPosts = customPosts.map(post => ({
      ...post,
      id: post.id + page * customPosts.length
    }));
    setPosts((prevPosts) => [...prevPosts, ...getRandomPosts(newPosts)]);
    setLoading(false);
  };

  useEffect(() => {
    if (page > 1) fetchPosts(page);
  }, [page]);

  const lastPostRef = useCallback((node) => {
    if (loading) return;
    if (observer.current) observer.current.disconnect();

    observer.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setPage((prevPage) => prevPage + 1);
      }
    });

    if (node) observer.current.observe(node);
  }, [loading]);

  return (
    <div className="feed-container">
      <h1></h1>
      {posts.map((post, index) => {
        if (index === posts.length - 1) {
          return <Post ref={lastPostRef} key={post.id} post={post} />;
        } else {
          return <Post key={post.id} post={post} />;
        }
      })}
      {loading && <p>Loading...</p>}
    </div>
  );
};

export default InfiniteScrollComponent;