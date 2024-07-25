import "./Contact.css";
// import "../../../node_modules/bootstrap/dist/css/bootstrap.css"

export default function Contact() {
  return (
    <>
      <section className="section">
        <div className="back"></div>
        <div className=".row contact-head">
          <div className="col-9 contact">
            <div className="row pt-3">
              <div className="col-lg-6 col-12 contact-info">
                <h3>Contact Us</h3>
                <div className="phone social">
                  <i class="fa-solid fa-phone-volume"></i>
                  <a href="">
                    <h6>01550406840</h6>
                  </a>
                </div>
                <div className="email social">
                  <i class="fa-solid fa-envelope"></i>
                  <a href="">
                    {" "}
                    <h6>contact@gmail.com</h6>
                  </a>
                </div>
                <div className="location social">
                  <i class="fa-solid fa-location-dot"></i>
                  <a href="">
                    {" "}
                    <h6> 203, Envato Labs, Behind Alis Steet, Australia</h6>
                  </a>
                </div>
                <div className="social-icons"></div>
              </div>
              <div className="col-lg-6 col-12 form-contact">
                <input type="text" placeholder="Name :" />
                <br />
                <input type="text" placeholder="Email :" />
                <br />
                <textarea rows={5} name="Enter your message" id="">
                  Enter your message
                </textarea>
                <button className="submit-contact"> Send</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
