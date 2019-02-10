const getBlogPosts = () => {
  return [
    require('./src/posts/2018-08-14-a-post-mysterium-announcement.js'),
  ].map(r => r.default);
};

export default {
  getSiteData: () => ({
    title: 'React Static',
  }),
  getRoutes: async () => {
    const posts = getBlogPosts().map(post => post.serialized());
    console.log('POSTS', posts);

    return [
      {
        path: '/blog',
        getData: () => ({
          posts,
        }),
        children: posts.map(post => {
          console.log(`/post/${post.id}`);
          return {
            path: `/post/${post.id}`,
            component: 'src/containers/Post',
            getData: () => ({
              post,
            }),
          }
        }),
      },
    ]
  },
}
