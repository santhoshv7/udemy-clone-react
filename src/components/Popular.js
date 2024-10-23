import Microchip from "../assets/microchip.jpg"
import Psychology from "../assets/psychology.jpg"
import Marketing from "../assets/marketing.jpg"
import Content from "../assets/content-writing.jpg"
import Figma from "../assets/figma.jpg"
import Hacking from "../assets/hacking.jpg"
import Linux from "../assets/linux.jpg"
import Management from "../assets/management.jpg"

function Popular() {
    return (
        <div class="popular">
            <h1 class="popular__title">Most Popular</h1>
            <p class="popular__subtitle">Pick the best fit</p>
            <div class="popular__container">

                <div class="course-card">
                    <img src={Microchip} alt="microchip" />
                    <h3>VSD - Signal Integrity</h3>
                    <p>Kunal Ghosh</p>
                    <p>4.2 ⭐⭐⭐⭐</p>
                    <p>Rs.549 <del>2999</del></p>


                </div>
                <div class="course-card">
                    <img src={Marketing} alt="Marketing" />
                    <h3>Marketing Analytics Mastery</h3>
                    <p>Stephen Tracey</p>
                    <p>4.5 ⭐⭐⭐⭐</p>
                    <p>Rs.999 <del>3099</del></p>


                </div>
                <div class="course-card">
                    <img src={Psychology} alt="psychology" />
                    <h3>Advanced Level Psychology</h3>
                    <p>Elmira Strange</p>
                    <p>5 ⭐⭐⭐⭐⭐</p>
                    <p>Rs.649 <del>2899</del></p>


                </div>
                <div class="course-card">
                    <img src={Linux} alt="linux" />
                    <h3>Linux Administration Bootcamp</h3>
                    <p>Jason Canon</p>
                    <p>4.9 ⭐⭐⭐⭐⭐</p>
                    <p>Rs.799 <del>4999</del></p>


                </div>

                <div class="course-card">
                    <img src={Hacking} alt="hacking" />
                    <h3>Tackling Cyberattacks - Best Practices</h3>
                    <p>Andrei Neagoie</p>
                    <p>4.4 ⭐⭐⭐⭐</p>
                    <p>Rs.499 <del>1999</del></p>


                </div>

                <div class="course-card">
                    <img src={Figma} alt="Figma" />
                    <h3>Figma UI UX Design Essentials</h3>
                    <p>Daniel Walter Scott</p>
                    <p>4.9 ⭐⭐⭐⭐⭐</p>
                    <p>Rs.599 <del>999</del></p>


                </div>

                <div class="course-card">
                    <img src={Management} alt="Management" />
                    <h3>The Project Management Course</h3>
                    <p>Stephen Mather</p>
                    <p>4.7 ⭐⭐⭐⭐</p>
                    <p>Rs.999 <del>2999</del></p>


                </div>

                <div class="course-card">
                    <img src={Content} alt="content" />
                    <h3>The Complete Content Writing Course</h3>
                    <p>Paul Jenkins</p>
                    <p>4.4 ⭐⭐⭐⭐</p>
                    <p>Rs.549 <del>2899</del></p>


                </div>


            </div>


        </div>

    )
}

export default Popular