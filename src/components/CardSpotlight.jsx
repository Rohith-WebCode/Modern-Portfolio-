import { CardSpotlight } from "../components/ui/card-spotlight";
import {Services} from "../components/data/Data"

export function CardSpotlightUI() {
  return (
    <div className="my-6">
      <h1 className ="text-2xl md:text-5xl text-neutral-50 text-center">Services Tailored to Your Vision</h1>

      <div className={`md:relative mx-auto h-[500px] my-4`}>
   {Services.map((data, index)=>(
    <div className={`md:absolute ${data.className}`} key={index}>
      <CardSpotlight className={`w-full my-5 ${data.classNameforcard}`}>
        <div className="flex flex-row">
        <div className="text-neutral-200 mt-4 mr-7 relative z-20">
        <data.img className="text-5xl" />
        </div>
        <div>
        <h1 className="text-xl font-bold relative z-20 mt-2 text-white">{data.title}</h1>  
 
       <p className="text-neutral-300 mt-3 relative z-20 text-xs">
      {data.description}
       </p>
        </div>

        </div>

    </CardSpotlight>
    </div>


))}
</div>
    </div>

  );
}
