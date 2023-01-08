import React from "react"
import Hero from "../components/Hero";
import Features from "../components/Features";
import About from "../components/About";
import Subscribe from "../components/Subscribe";

const Home = () => {
    return (
        <div>
            <Hero />
            <Features />
            <About />
            <Subscribe />
        </div>
    )
}

export default Home