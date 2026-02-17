import react from "react";

export default function Testimonials() {
    return (

<section className="mb-50">
    <div className="mb-5">
        <h2 className="text-center text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 leading-[1.1]">Loved By Thousand Travelers</h2>
        <p className="text-center">Experience real stories from satisfied travelers who discovered their perfect journeys with us</p>
    </div>

    <div className="flex flex-col lg:flex-row gap-10 px-20">

      <div className="rounded-lg shadow-2xl p-6">
        <p className="text-gray-500">⭐⭐⭐⭐⭐ <br />
        "Just Got Back From My Vacation In Africa All Thanks To This Amazing Travel Agency Since I Started Using Them I Have Had Less Hassles And Stress They Are Indeed Quality And I Would Love To Use Them Again I Highly Recommend Them To Any And Everyone"
        </p>
        <hr className="border-gray-300 my-3"/>
        <div className="flex gap-2">
            <div>
                <img src="https://plus.unsplash.com/premium_photo-1690407617542-2f210cf20d7e?q=80&w=2417&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className="rounded-full object-cover w-14 h-14 object-top"/>
            </div>
            <div>
                <h3 className="text-lg font-semibold">Sandra Wu</h3>
                <p>Architect</p>
            </div>
        </div>
      </div>

      <div className="rounded-lg shadow-2xl p-6 bg-blue-500">
        <p className="text-white">⭐⭐⭐⭐⭐ <br />
        "Just Got Back From My Vacation In Atrica All ThanksTo This Amazing Travel Agency Since I Started Using Them I Have Had Less Hassles And Stress They Are Indeed Qualitv And I Would Love To Use Them Again I Highlv Recommend Them To Anv And Evervone"
        </p>
        <hr className="border-gray-300 my-3"/>
        <div className="flex gap-2">
            <div>
                <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className="rounded-full object-cover w-14 h-14 object-top"/>
            </div>
            <div className="text-white">
                <h3 className="text-lg font-semibold">Jonathan Fluckr</h3>
                <p>Architect</p>
            </div>
        </div>
      </div>

      <div className="rounded-lg shadow-2xl p-6">
        <p className="text-gray-500">⭐⭐⭐⭐⭐ <br />
        "Just Got Back From My Vacation In Atrica All ThanksTo This Amazing Travel Agency Since I Started Using Them I Have Had Less Hassles And Stress They Are Indeed Qualitv And I Would Love To Use Them Again I Highlv Recommend Them To Anv And Evervone"
        </p>
        <hr className="border-gray-300 my-3"/>
        <div className="flex gap-2">
            <div>
                <img src="https://images.unsplash.com/photo-1629425733761-caae3b5f2e50?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className="rounded-full object-cover w-14 h-14 object-top"/>
            </div>
            <div>
                <h3 className="text-lg font-semibold">Ruth Bellese</h3>
                <p>Architect</p>
            </div>
        </div>
      </div>
    </div>
</section>
    
    );
}