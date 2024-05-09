import { Banner, BestSellerSlider, DealsOfTheDay, FeaturedCategories, IconBox, MiniProductSlider, Section, SimpleProductCard, SimpleProductSlider } from "@/components";
import { PropductDealCards } from "@/components/common/product/product-card/PropductDealCards";
import { BottomSlider } from "@/components/pages/homepage/bottom-slider";
import { BestSellers } from "@/mock/bestSellers";
import { DealsOfTheDaysMock } from "@/mock/DealsOfTheDayMock";
import { popularFruits } from "@/mock/popularFruits";
import { popularProducts } from "@/mock/popularProduct";
import { TopSellingMock } from "@/mock/TopSelling";
import Link from "next/link";



export default function Home() {
  
  return (
   <>
        <Section>
        <Banner
        title={"Dont miss amazing grocery deals"}
        subtitle={"Sign up for the daily newsletter"}
        image={"/assets/images/fresh-apples.png"}
        bgImage={"/assets/images/banner_bg.png"}
          />
        </Section>

        <Section>
        <div className="hidden sm:flex mb-[50px]">
          <h2 className="text-heading3 text-blue-300">Featured Categories</h2>
        </div>
        <FeaturedCategories/>        
        </Section>

        <Section>
        <MiniProductSlider/>
        </Section>

        <Section>
          <div className="flex justify-between mb-[50px]">
          <h2 className="text-heading3 text-blue-300">Popular Products</h2>
          <div className="flex items-center gap-3">
            <i className="swiper-nav-left icon-angle-small-left cursor-pointer bg-gray-100 p-2 rounded-full text-gray-500 hover:bg-green-200 hover:text-white text-[24px]"></i>
            <i className="swiper-nav-right icon-angle-small-right cursor-pointer bg-gray-100 p-2 rounded-full text-gray-500 hover:bg-green-200 hover:text-white text-[24px]"></i>
          </div>
          </div>
        <SimpleProductSlider  nextEl={'.swiper-nav-right'} prevEl={'.swiper-nav-left'} sliderData={popularProducts}/>
        </Section>

        <Section>
        <div className="flex justify-between mb-[50px]">
          <h2 className="text-heading3 text-blue-300">Popular Fruits</h2>
          <div className="flex items-center gap-3">

          </div>
          </div>
        <SimpleProductSlider nextEl={'.swiper-nav-right2'} prevEl={'.swiper-nav-left2'} sliderData={popularFruits}/>
        </Section>

        <Section>
          <div className="flex justify-between mb-[50px]">
          <h2 className="text-heading6 md:text-heading5 lg:text-heading4 xl:text-heading3 text-blue-300">Best Sellers</h2>
            </div>
            <div className="flex gap-[24px]">
                <div className="bg-[url('/assets/images/bg-leaf.png')] bg-no-repeat bg-bottom bg-[#3BB77E] rounded-[10px] shadow-[20px_20px_40px_0_rgba(24,24,24,0.07)] p-12 pt-[38px] self-stretch flex-col justify-between max-w-[370px] hidden xl:flex">
                <h3 className="text-heading2 text-blue-300">Bring nature into your home</h3>
            <Link href="#" className="mt-6 pl-[15px] pr-2.5 py-2 bg-yellow-100 hover:bg-green-200 rounded-[3px] cursor-pointer inline-flex max-w-max items-center gap-2.5">
              <div className="text-xsmall text-white">Shop now</div>
              <IconBox icon={"icon-arrow-small-right "} size={24} />
            </Link>
          </div>
            <BestSellerSlider sliderData={BestSellers}/>
          </div>    

        </Section>

      <Section>
         <div className="flex justify-between items-center mb-[50px]">
          <h2 className="text-heading6 md:text-heading5 lg:text-heading4 xl:text-heading3 text-blue-300">Deals Of The Days</h2>
          <Link className="flex items-center" href="#">
            All Deals <IconBox icon={"icon-angle-small-right"} size={24}/>
          </Link>
        </div>
      <DealsOfTheDay sliderData={DealsOfTheDaysMock} />
      </Section>
      
      <Section>       
        <BottomSlider sliderData={TopSellingMock}/>
      </Section>
     
     </>
  );
  
}
