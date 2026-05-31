import { useEffect, useState } from "react"
import { BiSolidMoon, BiSolidSun } from "react-icons/bi"

const Darkmode = () => {

    // Hami js chai curly braces ra return ko bich mah lekhchum hai

    // initial value/ updated value agadi initial value ani pachadi updated value
    const [theme, setTheme] = useState("light")

    // Use state le chai ke kaam garcha bhane yesle chai component lai render garaune kaam garchai hai render ko meaning maile javascript ma 1+1 garey 2 aye tesma mmaile euta button banaye tema harek choti button click garda  increment hunu paryo so tara tyo mero ke mah show garcha terminal mah matrai show garcha hola ni tah tehi terminal ko kura browser mah dekhaunu parey hami useState use garcham

    // Jaba samma maile click garirahunchu component render huncha ani mero value update huncha yo paxi hami detailly kaam garchu aile just explain garey ke kaam garcha kasari kaam garcha

    // So, now tell me theme mah kasto data hunxa ra setTheme mah chai kasto data huncha

    // Jun theme cha tesma chai hamro kasto value huncha initial value huncha hai initial value huncha jun suru value  huncha tyo theme mah huncha

    // Jaba hamro component render huncha or browser mah load huncha taba tyo value chai hamro setTheme mah huncha hai setTheme chai hamro function huncha jaba maile click garchu tyo function call huncha ani tyo function le chai theme ko value change garna kaam garcha

    // Use state bhaneko ke ho sathi haru bhannu ta. use state chai harmo react bata aiirako cha ni so useState chai hamro ke ho ta react hook ho hai



    // Aba mah theme ko lagi local storage use garchu maile paila theme banako chu ki chuina check garchu yedi already theme banako cha bhane tyo theme lai set garchu haina maile theme banako chaina bhane default mah light set hunu paryo ni
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"


    // So malai aba bhannu useEffect bhaneko chai ke ho 

    // So aba herne hai useState le ke kaam garyo component render garaune kaam garcha browser mah dekhauda hamro value pani ta update hunu paryo hola ni update hunu paryo hola ni page lai chai chalaune kaam garcha hai useState le hai .

    // Aba mero value update matra bhako cha ni save bhako cha rah  value lai save garey bhane useEffect le side effect ko kaam garcha component render bhaisake pachi ke garne ho tesko kaam garcha tyo side effect ko kaam chai useEffect le garcha

    // state le render garaune kaam garcha effect le render bhaisake pachi side effect ko kaam garcha 
    useEffect(() => {
        // useEffect le side effect ko kaam garcha

        // maile theme chalauda kheri html ko harek element lai chalauna paunu paryo ni so first mah html ko element haru lai access garnu paryo  ni jastai maile theme chalauda kheri html ko junsaki tag mah chalauna paunu paryo hola ni

        // Maile div form harek element lai chalauna paunu paryo hai tesko lagi effect ma element lai access garchu i will make a variable for that

        const element = document.documentElement;
        // Document.element le html ko element lai access garna dincha hai

        // logic herne hai ekdam sajilo cha

        if (theme === "dark") {
            // Mero harek element haru mah dark theme chalauna paunu paryo ni
            element.classList.add("dark")

            // yedi mero theme dark cha bhane local storage mah pani dark hunu paryo haina

            // Hamilai localstorage bata tannu paryo bhane chai getItem ani save garnu parey we use setItem hai we use setItem hai
            localStorage.setItem("theme", "dark")
        }
        else {
            // Yedi mero theme dark chaina bhane light hunu paryo 
            element.classList.remove("dark")
            localStorage.setItem("theme", "light")
        }
    }, [theme])

    //   aghi ekchoti hami click garda render bhairathyo but hami barambar pani ta garcham hola ni tesko lagi chai we use dependency   array jaba hami click garcham taba rerender huncha ni tyo value update huney kaam chai rerender le garcha ni matlab function useEffect feri chalyo ke 

    //   theme jati choti click garchu rerender hunu paryo ni theme tesko lagi chai hami ke garchum bracket bhitra useEffect mah halidinchu


    return (
        // Yo chai infinity tag bhanchum hai yesle ke kaam div jasari nai garcha but div jasto container banune kaam chai gardaina

        // Aba chai logic laam la
        <>
            {theme === "dark" ? (
                // light huda theme dark jana lai moon ko icon cha and dark huda sun ko icon cha light jana lai
                <BiSolidSun onClick={() => setTheme("light")} className="text-2xl" />
            ) : (
                <BiSolidMoon onClick={() => setTheme("dark")} className="text-2xl" />
            )
            }
        </>



    )
}

export default Darkmode