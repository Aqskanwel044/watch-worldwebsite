// pages/blog.js
import React from 'react';


const Blog = () => {
  const posts = [
    {
      id: 1,
      title: "Top 5 Smart Watches of 2023",
      excerpt: "Discover the best smart watches of 2023, featuring advanced technology and stylish designs.",
      date: "October 5, 2023",
      link: "/blog/top-5-smart-watches-2023"
    },
    {
      id: 2,
      title: "How to Choose the Right Watch for You",
      excerpt: "Choosing the perfect watch can be challenging. Here are some tips to help you make the right decision.",
      date: "September 28, 2023",
      link: "/blog/how-to-choose-the-right-watch"
    },
    {
      id: 3,
      title: "The Evolution of Smart Watches",
      excerpt: "Explore the history and evolution of smart watches, from their inception to the latest innovations.",
      date: "September 15, 2023",
      link: "/blog/evolution-of-smart-watches"
    }
  ];

  return (
    <div className="container">
      <h1 className="title">Watch Blog</h1>
      <div className="postList">
        {posts.map(post => (
          <div key={post.id} className="postCard">
            <h2 className="postTitle">{post.title}</h2>
            <p className="postDate">{post.date}</p>
            <p className="postExcerpt">{post.excerpt}</p>
            <a href={post.link} className="readMore">Read More</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;