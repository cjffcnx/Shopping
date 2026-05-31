import { HeroImg } from "../../image"



const HeroSection = () => {
  return (
    <div className="relative h-[600px]">
      <img src={HeroImg} alt="banner" className="h-full w-full absolute object-cover " />

{/* Euta parent div banaye hai maile  */
<div>
  {/* Content ko parent div banaye feri */}
  {/* Inset property chalako chu ni yesle chai sabai lai top bottom right left sabailai zero mah leraune kaam garcha ke */}
  <div className="absolute inset-0 dark:bg-black/50  bg-white/10 ">
    {/* Space dina lai maile div banaye hai sabai ko space barabar hunu parla ni tah */}
    <div className="h-full flex items-center ">
      <div className="space-y-4">
      <div><span className="section-btn">New Arrivals 2026</span></div>
      <h1 className="text-3xl font-bold text-white md:text-4xl  lg:text-5xl">Discover Your Perfect Style</h1>
      <p className="text-sm text-gray-300">Explore our latest collection for trendy fashion . Quality meets affordability.</p>


{/* Sm mah bhanne hudaina ke sm dekhi bhanne huncha ke bujhnu bhayosm dekhi row mah ayo ke  */}
      <div className="flex gap-3 flex-col sm:flex-row">
<button className="primary-btn">Shop Now</button>
<button className="secondary-btn" >View Collection</button>
        </div>

        {/* Yedi child div mah child position chalako cha bhane parent div mah parent position chalako hunai parcha */}

      </div></div>
    </div>
  </div>}

    </div>
  )
}

export default HeroSection