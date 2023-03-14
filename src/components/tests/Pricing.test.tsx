import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import Pricing , {PricingTestProp} from "../Pricing";
import {pricingapi} from "../../data/travelerData"

const setup = (props ? : PricingTestProp) =>{
    const initalData = {
        pricingapi:pricingapi
    }
    return render(<Pricing {...initalData} {...props} />)
}

describe ("Pricing component rendered" , ()=>{
    beforeEach(()=>{
        setup()
    })
    test('Verify Title of Pricing component',() => {
        expect(screen.getByRole("heading",{name:'Choose The Plan That Suits You'})).toBeInTheDocument()
    })
    test('Verify Text of Pricing component',() => {
        expect(screen.getByText('Many attractive offers by becomming a premium member')).toBeInTheDocument()
    })
    test('Verify Button1 Text of Pricing component',() => {
        expect(screen.getByRole("button",{name:'Monthly'})).toBeInTheDocument()
    })
    test('Verify Button2 Text of Pricing component',() => {
        expect(screen.getByRole("button",{name:'Yearly'})).toBeInTheDocument()
    })
    test.each(pricingapi.plans)("Verify Plan icons of Pricing Card content",(detail)=>{
        const icon = screen.getByTestId(detail.planicon)
        expect(icon).toHaveAttribute('src',detail.planicon)
    })
    test.each(pricingapi.plans)("Verify Title of Pricing Card content",(detail)=>{
        expect(screen.getByRole("heading",{name:detail.title}))
    })
    test.each(pricingapi.plans)("Verify Text of Pricing Card content",(detail)=>{
        expect(screen.getByText(detail.text)).toBeInTheDocument()
    })
    test.each(pricingapi.plans)("Verify Plan Type of Pricing Card content",(detail)=>{
        expect(screen.getByRole("heading",{name:detail.plantype}))
    })
    // test.each(pricingapi.plans)("Verify Plan Content of Pricing Card content",(detail)=>{
    //     const contentIcon = screen.getAllByRole("img",detail.plancontent.forEach(elm=>))
    // })
    test.each(pricingapi.plans)("Verify Button text of Pricing Card content",(detail)=>{
        expect(screen.getByRole("button",{name:detail.buttonText}))
    })

})