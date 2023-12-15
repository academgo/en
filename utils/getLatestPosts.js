// utils/getLatestPosts.js
export const getLatestPosts = async () => {
  const params = {
    query: `
      query LatestPostsQuery {
        posts(first: 5, where: {orderby: {field: DATE, order: DESC}}) {
          nodes {
            title
            uri
            categories {
              nodes {
                name
              }
            }
            link
            slug
          }
        }
      }
    `,
  };

  const response = await fetch(process.env.WP_GRAPHQL_URL, {
    next: { revalidate: 60 },
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(params),
  });

  const { data } = await response.json();
  const latestPosts = data.posts.nodes;

  return latestPosts;
};