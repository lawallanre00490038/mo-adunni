// ./sanity/lib/queries.ts
import { groq } from "next-sanity";

export const PRODUCTS_QUERY = groq`*[_type == "product"]{
                                                image,
                                                price,
                                                name,
                                                details,
                                                slug {
                                                current
                                                }
                                }`;


export const BANNER_QUERY = groq`*[_type == "banner"]`;


// export const SPECIFIC_PRODUCT_QUERY = (slug: string, index: number) => groq`*[_type == "product" && slug.current == "${slug}"][${index}]{
//     image[${index}],
//     price,
//     name,
//     details,
//     slug {
//     current
//     }
// }`;

export const SPECIFIC_PRODUCT_QUERY = (slug: string, index: number) => groq`*[_type == "product" && slug.current == "${slug}"]{
    image[${index}],
    price,
    name,
    details,
    slug {
        current
    }
}`;
  

export const ALL_SIMILAR_PRODUCTS_QUERY = (slug: string) => groq`*[_type == "product" && slug.current == "${slug}"]{
    image,
    price,
    name,
    details,
    slug {
    current
    }
}`;
