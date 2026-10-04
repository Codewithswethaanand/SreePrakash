import Categories from "../components/home/Categories";
import HeroCarousel from "../components/home/HeroCarousel";
import NewLaunch from "../components/home/NewLaunch";
import RoyallyCrafted from "../components/home/RoyallyCrafted";
import WhyTrustUs from "../components/home/WhyTrustUs";
import Heroad from "../components/home/Heroad";
import ShopByOccasions from "../components/home/ShopByOccasions";
import CustomerStories from "../components/home/CustomerStories";
import BestSellers from "../components/home/BestSellers";


export default function Home(){

return(

<>

<HeroCarousel/>
<Categories />
<WhyTrustUs />
<NewLaunch />
<RoyallyCrafted />
<Heroad />
<BestSellers />
<ShopByOccasions />
<CustomerStories />

</>

)

}