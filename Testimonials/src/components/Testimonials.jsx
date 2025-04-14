import { useState } from "react";

const testData = [
    {
        "statement": "I was impressed by the ease of use and features of omnitirix. It's been a game-changer for my business.",
        "name": "Emily K."
    },
    {
        "statement": "The customer service team at Lex is top-notch. They helped me resolve my issue quickly and efficiently.",
        "name": "David L."
    },
    {
        "statement": "I've tried other options in the past, but Lex is by far the best. Highly recommended!",
        "name": "Sarah T."
    },
    {
        "statement": "I was skeptical at first, but omnitrix has exceeded my expectations in every way. It's a must-have for any company.",
        "name": "Mark Z."
    },
    {
        "statement": "The community support for omnitrix is amazing. I've learned so much from other users and the developers.",
        "name": "Jessica W."
    }
]
const Testimonials = () => {
    const [current, setCurrent] = useState(0);
    const handleNext = () => {

        setCurrent((current + 1) % testData.length)
    }
    const handlePrevious = () => {
        setCurrent((current - 1 + testData.length) % testData.length)

    }
    return (
        <div className="container">
            <h1>Testimonials</h1>
            <div className="testimonial">
                <p>{testData[current].statement}</p>
                <h2>{testData[current].name}</h2>
                <div className="buttons">
                    <button onClick={handlePrevious} >Previous</button>
                    <button onClick={handleNext}>Next</button>
                </div>
            </div>
        </div>
    )
}

export default Testimonials
