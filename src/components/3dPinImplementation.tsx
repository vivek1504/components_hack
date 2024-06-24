
import { PinContainer } from "./ui/3dPin";

export function AnimatedPinImplemetation() {
  return (
    <div className="h-[40rem] w-full flex items-center justify-center ">
      <PinContainer
        title="/space.isro.com"
        href="https://www.isro.gov.in/"
      >
        <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
          <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
            ISRO
          </h3>
          <div className="text-base !m-0 !p-0 font-normal">
            <span className="text-slate-500 ">
                Reaching for the stars, for the benefit of all.
            </span>
          </div>
          <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500">
                <img src="isro.jpg" className="bg-contain bg-no-repeat h-56 w-72">
                </img>
          </div>
        </div>
      </PinContainer>
    </div>
  );
}
