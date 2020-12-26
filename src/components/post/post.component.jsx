import React, {useEffect, useState} from 'react';

import Card from '../card/card.component';

import useFetch from '../../effects/use-fetch.effect';

const Post = ({ postId }) => {
  const post = useFetch(
    `https://jsonplaceholder.typicode.com/posts?id=${postId}`
  );

  /* The below code is pretty much same in post and user component so can be moved 
   to a resusable hook */
   
  // const [post, setPost] = useState(null);

  // useEffect(()=>{
  //   const fetchPost = async()=>{
  //     const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
  //     const posts = await res.json();
  //     setPost(posts[0]);
  //   }

  //   fetchPost();
  // });


  return (
    <Card>
      {post ? (
        <div>
          <h3> {post.title} </h3>
          <p> {post.body} </p>
        </div>
      ) : (
        <p> No post found </p>
      )}
    </Card>
  );
};

export default Post;
