import { useEffect } from 'react';

const Contact = () => {

    useEffect(() => {
        (function() {var script = document.createElement('script'); script.src = "https://paperform.co/__embed"; document.body.appendChild(script); })()
    }, [])
    return ( 
        <section className="container-fluid contact-section">
        <div className="container-wrapper">
          <div className="intro">
            <h1>
              Any question? please contact us, we're always quick to reply.
            </h1>
          </div>
          <div className="contacts">
            <div id="contact-form" className="form-wrapper">
              <form>
              <div data-paperform-id="enjfwnc9"></div>

             
{/*   
 */}              </form>
            </div>
            <div className="contacts-wrapper">
              <div className="c-box-wrapper">
                <div className="c-box">
                  <h3>Say hello</h3>
                  <p><a href="#">hello@cohostin.com</a></p>
                </div>
                <div className="c-box">
                  <h3>Support</h3>
                  <p><a href="#">customerservices@cohostin.com</a></p>
                </div>
                <div className="c-box">
                  <h3>Press</h3>
                  <p><a href="#">press@cohostin.com</a></p>
                </div>
                <div className="c-box">
                  <h3>9 to 5</h3>
                  <p>Monday til Friday<br />09:00am - 05:00pm</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>
     );
}
 
export default Contact;