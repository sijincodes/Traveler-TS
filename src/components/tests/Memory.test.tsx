import { getByRole, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import Memory , {MemoryTestProps} from "../Memory";
import {memory} from "../../data/travelerData"

const setup = (props ? : MemoryTestProps) =>{
    const initialState = {
        memory : memory
    }
    return render (<Memory {...initialState} {...props} />)
}
describe ("Memory component rendered" , ()=>{
    beforeEach(()=>{
        setup()
    })
    test("Verify title of Memory component",()=>{
        expect(screen.getByRole("heading",{name:"Sweet Memories"})).toBeInTheDocument()
    })
    test("Verify Subtitle of Memory component",()=>{
        expect(screen.getByRole("heading",{name:"Come To Life Again"})).toBeInTheDocument()
    })
    test("Verify text of Memory component",()=>{
        expect(screen.getByText("We have always prioritized the comfort of our users, for the last 10 years.")).toBeInTheDocument()
    })
    test("Verify image of Memory component",()=>{
        expect(screen.getByAltText('memory-img')).toBeInTheDocument()
    })
    test.each(memory.experience)("Verify experience cards are displayed in Memory component", (card)=>{
        expect(screen.getByRole("heading",{name:card.number})).toBeInTheDocument()
    })
})
