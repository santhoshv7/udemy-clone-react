import Sale from "../assets/sale-image.jpg"
function SalesImage() {
    return (<div class="sales-image">
        <img src={Sale} alt="sales-image" />
        <div class="sale-image__offer">
            <h3>Udemy Flash Sale! 24 hours to save</h3>
            <p>Get the top courses for just Rs.499. Just one day to save but a lifetime to learn</p>
        </div>

    </div>)
}
export default SalesImage