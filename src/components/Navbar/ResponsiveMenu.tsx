// Props use garda hamro yeta responsive page mah kasto type ko data aucha  show bhaye true false bhaye not show show hamro data kasto mah aiirako cha ta boolean mah hai

import { NavLink } from "../../constant/NavLink"
import { Logo } from "../../image"

// typescript mah chai kasto khalko data aiiracha dinai parcha

type ResponsiveMenuProps = {
    showMenu: boolean
}
const ResponsiveMenu = ({ showMenu }: ResponsiveMenuProps) => {
    return (
        // Back tick ko kaam ke ta string ko bich mah kunai hamile value rakhnu paryo multiple value rakhnu paryo testo bela my name is tespaxi name ta je pani huna sakyo ni My name is string bhayo tesko bich mah malai value chahiyo yesto thau mah chai hami back tick use garcham ke

        // Notice hamile fixed position haleko cham position le ke garcha overlap garne kaam garcha 
        <div className={`${showMenu ? "left-0" : "left-[-100%]"} fixed top-0 dark:bg-gray-900 h-screen w-[75%] dark:text-white px-8 py-8 z-50 duration-500 flex flex-col z-50  `
        }>
            <div>{<img src={Logo} alt="logo" className="h-16 w-16" />}</div>

            <div> <ul className="flex flex-col gap-4">
                {NavLink.map((data) => (
                    <li key={data.id} className="text-xl font-semibold border-b border-gray-100 dark:border-gray-800 hover:text-primary">
                        <a href={data.path}>{data.name}</a>
                    </li>
                ))}
            </ul> </div>
          
            <div>
  <button className="primary-btn ">
                Join Now
            </button>
            </div>
        </div>
    )
}

export default ResponsiveMenu