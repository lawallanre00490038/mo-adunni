import { HeroBanner, Footer, FooterBanner, Cart, Product } from '@/components'
import { SanityDocument } from "next-sanity"
import { sanityFetch } from "@/sanity/lib/fetch"
import { PRODUCTS_QUERY, BANNER_QUERY } from "@/sanity/lib/queries"


const Home =  async ( ) => {

  const productsData = await sanityFetch<SanityDocument[]>({
    query: PRODUCTS_QUERY,
  })

  const bannerData = await sanityFetch<SanityDocument[]>({
    query: BANNER_QUERY,
  })
  

  return (
    <>
      <HeroBanner heroBanner={bannerData.length ? bannerData[0] : undefined} />

      <div className='products-heading'>
        <h2>Best Selling Products</h2>
        <p>Fashion of many variations</p>
      </div>

      <div className='products-container'>
        {productsData?.map((product, index)=> <Product key={index} product={product} />)}
      </div>

      <FooterBanner footerBanner={bannerData.length ? bannerData[0] : undefined}/>
    </>
  )
}


export default Home