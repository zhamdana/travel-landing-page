import react from "react";

export default function Options() {
    return (

<section>
        <div className="mb-5">
            <h2 className="text-center text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 leading-[1.1]">Journey To The Skies Made Simple!</h2>
            <p className="text-center">Traveling Is A Wonderful Way To Explore New Places. Learn About Different Cultures And Gain <br />
            Unique Experiences</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-10 px-20">
            <div className="group relative shadow-2xl overflow-hidden rounded-lg">
                <img src="https://cdn.pixabay.com/photo/2017/08/05/22/46/notebook-2586328_1280.jpg" alt="" className="w-full h-full object-cover transition duration-300 group-hover:scale-110"/>
                
                <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-white">
                    
                        <svg className="w-10 h-10 mb-2" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2C8.69 2 6 4.69 6 8c0 4.5 6 12 6 12s6-7.5 6-12c0-3.31-2.69-6-6-6zm0 8.5A2.5 2.5 0 1 1 12 5a2.5 2.5 0 0 1 0 5.5z"/>
                        </svg>

                        <p className="text-2xl font-bold text-white">
                        Find Your Destination
                        </p>

                </div>
            </div>

            <div className="group relative shadow-2xl overflow-hidden rounded-lg">
                <img src="https://cdn.pixabay.com/photo/2017/08/05/22/46/notebook-2586328_1280.jpg" alt="" className="w-full h-full object-cover transition duration-300 group-hover:scale-110"/>
                
                <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-white">
                    <svg className="w-10 h-10 mb-2" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2L2 7l10 5 10-5-10-5z" />
                    </svg>
                    <p className="text-2xl font-bold text-white">
                    Book A Ticket
                    </p>

                </div>
            </div>

           <div className="group relative shadow-2xl overflow-hidden rounded-lg">
                <img src="https://cdn.pixabay.com/photo/2017/08/05/22/46/notebook-2586328_1280.jpg" alt="" className="w-full h-full object-cover transition duration-300 group-hover:scale-110"/>
                
                <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-white">
                    <svg className="w-10 h-10 mb-2" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                    </svg>

                    <p className="text-2xl font-bold text-white">
                    Play & Journey
                    </p>

                </div>
            </div>
        </div>
</section>
    
    );
}