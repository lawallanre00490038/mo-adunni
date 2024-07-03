// import { SanityDocument } from 'next-sanity'
// import { sanityFetch } from '@/sanity/lib/fetch'
// import { SPECIFIC_PRODUCT_QUERY, ALL_SIMILAR_PRODUCTS_QUERY } from '@/sanity/lib/queries'



// export const getProductDetails = async ({ slug, index}: { slug: string, index: number }) => {
//     const res = await sanityFetch<SanityDocument[]>({
//         query: SPECIFIC_PRODUCT_QUERY(slug, index),
//     })

//     console.log("From create images on getProducts file",res)
//     return res
// }


// export const getSimilarProducts = async ({ slug}: { slug: string }) => {
//     const res = await sanityFetch<SanityDocument[]>({
//         query: ALL_SIMILAR_PRODUCTS_QUERY(slug),
//     })
//     return res
// }



import { createClient, groq } from "next-sanity";

const client = createClient({
  projectId: process.env.SANITY_STUDIO_PROJECT_ID || "qaxhccid",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  apiVersion: "2024-06-29",
  token: process.env.NEXT_PUBLIC_SANITY_API_TOKEN,
  useCdn: true,
  perspective: 'published',
});

export async function getProductBySlug(slug: string) {
  const product = await client.fetch(
    groq`*[_type == "product" && slug.current == $slug]`,
    { slug }
    );

  return product; 
}


export async function getAllProducts() {
    const products = await client.fetch(
        groq`*[_type == "product"]  | order(createdAt desc) [0...6] {
        _id,
        name,
        slug,
        details,
        price,
        images
        "slug": slug.current,
        }`,
    );

  return products;
}

export async function getProducts() {
  const products = await client.fetch(
    groq`*[_type == "product"]`,
  );

  console.log("From getProducts file", products)
  return products;
}


export async function getBanner() {
  const banner = await client.fetch(
    groq`*[_type == "banner"]`,
  );

  return banner;
}




export const getProductDetails = async ({ slug }: { slug: string }) => {
    const res = await client.fetch(
      groq`*[_type == "product" && slug.current == "${slug}"]`
  )
  return res
}


export const getSimilarProducts = async ({ slug}: { slug: string }) => {
    const res = await client.fetch(groq`*[_type == "product" && slug.current == "${slug}"]`)
    return res
}




