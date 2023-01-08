// const myNav = document.querySelector("header")
// fetch('/headernav.html')
// .then(res=>res.text())
// .then(data=>{
//     myNav.innerHTML=data
// })

// const myFooter = document.querySelector(".footer")
// fetch('/footer.html')
// .then(res=>res.text())
// .then(data=>{
//     myFooter.innerHTML=data
// })


/*-------------------------------------- HEADER ------------------------------------*/
class MyHeader extends HTMLElement{
    connectedCallback(){
        this.innerHTML =    `
        <header>
            <a href="#" class="brand">NHBT</a>
            <div class="menu-btn"></div>
            <div class="navigation">
                <div class="navigation-items">
                <a href="#">Home</a>
                <a href="AboutUs.html">About</a>
                <a href="Explore.html">Explore</a>
                <a href="#">Gallery</a>
                <a href="#footer">Contact</a>
                </div>
            </div>
        </header>
        `
    }
}

customElements.define('my-header', MyHeader)





/*-------------------------------------- FOOTER ------------------------------------*/
class MyFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
                <footer class="footer" id="footer">
                <div class="footer-container">
                <div class="row">
                    <div class="footer-col">
                    <h4>company</h4>
                    <ul>
                        <li><a href="#">about us</a></li>
                        <li><a href="#">our services</a></li>
                        <li><a href="#">privacy policy</a></li>
                        <li><a href="#">affiliate program</a></li>
                    </ul>
                    </div>
                    <div class="footer-col">
                    <h4>get help</h4>
                    <ul>
                        <li><a href="#">FAQ</a></li>
                        <li><a href="#">shipping</a></li>
                        <li><a href="#">returns</a></li>
                        <li><a href="#">order status</a></li>
                        <li><a href="#">payment options</a></li>
                    </ul>
                    </div>
                    <div class="footer-col">
                    <h4>online shop</h4>
                    <ul>
                        <li><a href="#">watch</a></li>
                        <li><a href="#">bag</a></li>
                        <li><a href="#">shoes</a></li>
                        <li><a href="#">dress</a></li>
                    </ul>
                    </div>
                    <div class="footer-col">
                    <h4>follow us</h4>
                    <div class="social-links">
                        <a href="https://www.facebook.com/parthib.sen.58"><i class="fab fa-facebook-f"></i></a>
                        <a href="#"><i class="fab fa-twitter"></i></a>
                        <a href="https://www.instagram.com/its_too_me/"><i class="fab fa-instagram"></i></a>
                        <a href="https://www.linkedin.com/in/parthib-sen-64416a224/"><i class="fab fa-linkedin-in"></i></a>
                    </div>
                    </div>
                </div>
                </div>
            </footer>

        `
    }
}

customElements.define('my-footer', MyFooter)
