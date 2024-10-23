
function Navbar() {
    return (<div class="navbar">
        <div class="navbar__s1">
            <div class="navbar__s1__title">
                <h1>Udemy</h1>
            </div>

        </div>
        <div class="navbar__s2">
            <i class="fa-solid fa-magnifying-glass" style={{ color: '#010b13' }}></i>
            <input placeholder="Search for anything here. Tech, Business, Art ..." />
        </div>

        <div class="navbar__s3">
            <p>Courses</p>

            <div class="mylearning">
                <p>My Learning</p>
                <div class="mylearning__popup">
                    <p>You did not purchase anything yet</p>
                </div>
            </div>
            <i class="fa-solid fa-cart-shopping" style={{ color: '#010813' }}></i>
            <i class="fa-solid fa-bell" style={{ color: '#010813' }}></i>
            <i class="fa-solid fa-user" style={{ color: '#00040a' }}></i>
        </div>

        <div class="navbar__s4">
            <i class="fa-solid fa-bars"></i>
        </div>


    </div>)
}

export default Navbar