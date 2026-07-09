const domain = process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN;
const storefrontAccessToken = process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN;

export async function shopifyFetch({ query, variables }) {
  if (!domain || !storefrontAccessToken) {
    // If not configured, fail gracefully so the UI doesn't break
    return { data: null, error: 'Shopify environment variables not set' };
  }

  const endpoint = `https://${domain}/api/2024-01/graphql.json`;

  try {
    const result = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Shopify-Storefront-Access-Token': storefrontAccessToken
      },
      body: JSON.stringify({
        ...(query && { query }),
        ...(variables && { variables })
      })
    });

    const body = await result.json();

    if (body.errors) {
      console.error('Shopify API errors:', body.errors);
      return { data: null, error: body.errors };
    }

    return { data: body.data, error: null };
  } catch (error) {
    console.error('Shopify Fetch Error:', error);
    return { data: null, error };
  }
}

// ----------------------------------------------------------------------
// GRAPHQL QUERIES / MUTATIONS
// ----------------------------------------------------------------------

export const createCheckoutMutation = `
  mutation checkoutCreate($input: CheckoutCreateInput!) {
    checkoutCreate(input: $input) {
      checkout {
        id
        webUrl
      }
      checkoutUserErrors {
        code
        field
        message
      }
    }
  }
`;

export async function createShopifyCheckout(cartItems) {
  if (!cartItems || cartItems.length === 0) return null;

  // We need Shopify Variant IDs here. Since we are falling back to mockup data 
  // until the real products are mapped, we check if the ID looks like a Shopify ID (gid://)
  // If they don't have a real Shopify variant ID yet, we can't create a real checkout.
  
  const lineItems = cartItems.map(item => ({
    variantId: item.id.includes('gid://') ? item.id : 'gid://shopify/ProductVariant/PLACEHOLDER',
    quantity: item.quantity || 1
  }));

  const variables = {
    input: {
      lineItems
    }
  };

  const { data, error } = await shopifyFetch({
    query: createCheckoutMutation,
    variables
  });

  if (error || !data?.checkoutCreate?.checkout) {
    return null;
  }

  return data.checkoutCreate.checkout.webUrl;
}
