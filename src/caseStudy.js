import React, { useState, useEffect } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import "./style.css";
import loginLowFidelity from "./images/loginLowFidelity.png";
import homeLowFidelity from "./images/homeLowFidelity.png";
import foodDetailsLowFidelity from "./images/foodDetailsLowFidelity.png";
import paymentLowFidelity from "./images/paymentLowFidelity.png";
import ordersLowFidelity from "./images/ordersLowFidelity.png";
import orderConfirmationLowFidelity from "./images/orderConfirmationLowFidelity.png";
import aboutLowFidelity from "./images/aboutLowFidelity.png";
import contactLowFidelity from "./images/contactLowFidelity.png";
import profileLowFidelity from "./images/profileLowFidelity.png";
import loginHighFidelity from "./images/loginHighFidelity.png";
import homeHighFidelity from "./images/homeHighFidelity.png";
import foodDetailsHighFidelity from "./images/foodDetailsHighFidelity.png";
import paymentHighFidelity from "./images/paymentHighFidelity.png";
import ordersHighFidelity from "./images/ordersHighFidelity.png";
import orderConfirmationHighFidelity from "./images/orderConfirmationHighFidelity.png";
import aboutHighFidelity from "./images/aboutHighFidelity.png";
import contactHighFidelity from "./images/contactHighFidelity.png";
import profileHighFidelity from "./images/profileHighFidelity.png";
import paperWireframe from "./images/paperWireframe.jpeg";
function CaseStudy() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [showScrollTop, setShowScrollTop] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  const fadeUp = {
    hidden: {
      opacity: 0,
      y: 60,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
      },
    },
  };
  const AnimatedSection = ({ children, className = "" }) => {
    return (
      <motion.section
        className={className}
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {children}
      </motion.section>
    );
  };
  return (
    <div>
      <motion.div className="scroll-progress" style={{ scaleX }} />
      {/*  HERO SECTION  */}
      <motion.section
        className="hero-section"
        variants={fadeUp}
        initial="hidden"
        animate="visible"
      >
        <span className="hero-badge">UX Case Study</span>
        <h1 className="hero-title">Food Delivery App</h1>
        <p className="hero-description">
          A user-centered mobile application designed to simplify food ordering
          for busy professionals and users with disabilities through a fast,
          accessible, and trustworthy ordering experience.
        </p>
        <div className="hero-tags">
          <span className="tag">UX Design</span>
          <span className="tag">Case Study</span>
          <span className="tag">Mobile App</span>
          <span className="tag">Accessibility</span>
        </div>
      </motion.section>
      {/*  PROJECT OVERVIEW  */}
      <AnimatedSection id="overview" className="content-section">
        <h2>Project Overview</h2>
        <p>
          <strong>Food Delivery App</strong> is a user-centered mobile
          application designed to simplify the food ordering experience for busy
          professionals and users with disabilities. The goal of this project is
          to help users save time, access fresh food easily, and provide a
          seamless ordering experience with clear confirmation and delivery
          information.
        </p>
        <div className="overview-grid">
          <div className="overview-card">
            <i className="fa-solid fa-utensils"></i>
            <h3>Project Type</h3>
            <p>Mobile Food Ordering Application</p>
          </div>
          <div className="overview-card">
            <i className="fa-solid fa-users"></i>
            <h3>Target Users</h3>
            <p>Busy Professionals & Users with Disabilities</p>
          </div>
          <div className="overview-card">
            <i className="fa-solid fa-bullseye"></i>
            <h3>Primary Goal</h3>
            <p>
              Create a simple, fast and accessible food ordering experience.
            </p>
          </div>
          <div className="overview-card">
            <i className="fa-solid fa-heart"></i>
            <h3>Core Focus</h3>
            <p>User Trust, Accessibility and Ease of Use</p>
          </div>
        </div>
      </AnimatedSection>
      {/*  RESEARCH  */}
      <AnimatedSection id="research" className="content-section">
        <h2>Research Methods</h2>
        <div className="research-grid">
          <div className="research-card">
            <i className="fa-solid fa-comments"></i>
            <h3>User Interviews</h3>
            <p>
              Conducted interviews to understand users' food ordering habits,
              challenges, and expectations.
            </p>
          </div>
          <div className="research-card">
            <i className="fa-solid fa-chart-column"></i>
            <h3>Competitor Analysis</h3>
            <p>
              Evaluated existing food delivery platforms to identify strengths,
              weaknesses, and opportunities for improvement.
            </p>
          </div>
          <div className="research-card">
            <i className="fa-solid fa-flask"></i>
            <h3>Usability Testing</h3>
            <p>
              Tested user interactions to identify usability issues and improve
              the overall ordering experience.
            </p>
          </div>
        </div>
      </AnimatedSection>
      {/*  USER PERSONA  */}
      <AnimatedSection id="personas" className="content-section">
        <h2>User Persona</h2>
        <div className="persona-grid">
          <div className="persona-card">
            <div className="persona-header">
              <div className="persona-icon">
                <i className="fa-solid fa-user"></i>
              </div>
              <div>
                <h3>Sarah</h3>
                <p>Busy Professional</p>
              </div>
            </div>
            <div className="persona-info">
              <span>
                <strong>Age:</strong> 25
              </span>
              <span>
                <strong>Occupation:</strong> Working Professional
              </span>
            </div>
            <div className="persona-block">
              <h4>
                <i className="fa-solid fa-bullseye"></i>
                Goals
              </h4>
              <ul>
                <li>Order food quickly without visiting restaurants.</li>
                <li>Receive fresh and high-quality meals.</li>
                <li>
                  Get clear information about order status and delivery time.
                </li>
              </ul>
            </div>
            <div className="persona-block">
              <h4>
                <i className="fa-solid fa-triangle-exclamation"></i>
                Pain Points
              </h4>
              <ul>
                <li>Limited time for preparing or buying food.</li>
                <li>Delayed food deliveries.</li>
                <li>Unclear order confirmation after payment.</li>
                <li>Difficulty understanding complex app features.</li>
              </ul>
            </div>
            <div className="persona-block">
              <h4>
                <i className="fa-solid fa-heart"></i>
                Needs
              </h4>
              <ul>
                <li>Simple and intuitive navigation.</li>
                <li>Fast and reliable ordering process.</li>
                <li>Accessible features for a better experience.</li>
              </ul>
            </div>
          </div>
        </div>
      </AnimatedSection>
      {/*  USER JOURNEY  */}
      <AnimatedSection id="journeys" className="content-section">
        <h2>User Journey</h2>
        <div className="journey-card">
          <div className="journey-step">
            <div className="journey-number">01</div>
            <div>
              <h3>Open the App</h3>
              <p>User opens the food delivery application.</p>
            </div>
          </div>
          <div className="journey-line"></div>
          <div className="journey-step">
            <div className="journey-number">02</div>
            <div>
              <h3>Search for Food</h3>
              <p>
                User searches for their desired food or explores available
                options.
              </p>
            </div>
          </div>
          <div className="journey-line"></div>
          <div className="journey-step">
            <div className="journey-number">03</div>
            <div>
              <h3>View Food Details</h3>
              <p>
                User checks the food image, price, freshness, reviews, and
                estimated delivery time.
              </p>
            </div>
          </div>
          <div className="journey-line"></div>
          <div className="journey-step">
            <div className="journey-number">04</div>
            <div>
              <h3>Place Order</h3>
              <p>
                User selects a food item and clicks the
                <strong> Order Now </strong>
                button.
              </p>
            </div>
          </div>
          <div className="journey-line"></div>
          <div className="journey-step">
            <div className="journey-number">05</div>
            <div>
              <h3>Complete Payment</h3>
              <p>
                User chooses a payment method and completes the payment
                securely.
              </p>
            </div>
          </div>
          <div className="journey-line"></div>
          <div className="journey-step">
            <div className="journey-number">06</div>
            <div>
              <h3>Receive Confirmation</h3>
              <p>
                User receives a confirmation message with the estimated delivery
                time.
              </p>
            </div>
          </div>
          <div className="journey-line"></div>
          <div className="journey-step">
            <div className="journey-number">07</div>
            <div>
              <h3>Receive Delivery</h3>
              <p>User waits for the delivery and receives the ordered food.</p>
            </div>
          </div>
        </div>
      </AnimatedSection>
      {/*  KEY INSIGHTS  */}
      <AnimatedSection id="insights" className="content-section">
        <h2>Key Insights</h2>
        <div className="insights-grid">
          <div className="insight-card">
            <i className="fa-solid fa-layer-group"></i>
            <h3>Simple Interfaces</h3>
            <p>Users prefer simple interfaces with minimal complexity.</p>
          </div>
          <div className="insight-card">
            <i className="fa-solid fa-circle-check"></i>
            <h3>Clear Confirmation</h3>
            <p>Clear order confirmation builds user trust and confidence.</p>
          </div>
          <div className="insight-card">
            <i className="fa-solid fa-clock"></i>
            <h3>Delivery Visibility</h3>
            <p>Showing estimated delivery time reduces user anxiety.</p>
          </div>
          <div className="insight-card">
            <i className="fa-solid fa-leaf"></i>
            <h3>Freshness Indicators</h3>
            <p>Freshness indicators help users make better food choices.</p>
          </div>
          <div className="insight-card">
            <i className="fa-solid fa-universal-access"></i>
            <h3>Accessibility</h3>
            <p>
              Accessibility features improve usability for users with different
              abilities.
            </p>
          </div>
        </div>
      </AnimatedSection>
      {/*  EDGE CASES  */}
      <AnimatedSection id="edge-cases" className="content-section">
        <h2>Edge Cases</h2>
        <div className="edge-grid">
          <div className="edge-card">
            <i className="fa-solid fa-wifi"></i>
            <h3>Connection Lost</h3>
            <p>Internet connection is lost during the ordering process.</p>
          </div>
          <div className="edge-card">
            <i className="fa-solid fa-credit-card"></i>
            <h3>Payment Issue</h3>
            <p>
              Payment is completed but the order confirmation is not received.
            </p>
          </div>
          <div className="edge-card">
            <i className="fa-solid fa-ban"></i>
            <h3>Item Unavailable</h3>
            <p>A selected food item becomes unavailable before checkout.</p>
          </div>
          <div className="edge-card">
            <i className="fa-solid fa-location-dot"></i>
            <h3>Wrong Address</h3>
            <p>User enters an incorrect delivery address.</p>
          </div>
          <div className="edge-card">
            <i className="fa-solid fa-wheelchair"></i>
            <h3>Accessibility Difficulty</h3>
            <p>
              Users with disabilities face difficulty navigating the
              application.
            </p>
          </div>
        </div>
      </AnimatedSection>
      {/*  ACCESSIBILITY  */}
      <AnimatedSection id="accessibility" className="content-section">
        <h2>Accessibility Needs</h2>
        <div className="accessibility-grid">
          <div className="accessibility-card">
            <i className="fa-solid fa-compass"></i>
            <h3>Consistent Navigation</h3>
            <p>
              Easy and consistent navigation helps users move through the app
              confidently.
            </p>
          </div>
          <div className="accessibility-card">
            <i className="fa-solid fa-microphone"></i>
            <h3>Voice Support</h3>
            <p>Voice support assists users with visual difficulties.</p>
          </div>
          <div className="accessibility-card">
            <i className="fa-solid fa-font"></i>
            <h3>Readable Typography</h3>
            <p>
              Clear typography and readable text sizes improve accessibility.
            </p>
          </div>
          <div className="accessibility-card">
            <i className="fa-solid fa-hand-pointer"></i>
            <h3>Large Buttons</h3>
            <p>Large and understandable buttons make interactions easier.</p>
          </div>
          <div className="accessibility-card">
            <i className="fa-solid fa-circle-info"></i>
            <h3>Clear Feedback</h3>
            <p>
              Clear labels and error messages help users understand and recover
              from errors.
            </p>
          </div>
          <div className="accessibility-card">
            <i className="fa-solid fa-shapes"></i>
            <h3>Simple Design Patterns</h3>
            <p>
              Familiar and simple design patterns improve overall usability.
            </p>
          </div>
        </div>
      </AnimatedSection>
      {/*  DEFINE PHASE  */}
      <AnimatedSection id="define" className="content-section">
        <h2>Define Phase</h2>
        <div className="define-grid">
          {/* Problem Statement */}
          <div className="define-card">
            <div className="define-icon">
              <i className="fa-solid fa-triangle-exclamation"></i>
            </div>
            <h3>Problem Statement</h3>
            <p>
              Busy professionals and people with disabilities need a simple and
              reliable way to order fresh food because they have limited time or
              difficulty visiting restaurants. Existing food delivery apps often
              lack clear order confirmation and estimated delivery time,
              reducing user confidence.
            </p>
          </div>
          {/* Hypothesis Statement */}
          <div className="define-card">
            <div className="define-icon">
              <i className="fa-solid fa-lightbulb"></i>
            </div>
            <h3>Hypothesis Statement</h3>
            <p>
              We believe that adding a clear order confirmation message,
              estimated delivery time, freshness tags, and a simple ordering
              process will increase user trust, improve usability, and help
              users complete food orders more efficiently.
            </p>
          </div>
        </div>
        {/*  VALUE PROPOSITION  */}
        <div className="value-proposition">
          <div className="value-icon">
            <i className="fa-solid fa-gem"></i>
          </div>
          <div className="value-content">
            <h3>Value Proposition</h3>
            <p>
              The Food Delivery App enables users to quickly order fresh food
              through a simple and accessible interface. It builds user
              confidence by displaying freshness tags, secure payment options,
              clear order confirmation, and estimated delivery time.
            </p>
          </div>
        </div>
      </AnimatedSection>
      {/*  IDEATE PHASE  */}
      <AnimatedSection id="ideate" className="content-section">
        <h2>Ideate Phase</h2>
        {/*  COMPETITIVE AUDIT  */}
        <div className="audit-card">
          <div className="audit-header">
            <div className="audit-icon">
              <i className="fa-solid fa-magnifying-glass-chart"></i>
            </div>
            <div>
              <span className="section-label">Competitive Analysis</span>
              <h3>Competitive Audit</h3>
            </div>
          </div>
          <p>
            A competitive audit was conducted by analyzing
            <strong> Foodpanda </strong>
            as one of the leading food delivery applications. The analysis
            showed that Foodpanda provides a simple search feature, a wide
            variety of food options, and an easy ordering process.
          </p>
          <p>
            However, some features are not easy to understand, and the order
            confirmation screen does not clearly display the estimated delivery
            time.
          </p>
          <p>
            Based on these findings, the proposed solution focuses on providing
            a more intuitive user experience through clear confirmation
            messages, estimated delivery time, freshness tags, and simple
            navigation.
          </p>
        </div>
        {/*  HMW QUESTIONS  */}
        <div className="hmw-section">
          <div className="hmw-heading">
            <span className="section-label">Problem Exploration</span>
            <h3>How Might We?</h3>
          </div>
          <div className="hmw-grid">
            <div className="hmw-card">
              <span className="hmw-number">01</span>
              <i className="fa-solid fa-clock"></i>
              <p>How might we help users save time while ordering food?</p>
            </div>
            <div className="hmw-card">
              <span className="hmw-number">02</span>
              <i className="fa-solid fa-shield-heart"></i>
              <p>How might we increase users' confidence in food quality?</p>
            </div>
            <div className="hmw-card">
              <span className="hmw-number">03</span>
              <i className="fa-solid fa-universal-access"></i>
              <p>
                How might we make the ordering process simple and accessible?
              </p>
            </div>
          </div>
        </div>
      </AnimatedSection>
      {/*  CRAZY EIGHTS  */}
      <AnimatedSection id="crazy-eights" className="content-section">
        <h2>Crazy Eights</h2>
        <p className="section-intro">
          During the ideation process, multiple ideas were explored to solve
          users' pain points. The final concepts selected for the design
          include:
        </p>
        <div className="crazy-grid">
          <div className="crazy-card">
            <i className="fa-solid fa-leaf"></i>
            <h3>Fresh Tags</h3>
            <p>Display a Fresh Tag on every food item.</p>
          </div>
          <div className="crazy-card">
            <i className="fa-solid fa-clock"></i>
            <h3>Delivery Time</h3>
            <p>Show an estimated delivery time after the order is placed.</p>
          </div>
          <div className="crazy-card">
            <i className="fa-solid fa-circle-check"></i>
            <h3>Order Confirmation</h3>
            <p>Provide a clear order confirmation message.</p>
          </div>
          <div className="crazy-card">
            <i className="fa-solid fa-compass"></i>
            <h3>Simple Navigation</h3>
            <p>Design a simple and intuitive navigation system.</p>
          </div>
          <div className="crazy-card">
            <i className="fa-solid fa-lock"></i>
            <h3>Secure Payments</h3>
            <p>Offer secure and reliable payment methods.</p>
          </div>
          <div className="crazy-card">
            <i className="fa-solid fa-magnifying-glass"></i>
            <h3>Advanced Search</h3>
            <p>Include food categories and an advanced search feature.</p>
          </div>
          <div className="crazy-card">
            <i className="fa-solid fa-microphone"></i>
            <h3>Voice Assistance</h3>
            <p>Support accessibility features such as voice assistance.</p>
          </div>
          <div className="crazy-card">
            <i className="fa-solid fa-location-dot"></i>
            <h3>Order Tracking</h3>
            <p>Provide real-time order tracking and delivery updates.</p>
          </div>
        </div>
      </AnimatedSection>
      {/*  PAPER WIREFRAME  */}
      <AnimatedSection id="paper-wireframe" className="content-section">
        <h2>Paper Wireframe</h2>
        <p className="section-intro">
          I created paper wireframes to explore different layouts and
          interaction ideas before moving to digital wireframes. These sketches
          helped me quickly evaluate the structure and ordering flow of the
          application.
        </p>
        <div className="paper-wireframe">
          <img
            src={paperWireframe}
            alt="Food Delivery App paper wireframe"
            className="clickable-image"
            onClick={() => setSelectedImage(paperWireframe)}
          />
        </div>
      </AnimatedSection>
      {/*  LOW-FIDELITY WIREFRAMES  */}
      <AnimatedSection id="low-fidelity" className="content-section">
        <h2>Low-Fidelity Wireframes</h2>
        <p className="section-intro">
          The low-fidelity wireframes translate the initial ideas into a clear
          digital structure. The focus was on navigation, content hierarchy,
          ordering flow, and usability rather than visual styling.
        </p>
        <div className="wireframe-grid">
          <div className="wireframe-card">
            <img
              src={loginLowFidelity}
              alt="Login low-fidelity screen"
              className="clickable-image"
              onClick={() => setSelectedImage(loginLowFidelity)}
            />
            <h3>Login</h3>
          </div>
          <div className="wireframe-card">
            <img
              src={homeLowFidelity}
              alt="Home low-fidelity screen"
              className="clickable-image"
              onClick={() => setSelectedImage(homeLowFidelity)}
            />
            <h3>Home</h3>
          </div>
          <div className="wireframe-card">
            <img
              src={foodDetailsLowFidelity}
              alt="Food details low-fidelity screen"
              className="clickable-image"
              onClick={() => setSelectedImage(foodDetailsLowFidelity)}
            />
            <h3>Food Details</h3>
          </div>
          <div className="wireframe-card">
            <img
              src={paymentLowFidelity}
              alt="Payment low-fidelity screen"
              className="clickable-image"
              onClick={() => setSelectedImage(paymentLowFidelity)}
            />
            <h3>Payment</h3>
          </div>
          <div className="wireframe-card">
            <img
              src={ordersLowFidelity}
              alt="Orders low-fidelity screen"
              className="clickable-image"
              onClick={() => setSelectedImage(ordersLowFidelity)}
            />
            <h3>Orders</h3>
          </div>
          <div className="wireframe-card">
            <img
              src={orderConfirmationLowFidelity}
              alt="Order confirmation low-fidelity screen"
              className="clickable-image"
              onClick={() => setSelectedImage(orderConfirmationLowFidelity)}
            />
            <h3>Order Confirmation</h3>
          </div>
          <div className="wireframe-card">
            <img
              src={aboutLowFidelity}
              alt="About low-fidelity screen"
              className="clickable-image"
              onClick={() => setSelectedImage(aboutLowFidelity)}
            />
            <h3>About</h3>
          </div>
          <div className="wireframe-card">
            <img
              src={contactLowFidelity}
              alt="Contact low-fidelity screen"
              className="clickable-image"
              onClick={() => setSelectedImage(contactLowFidelity)}
            />
            <h3>Contact</h3>
          </div>
          <div className="wireframe-card">
            <img
              src={profileLowFidelity}
              alt="Profile low-fidelity screen"
              className="clickable-image"
              onClick={() => setSelectedImage(profileLowFidelity)}
            />
            <h3>Profile</h3>
          </div>
        </div>
      </AnimatedSection>
      {/*  LOW-FIDELITY PROTOTYPE  */}
      <AnimatedSection id="low-fidelity-prototype" className="content-section">
        <h2>Low-Fidelity Prototype</h2>
        <p className="section-intro">
          The low-fidelity prototype was created to test the core ordering flow
          and identify usability issues before developing the final visual
          design.
        </p>
        <div className="prototype-btn">
          <a
            href="https://www.figma.com/proto/cqTtiSJQ1WMSf1o71iIebS/Food-delivery-App?node-id=3-6&p=f&t=ENMzu8VW91fcAbwq-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=3%3A6"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Low-Fidelity Prototype
            <i className="fa-solid fa-arrow-up-right-from-square"></i>
          </a>
        </div>
      </AnimatedSection>
      {/*  HIGH-FIDELITY DESIGN  */}
      <AnimatedSection id="high-fidelity" className="content-section">
        <h2>High-Fidelity Design</h2>
        <p className="section-intro">
          Based on the research findings and low-fidelity wireframes, I
          developed the high-fidelity interface with a focus on accessibility,
          visual hierarchy, clear navigation, and a seamless food ordering
          experience.
        </p>
        <div className="wireframe-grid">
          <div className="wireframe-card">
            <img
              src={loginHighFidelity}
              alt="Login high-fidelity screen"
              className="clickable-image"
              onClick={() => setSelectedImage(loginHighFidelity)}
            />
            <h3>Login</h3>
          </div>
          <div className="wireframe-card">
            <img
              src={homeHighFidelity}
              alt="Home high-fidelity screen"
              className="clickable-image"
              onClick={() => setSelectedImage(homeHighFidelity)}
            />
            <h3>Home</h3>
          </div>
          <div className="wireframe-card">
            <img
              src={foodDetailsHighFidelity}
              alt="Food details high-fidelity screen"
              className="clickable-image"
              onClick={() => setSelectedImage(foodDetailsHighFidelity)}
            />
            <h3>Food Details</h3>
          </div>
          <div className="wireframe-card">
            <img
              src={paymentHighFidelity}
              alt="Payment high-fidelity screen"
              className="clickable-image"
              onClick={() => setSelectedImage(paymentHighFidelity)}
            />
            <h3>Payment</h3>
          </div>
          <div className="wireframe-card">
            <img
              src={ordersHighFidelity}
              alt="Orders high-fidelity screen"
              className="clickable-image"
              onClick={() => setSelectedImage(ordersHighFidelity)}
            />
            <h3>Orders</h3>
          </div>
          <div className="wireframe-card">
            <img
              src={orderConfirmationHighFidelity}
              alt="Order confirmation high-fidelity screen"
              className="clickable-image"
              onClick={() => setSelectedImage(orderConfirmationHighFidelity)}
            />
            <h3>Order Confirmation</h3>
          </div>
          <div className="wireframe-card">
            <img
              src={aboutHighFidelity}
              alt="About high-fidelity screen"
              className="clickable-image"
              onClick={() => setSelectedImage(aboutHighFidelity)}
            />
            <h3>About</h3>
          </div>
          <div className="wireframe-card">
            <img
              src={contactHighFidelity}
              alt="Contact high-fidelity screen"
              className="clickable-image"
              onClick={() => setSelectedImage(contactHighFidelity)}
            />
            <h3>Contact</h3>
          </div>
          <div className="wireframe-card">
            <img
              src={profileHighFidelity}
              alt="Profile high-fidelity screen"
              className="clickable-image"
              onClick={() => setSelectedImage(profileHighFidelity)}
            />
            <h3>Profile</h3>
          </div>
        </div>
      </AnimatedSection>
      {/*  HIGH-FIDELITY PROTOTYPE  */}
      <AnimatedSection id="high-fidelity-prototype" className="content-section">
        <h2>High-Fidelity Prototype</h2>
        <p className="section-intro">
          The final high-fidelity prototype demonstrates the complete food
          ordering experience, including food discovery, product details,
          payment, order confirmation, and order management.
        </p>
        <div className="prototype-btn">
          <a
            href="https://www.figma.com/proto/cqTtiSJQ1WMSf1o71iIebS/Food-delivery-App?node-id=22-309&p=f&t=QAbLeIt0e13WEcbu-1&scaling=scale-down&content-scaling=fixed&page-id=22%3A301&starting-point-node-id=22%3A309"
            target="_blank"
            rel="noopener noreferrer"
          >
            View High-Fidelity Prototype
            <i className="fa-solid fa-arrow-up-right-from-square"></i>
          </a>
        </div>
      </AnimatedSection>
      {/*  REFLECTION  */}
      <AnimatedSection id="reflection" className="content-section">
        <h2>Reflection</h2>
        <div className="reflection-card">
          <div className="reflection-icon">
            <i className="fa-solid fa-lightbulb"></i>
          </div>
          <div className="reflection-content">
            <p>
              This project helped me understand how research-driven design can
              improve a real-world user experience. By focusing on simplicity,
              accessibility, food quality, and clear delivery information, I was
              able to design an experience that addresses the needs of busy
              professionals and users with different abilities.
            </p>
            <p>
              The process also highlighted the importance of validating ideas
              through wireframes and prototypes before moving into the final
              interface design.
            </p>
          </div>
        </div>
      </AnimatedSection>
      {/*  KEY LEARNINGS  */}
      <AnimatedSection id="key-learnings" className="content-section">
        <h2>Key Learnings</h2>
        <div className="learnings-grid">
          <div className="learning-card">
            <i className="fa-solid fa-users"></i>
            <h3>User-Centered Thinking</h3>
            <p>
              Understanding users' goals, behaviors, and pain points is
              essential for creating meaningful solutions.
            </p>
          </div>
          <div className="learning-card">
            <i className="fa-solid fa-universal-access"></i>
            <h3>Accessibility Matters</h3>
            <p>
              Designing for different abilities helps create a more inclusive
              experience for everyone.
            </p>
          </div>
          <div className="learning-card">
            <i className="fa-solid fa-arrows-rotate"></i>
            <h3>Iterative Design</h3>
            <p>
              Moving from sketches to wireframes and prototypes helps identify
              problems and improve the final solution.
            </p>
          </div>
          <div className="learning-card">
            <i className="fa-solid fa-chart-line"></i>
            <h3>Design Decisions</h3>
            <p>
              Research insights should directly influence design decisions
              rather than relying only on visual preferences.
            </p>
          </div>
        </div>
      </AnimatedSection>
      {/*  FINAL OUTCOME  */}
      <AnimatedSection id="outcome" className="content-section">
        <h2>Final Outcome</h2>
        <div className="outcome-card">
          <div className="outcome-icon">
            <i className="fa-solid fa-mobile-screen-button"></i>
          </div>
          <div className="outcome-content">
            <h3>A Simpler Food Ordering Experience</h3>
            <p>
              The final design provides users with a simple and accessible way
              to discover food, review important information, make secure
              payments, receive clear order confirmation, and track their
              delivery.
            </p>
            <div className="outcome-tags">
              <span>Simple Navigation</span>
              <span>Freshness Tags</span>
              <span>Clear Confirmation</span>
              <span>Estimated Delivery</span>
              <span>Accessibility</span>
              <span>Order Tracking</span>
            </div>
          </div>
        </div>
      </AnimatedSection>
      {/*  IMAGE LIGHTBOX  */}
      {selectedImage && (
        <div className="image-lightbox" onClick={() => setSelectedImage(null)}>
          <button
            className="lightbox-close"
            onClick={() => setSelectedImage(null)}
            aria-label="Close image"
          >
            <i className="fa-solid fa-xmark"></i>
          </button>
          <img
            src={selectedImage}
            alt="Expanded case study screen"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
      <footer className="case-study-footer">
        <h2>Thank You for Reading</h2>
        <p>
          Thank you for exploring this UX case study. This project reflects my
          user-centered design process—from research and ideation to wireframes,
          prototyping, accessibility, and final UI design.
        </p>
      </footer>
      {/*  SCROLL TO TOP  */}
      {showScrollTop && (
        <button
          className="scroll-top-btn"
          onClick={scrollToTop}
          aria-label="Scroll to top"
        >
          <i className="fa-solid fa-arrow-up"></i>
        </button>
      )}
    </div>
  );
}
export default CaseStudy;