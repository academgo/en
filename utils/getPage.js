// utils/getPage.js
import { cleanAndTransformBlocks } from "./cleanAndTransformBlocks";

export const getPage = async (uri) => {
  const params = {
    query: `
      query PageQuery($uri: String!) {
        nodeByUri(uri: $uri) {
          __typename
          ... on Page {
            blocks
          }
          ... on Post {
            date
            blocks
            categories {
              nodes {
                name
                uri
              }
            }
            featuredImage {
              node {
                sourceUrl
              }
            }
            title
          }
        }
      }
    `,
    variables: {
      uri,
    },
  };

  const response = await fetch(process.env.WP_GRAPHQL_URL, {
    next: { revalidate: 60 },
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(params),
  });

  const { data } = await response.json();
  const nodeByUri = data.nodeByUri;

  // Check if nodeByUri is truthy before accessing properties
  if (nodeByUri && nodeByUri.__typename === 'Post') {

    const formattedDate = new Date(nodeByUri.date).toLocaleDateString();

    return {
      ...nodeByUri,
      date: formattedDate,
      blocks: cleanAndTransformBlocks(nodeByUri.blocks),
    };
  }

  // Handle other types (e.g., Page)
  if (nodeByUri && nodeByUri.__typename === 'Page') {
    return cleanAndTransformBlocks(nodeByUri.blocks);
  }

  // Return null or handle the case where nodeByUri is not truthy
  return null;
};
