import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import Newsletter from "../Newsletter";

describe('Verify Newsletter component',() => {
    beforeEach(()=>{
       return render(<Newsletter />)
    })

    test("Verify the title of Newsletter compoentn", ()=>{
        expect(screen.getByRole("heading",{name:'Get in Touch with Us!'})).toBeInTheDocument()
    })
    test("Verify subtitle of Newsletter component" , ()=>{
        expect(screen.getByText('Questions or Feeback ? We would love to hear from you')).toBeInTheDocument()
    })
    test("Verify input field in Newsletter component",()=>{
       const inputField = screen.getByRole('email')
       expect(inputField).toHaveAttribute('placeholder', 'Email Address')
    })
    test("Verify button is rendered in Newsletter component",()=>{
        expect(screen.getByRole('button',{name:"Submit"})).toBeInTheDocument()
    })
})