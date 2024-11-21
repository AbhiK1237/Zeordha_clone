import React from 'react'
import {render,screen} from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Hero from '../src/landing_page/home/Hero';
import { describe } from 'node:test';

describe("Home component",()=>{
    test("renders hero image",()=>{
        render(<Hero/>);
        const heroImage = screen.getByAltText("Hero Image");
        expect(heroImage).toBeInTheDocument();
        expect(heroImage).toHaveAttribute("src","media/images/homeHero.png")
    });
})
