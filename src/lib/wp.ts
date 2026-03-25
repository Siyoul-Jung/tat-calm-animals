// src/lib/wp.ts
const WP_API_URL = process.env.NEXT_PUBLIC_WORDPRESS_API_URL || 'https://tatlife.com/graphql';

export async function wpQuery(query: string, variables = {}) {
  const res = await fetch(WP_API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    next: { revalidate: 60 }, // Cache for 60 seconds
    body: JSON.stringify({
      query,
      variables,
    }),
  });

  const json = await res.json();

  if (json.errors) {
    console.error(json.errors);
    throw new Error('Failed to fetch API');
  }

  return json.data;
}

// Example: Fetch all pages for navigation or routing
export async function getPages() {
  const data = await wpQuery(`
    query GetPages {
      pages {
        nodes {
          id
          title
          slug
          uri
        }
      }
    }
  `);
  return data.pages.nodes;
}
