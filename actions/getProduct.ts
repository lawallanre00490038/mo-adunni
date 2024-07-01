import { SanityDocument } from 'next-sanity'
import { sanityFetch } from '@/sanity/lib/fetch'
import { SPECIFIC_PRODUCT_QUERY, ALL_SIMILAR_PRODUCTS_QUERY } from '@/sanity/lib/queries'


export const getProductDetails = async ({ slug, index}: { slug: string, index: number }) => {
    const res = await sanityFetch<SanityDocument[]>({
        query: SPECIFIC_PRODUCT_QUERY(slug, index),
    })
    return res
}

export const getSimilarProducts = async ({ slug}: { slug: string }) => {
    const res = await sanityFetch<SanityDocument[]>({
        query: ALL_SIMILAR_PRODUCTS_QUERY(slug),
    })
    return res
}








