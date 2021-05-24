import React from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Header from "./Header";
import Typewriter from "typewriter-effect";
const Home = () => {
  return (
    <div>
      <Header />

      <header className="masthead">
        <div className="container h-100">
          <div className="row h-100 align-items-center justify-content-center text-center">
            <div className="col-lg-10 align-self-end">
              <h1 className="text-uppercase text-white font-weight-bold">
                {/* Lorem ipsum dolor sit amet consectetur adipiscing */}
                <Typewriter
                  options={{
                    strings: ["Welcome to Event.io", "India's leading Event Planning firm"],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </h1>
              <hr className="divider my-4" />
            </div>
            <div className="col-lg-8 align-self-baseline" style={{color:'#ESDFC5'}}>
              <p className="text-white-75 font-weight-bold mb-5" >
                Click below to start viewing latest events in your area. Book
                Exciting{" "}
                <p>
                  concerts,shows and your favourite gigs
                </p>
                {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                dictum porta dolor in sagittis */}
              </p>

              <Link
                to="/events"
                className="btn btn-lg rounded-pill btn-warning border-0"
              >
                Events
              </Link>
            </div>
          </div>
        </div>
      </header>

      <div id="testimonials">
        <h3 className="text-center m-5" style={{height:'100px'}}><strong>Testimonials</strong></h3>
        <Carousel
          showArrows={true}
          infiniteLoop={true}
          showThumbs={false}
          showStatus={true}
          autoPlay={true}
          interval={6100}
        >
          <div>
            <img
              src="https://res.cloudinary.com/practicaldev/image/fetch/s--0SCWkYwS--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/9dhr4cw2s0skgfig8qnw.png"
              alt="asdw"
            />
            <div className="myCarousel">
              <h3>Shirley Fultz</h3>
              <h4>Designer</h4>
              <p>
                It's amazing to organize events so easily. Event.io helped me organize one of the best fashion show ever,everyone even tweeted about it!
              </p>
            </div>
          </div>

          <div>
            <img
              src="https://res.cloudinary.com/practicaldev/image/fetch/s--nSI8V6RE--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/81co8nilff5r9eer3xga.png"
              alt="asdw"
            />
            <div className="myCarousel">
              <h3>Daniel Keystone</h3>
              <h4>Social Activist</h4>
              <p>
                The simple and intuitive design makes it easy for me to use. I
                highly recommend Event.io to my peers.
              </p>
            </div>
          </div>

          <div className="mt-3 mb-5">
            <img
              src="https://res.cloudinary.com/practicaldev/image/fetch/s--gRFMHqWs--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/1xwiaya5i7wweic3pz96.png"
              alt="asdw"
            />
            <div className="myCarousel">
              <h3>Theo Sorel</h3>
              <h4>Entrepreneur</h4>
              <p>
                I like how convenient it is to organize an event on my laptop, or on my phone when
                I'm on the go! 
              </p>
            </div>
          </div>
        </Carousel>
      </div>

      {/* Contact */}
      <section className="bg-dark page-section" id="contact">
        <div className="container" style={{ color:'white' , maxwidth:'150px'}}>
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <h2 className="mt-0">Let's Get In Touch!</h2>
              <hr className="divider my-4" />
              <p className="text-muted mb-5">
                Ready to start your next event with us? Give us a call or send
                us an email and we will get back to you as soon as possible!
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 ml-auto text-center mb-5 mb-lg-0">
              <i className="fas fa-phone fa-3x mb-3 text-muted"></i>
              <div>+91 7366661235</div>
            </div>
            <div className="col-lg-4 mr-auto text-center">
              <i className="fas fa-envelope fa-3x mb-2 text-muted"></i>
              {/* <!-- Make sure to change the email address in BOTH the anchor text and the link target below!--> */}
              <a className="d-block" href="mailto:">
                contact@event.io
              </a>
            </div>
          </div>
        </div>
        <Footer/>
      </section>  
    </div>
  );
};

export default Home;

// import React, { useState, useEffect } from "react";
// import { Row, Col } from "react-bootstrap";
// import Product from "./Product";

// const HomeScreen = () => {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     // const fetchProducts = async () => {
//     //   const { data } = await axios.get("/api/products");
//     //   setProducts(data);
//     // };
//     // fetchProducts();
//   }, []);

//   return (
//     <>
//       <h1>Latest Products</h1>
//       <Row>
//         {products.map((product) => (
//           <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
//             <Product product={product} />
//           </Col>
//         ))}
//       </Row>
//       <div classNameName="shadow-lg p-3 mb-5 bg-white rounded">
//         <h1>effect5</h1>
//       </div>
//     </>
//   );
// };

// export default HomeScreen;
