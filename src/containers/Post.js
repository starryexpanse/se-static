import React from 'react'
import { withRouteData } from 'react-static'
import { Link } from '@reach/router'
import { Post } from '../structures/post';

export default withRouteData(({ post: serializedPost }) => {
  console.log('serializedPost', serializedPost);

  const postUndeserialized = new Post({
    ...serializedPost,
  });

  console.log('postUndeserialized', postUndeserialized);

  const post = postUndeserialized.deserialized();

  return <div>
    <Link to="/blog/">{'<'} Back</Link>
    <br />
    <h3>{post.title}</h3>
    <div>{post.body}</div>
  </div>
});
