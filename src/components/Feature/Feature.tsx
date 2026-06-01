import { AboutFeatures } from '../../constant/Feature'

const Feature = () => {
    return (
        <div className="dark:bg-gray-100 py-10 lg:py-14">
            {/* Container ko lagi maile euta div banaye hai */}
            <div className="container">
                {/* 4 ota features haru ko lagi malai euta parent div hunu paryo hai */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-4"> 
                    {/* Aba mapping garnu paryo hai mapping kasari garne ta */}

                    {AboutFeatures.map((item) => {
                        const Icon = item.icon

                        return (
                            <div key={item.id} className=" group bg-white dark:bg-gray-700 p-4 rounded-xl lg:rounded-2xl dark:hover:text-primary  duration-500 border border-gray-100 dark:border-gray-700 hover:border-primary ">
                                <div  className="h-12 w-12 lg:h-16  lg:w-16 bg-amber-500-primary rounded-xl lg:rounded-2xl  flex justify-center items-center group-hover: bg-primary mb-6">
                                    <Icon className="text-primary text-sm lg:text-xl group-hover:text-white font-semibold duration-500" />
                                </div>
                                <p className="text-sm lg:text-base font-bold group-hover:text-primary duration-500 text-white">{item.text}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Feature