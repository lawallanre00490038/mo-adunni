"use client";

import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { useParams, usePathname } from 'next/navigation';
import { getProductDetails, getSimilarProducts } from '@/actions/getProduct';
import { SanityDocument } from '@sanity/client';
import { urlForImage } from '@/sanity/lib/image';



const ProductDetails = () => {
    const [product, setProduct] = useState<SanityDocument[]>([]);
    const [similarProducts, setSimilarProducts] = useState<SanityDocument[]>([]);

    const { slug } = useParams();
    const [itemSlug, index] = slug;

    const parsedIndex = Number(index);

    console.log("The Slug", itemSlug)
    console.log("The Index", index)

    async function getProducts(itemSlug: string, index: Number) {
        const product = await getProductDetails({ slug: itemSlug, index: parsedIndex });
        const similarProducts = await getSimilarProducts({ slug : itemSlug });
        return { product, similarProducts };
    };

    useEffect(() => {
        const fetchProducts = async () => {
            if (typeof itemSlug === 'string') {
                const { product, similarProducts } = await getProducts(itemSlug, parsedIndex);    
                setProduct(product);
                setSimilarProducts(similarProducts);
            }
        };
        fetchProducts();

    }, [itemSlug]);


    useEffect(() => {
        console.log("The Products", product)
        console.log("The Similar Products", similarProducts)
    }, [product]);

    
    return (
        <div>
            <div className='product-detail-container'>
                {/* <div>
                    <div className='image-container'>
                        <Image src={product.image} alt='product'/>
                    </div>
                </div> */}
            </div>
        </div>
    );
};

export default ProductDetails;
