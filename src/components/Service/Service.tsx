
import { Services } from "../../constant/Service"

const Service = () => {
    return (
        <div className="py-14 lg:py-16 dark:bg-gray-900">
            <div className="container mb-14 space-y-5">
                <span className="section-btn mt-6 dark:text-white">Our categories</span>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold dark:text-white">
                    Shop by <span className="text-primary ">Category</span>
                </h1>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-6 text-white bg-black/50 p-4 lg:p-6 rounded-xl lg:rounded-2xl container mt-10">
                {Services.map((item) => {
                    const Icon = item.icon
                    return (
                        <div key={item.id} className=" dark:bg-black p-4 lg:p-8 space-y-4 rounded-xl lg:rounded-2xl  border border-gray-100 dark:hover:border-primary group duration-500">
                            <div>
                                <Icon  className="h-12 lg:h-16 w-16 bg-primary/10 flex justify-center items-center rounded-xl lg:rounded-2xl text-primary group-hover:text-white"/>
                            </div>
                            <h1 className="font-bold text-lg lg:text-xl dark:text-white">{item.title}</h1>

                            <div>
                                <span className="text-xl lg:text-3xl font-bold text-primary">{item.price}</span>
                                <span className="text-gray-500 text-xs lg:text-xl" > {item.duration}</span>
                            </div>

                            <ul className="space-y-2">
                                {item.description.map((desc, index) => (
                                    
                                    <li  key={index}  className="flex items-center gap-2 md:gap-3 dark:text-white ">
                                        {/* Gap use garda flex space diney bittikai vertical mah space */}
                                        
                                  <span className="h-5 w-5 bg-primary/10 flex items-center justify-center rounded-full ">
                                  
                                  <span className="h-1.5 w-1.5 bg-primary rounded-full"></span>
                                  </span>      {desc}</li>
                                ))}
                            </ul>
                            <button className="primary-btn w-full ">Shop Now</button>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Service