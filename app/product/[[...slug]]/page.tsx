"use client";

import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { useParams, usePathname } from 'next/navigation';
import { getProductDetails, getSimilarProducts } from '@/actions/getProduct';
import { SanityDocument } from '@sanity/client';
import { urlForImage } from '@/sanity/lib/image';
import { AiOutlineMinus, AiOutlinePlus, AiFillStar, AiOutlineStar } from 'react-icons/ai';
import Product from '@/components/Product';


const ProductDetails = () => {


    const [product, setProduct] = useState<SanityDocument[]>([]);
    const { images, name, price, details } = product[0] || {};
    const [ idx, setIdx ] = useState(0);

    const { slug } = useParams();
    const [itemSlug, slug_num] = slug;

    const parsedIndex = Number(slug_num);

    async function getProducts(itemSlug: string ) {
        const product = await getProductDetails({ slug: itemSlug });
            return { product };
    };

    useEffect(() => {
        const fetchProducts = async () => {
            if (typeof itemSlug === 'string') {
                const { product } = await getProducts(itemSlug);    
                setProduct(product);
            }
        };
        fetchProducts();

    }, [itemSlug]);


    useEffect(() => {
    }, [product, slug_num]);
    
    return  (
        <div>
          <div className="product-detail-container">
            <div>
               {images && images
                .filter((_: any, idx: any) => idx === parsedIndex)
                    .map((image: any) => (
                        <div className='image-container' key={parsedIndex}>
                            <img src={urlForImage(image)} alt="images" className='product-detail-image' 
                            />
                        </div>
                    ))
                }
              <div className="small-images-container">
                {images?.map((item: any, i: any) => (
                  <img 
                    key={i}
                    src={urlForImage(item)}
                    className={i === idx ? 'small-image selected-image' : 'small-image'}
                    onMouseEnter = {() => setIdx(i)}
                  />
                ))}
              </div>
            </div>
    
            <div className="product-detail-desc">
              <h1>{name}</h1>
              <div className="reviews">
                <div>
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiOutlineStar />
                </div>
                <p>
                  (20)
                </p>
              </div>
              <h4>Details: </h4>
              <p>{details}</p>
              <p className="price">N{price}</p>
              <div className="quantity">
                <h3>Quantity:</h3>
                <p className="quantity-desc">
                  <span className="minus" onClick={()=> "onclick"}><AiOutlineMinus /></span>
                  <span className="num">0</span>
                  <span className="plus" onClick={()=> "onclick"}><AiOutlinePlus /></span>
                </p>
              </div>
              <div className="buttons">
                <button type="button" className="add-to-cart" onClick={() => ()=> "onclick"}>Add to Cart</button>
                <button type="button" className="buy-now" onClick={()=> "onclick"}>Buy Now</button>
              </div>
            </div>
          </div>
    
          <div className="maylike-products-wrapper">
              <h2>You may also like</h2>
              <div className="marquee">
                <div className="maylike-products-container track">
                  {product.map((item) => (
                    <Product key={item._id} product={item} />
                  ))}
                </div>
              </div>
          </div>
        </div>
      );
};

export default ProductDetails;
