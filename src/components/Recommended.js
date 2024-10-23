import Numbers from "../assets/numbers.png"
import Brain from "../assets/brain.jpeg"
import Chipset from "../assets/chipset.jpeg"
import Typing from "../assets/typing.png"


function Recommended() {
    return (
        <div class="recommended">
            <h1 class="recommended__title">Recommended for you</h1>
            <p>Pick the best fit</p>
            <div class="recommended__container">
                <div class="course-card">
                    <img src={Numbers} alt="Numbers" />
                    <h3>2024 Python Data Visualization Masterclass</h3>
                    <p>Angela Yu</p>
                    <p>4.9 ⭐⭐⭐⭐</p>
                    <p>Rs.449 <del>1999</del></p>


                </div>
                <div class="course-card">
                    <img src={Brain} alt="Numbers" />
                    <h3>The Business Intelligence Analyst Course</h3>
                    <p>Col Steele</p>
                    <p>3.5 ⭐⭐⭐</p>
                    <p>Rs.1999 <del>4999</del></p>


                </div>
                <div class="course-card">
                    <img src={Chipset} alt="Numbers" />
                    <h3>Web Development Bootcamp 2024</h3>
                    <p>Dr. Agnel John</p>
                    <p>5 ⭐⭐⭐⭐⭐</p>
                    <p>Rs.849 <del>3499</del></p>


                </div>
                <div class="course-card">
                    <img src={Typing} alt="Numbers" />
                    <h3>Java for Beginners - Learn all the Basics of Java</h3>
                    <p>Navin Reddy</p>
                    <p>4.9 ⭐⭐⭐⭐</p>
                    <p>Rs.999 <del>2999</del></p>


                </div>


            </div>


        </div>

    )
}
export default Recommended