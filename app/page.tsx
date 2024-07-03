import { HeroBanner, Footer, FooterBanner, Cart, Product } from '@/components'
import { SanityDocument } from "next-sanity"
import { sanityFetch } from "@/sanity/lib/fetch"


import { getProducts, getBanner } from '@/actions/getProduct'

const Home =  async ( ) => {

  // const productsData = await sanityFetch<SanityDocument[]>({
  //   query: PRODUCTS_QUERY,
  // })

  // const bannerData = await sanityFetch<SanityDocument[]>({
  //   query: BANNER_QUERY,
  // })

  const productsData = await getProducts();
  console.log("products the page file", productsData)
  

  const bannerData = await getBanner();
  console.log("banner the page file", bannerData)

  return (
    <>
      <HeroBanner heroBanner={bannerData.length ? bannerData[0] : undefined} />

      <div className='products-heading'>
        <h2>Best Selling Products</h2>
        <p>Fashion of many variations</p>
      </div>

      <div className='products-container'>
        {productsData?.map((product: any, index: any)=> <Product key={index} product={product} />)}
      </div>

      <FooterBanner footerBanner={bannerData.length ? bannerData[0] : undefined}/>
    </>
  )
}


export default Home