import { FaPhoneAlt } from "react-icons/fa"
import { Logo } from "../../constant/image"
import { NavLink } from "../../constant/NavLink"
import Darkmode from "./Darkmode"
import { useState } from "react"
import { CiMenuBurger } from "react-icons/ci"
import { IoMdClose } from "react-icons/io"
import ResponsiveMenu from "./ResponsiveMenu"
// {/* Aba mobile laptop sabailai chuttai size hola hai responsive garna tailwind ko docs mah herne hai know the breakpoints size width  aba yo garna mah yeuta variable banauchu*/}

// Use state le component render garauncha yesko meaning showMenu lai nikalne jhikalne kaam garcha paila nai hamburger show  bhayera ta aune haina just paxi click garesi aune ho so I set it false

// Show menu mah kasto value and setMenu mah kasto data halcham hami
// initial and updated value huncha yo chai remember garne hai




const Navbar = () => {
    const [showMenu, setMenu] = useState(false)
    const handleMenuToggle = () => setMenu(!showMenu);
    return (
        <div>

            {/* aba malai navbar ma 2 ota section bhayeko le 2 ota div chahiyo */}

            {/* Parent div */}
            <div className="bg-primary">
                {/* top ko lagi 1 div --Navbar */}

                {/* Aba parent div ta yo ho ni sabai lai eutai line mah leraunu parla ni tesko lagi mah ke garchu className flex */}
                <div className=' container hidden md:flex items-center justify-between  ' >
                    {/* Top ko bhitra euta malai number and icon arko malai kehi text yesko lagi euta div as it is shown side by side not separtately*/

                        <div className='flex items-center gap-3 p-2'> <p><FaPhoneAlt /></p> <span>Number</span> </div>}

                    <div><p>Free shipping above Rs 2000 </p></div>
                </div>

                {/* Bottom ko lagi arko div --Navbar*/}

                <div className="dark:bg-black dark:text-white">
                <div className=' container flex items-center justify-between gap-6  '> <div><img src={Logo} alt="Logo" className='w-20 h-16' /></div>
                    <div className="flex flex-1 items-center justify-end">

                        {/* Aba yehi navbar ko bottom bhitra rahera euta naya div mah navLinks haru tannu parne cha */

                            <div className="flex flex-1 items-center w-full">
                                <ul className='hidden md:flex w-full items-center justify-end gap-5 h-full'>
                                    {/* div ko unordered list bhitra navlink lai curly braches mah lekhne */}

                                    {/* map le chai ke garcha transform ko kaam garcha euta thau bata arko thau tira purayeune kaam garcha so map lai parameter ya euta batta dinu parcha jaha sabai kura hamile halchum ani tyo halekai kura lai hamile id, name haru tanyem hai */}
                                    {NavLink.map((item) => {
                                        return (

                                            // because hamro id sabai ko unique huncha li bhitra aune ho content so li bhitra hamile id tanyem ra tei id ko addhar mah path , ra name 
                                            <li key={item.id} className='font-semibold text-lg hover:text-yellow-500 duration-500'>
                                                <a href={item.path}>{item.name}</a>
                                            </li>
                                        );
                                    })}

                                    <button className='primary-btn'>Shop Now</button>
                                    <Darkmode />
                                </ul>
                            </div>}

                        <div className="flex  md:hidden  items-center gap-3 ">
                            <Darkmode />

                            {/* Menu button:
        When showMenu is true, show the close icon.
        When showMenu is false, show the burger menu icon.
    */}

                            {showMenu ? (
                                <IoMdClose onClick={handleMenuToggle} className="text-2xl" />
                            ) : (
                                <CiMenuBurger onClick={handleMenuToggle} className="text-2xl" />
                            )}
                        </div>

</div>
                    </div>


                </div>

            </div>


            {/* Maile jun lekhe showMenu yeslai ke bhancha ta props bhancha hai properties props bhaneko parent to child data leramcham bhane teslai hami props bhancham hai */}
            <ResponsiveMenu showMenu={showMenu} />
        </div>
    )
}

export default Navbar