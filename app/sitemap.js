export async function generatePages() {
  const params = {
    query: `
      query SiteMapQuery {
        pages {
          nodes {
            date
            uri
          }
        }
        posts {
          nodes {
            date
            uri
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
  const pagesData = data.pages.nodes;
  const postsData = data.posts.nodes;

  return { pagesData, postsData };
}

export default async function sitemap() {
  const { pagesData, postsData } = await generatePages();

  const pages = pagesData.map(page => ({
    url: `https://academgo.com${page.uri}`,
    lastModified: new Date(page.date),
    changeFrequency: 'weekly',
    priority: 0.8,
  }));

  const posts = postsData.map(post => ({
    url: `https://academgo.com${post.uri}`,
    lastModified: new Date(post.date),
    changeFrequency: 'weekly',
    priority: 0.8,
  }));

  return [...pages, ...posts];
}
