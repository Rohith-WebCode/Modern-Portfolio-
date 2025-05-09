import { CardSpotlight } from "../components/ui/card-spotlight";
import {Services} from "../components/data/Data"

export function CardSpotlightUI() {
  return (
    <div className="py-20">
      <h1 className ="text-lg md:text-3xl text-neutral-50 text-center font-bold">Services Tailored to Your <span className="Colorfull-text">Vision</span></h1>

      <div className={`md:relative mx-auto md:h-[500px] my-4`}>
   {Services.map((data, index)=>(
    <div className={`md:absolute ${data.className}`} key={index}>
      <CardSpotlight className={`w-full md:w-[42rem] my-5 md:my-0 ${data.classNameforcard}`}>
        <div className="flex flex-row">
        <div className="text-neutral-200 mt-4 mr-7 relative z-20">
        <data.img className="text-5xl" loading="lazy"/>
        </div>
        <div>
        <h1 className="text-base md:text-xl font-bold relative z-20 mt-2 text-white">{data.title}</h1>  
 
       <p className="text-neutral-300 mt-3 relative z-20 text-sm">
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
