import { LampFooter } from "../components/LampFooter"
import { HeroParallax } from "../components/hero"
import { FooterComp } from "../components/ui/Footer"
import { products } from "../utils/products"

export const Main = ()=>{
    return <div className="hide-scrollbar">
        <HeroParallax products={products}></HeroParallax>
        <LampFooter></LampFooter>
        <FooterComp></FooterComp>
    </div>

}