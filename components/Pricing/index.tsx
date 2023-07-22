"use client";
import { useState } from "react";
import SectionTitle from "../Common/SectionTitle";
import OfferList from "./OfferList";
import PricingBox from "./PricingBox";

const Pricing = () => {
  const [isMonthly, setIsMonthly] = useState(true);

  return (
    <section id="pricing" className="relative z-10 py-16 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          title="Simple and Affordable Pricing"
          paragraph="Choose a plan that's right for you!"
          center
          width="665px"
        />

        

        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
          <PricingBox
            packageName="Monthly"
            price="1,999"
            duration="mo"
            subtitle="Pause or cancel anytime"
            stripe="https://buy.stripe.com/fZe6r99xVfr48y45kk"
          >
            <OfferList text="One request at a time" status="active" />
            <OfferList text="Use with Unlimited Projects" status="active" />
            <OfferList text="Front-End development" status="active" />
            <OfferList text="Back-End development" status="active" />
            <OfferList text="Average 11 day delivery depending on the request  " status="active" />
            <OfferList text="API Integration" status="active" />
            <OfferList text="Database Integration" status="active" />
            <OfferList text="Website maintenance services" status="active" />
            <OfferList text="Easy secure credit-card payments through stripe" status="active" />
            <OfferList text="Pause or cancel anytime" status="active" />
            
          </PricingBox>
          <PricingBox
            packageName="Quarterly"
            price="1,500"
            duration="mo"
            subtitle="Pause or cancel anytime"
            stripe="https://buy.stripe.com/8wM2aT5hFfr4cOkfYZ"
          >
             <OfferList text="One request at a time" status="active" />
            <OfferList text="Use with Unlimited Projects" status="active" />
            <OfferList text="Front-End development" status="active" />
            <OfferList text="Back-End development" status="active" />
            <OfferList text="Average 11 day delivery depending on the request  " status="active" />
            <OfferList text="API Integration" status="active" />
            <OfferList text="Database Integration" status="active" />
            <OfferList text="Website maintenance services" status="active" />
            <OfferList text="Easy secure credit-card payments through stripe" status="active" />
            <OfferList text="Pause or cancel anytime" status="active" />
          </PricingBox>
          <PricingBox
            packageName="Yearly"
            price="800"
            duration= "mo"
            subtitle="Double the requests. Pause or cancel anytime"
            stripe="https://buy.stripe.com/6oE9Dl4dB7YC9C828a" 
            
          >
             <OfferList text="Two request at a time" status="active" />
            <OfferList text="Use with Unlimited Projects" status="active" />
            <OfferList text="Front-End development" status="active" />
            <OfferList text="Back-End development" status="active" />
            <OfferList text="Average 11 day delivery depending on the request  " status="active" />
            <OfferList text="API Integration" status="active" />
            <OfferList text="Database Integration" status="active" />
            <OfferList text="Website maintenance services" status="active" />
            <OfferList text="Easy secure credit-card payments through stripe" status="active" />
            <OfferList text="Pause or cancel anytime" status="active" />
          </PricingBox>
        </div>
      </div>

      <div className="absolute left-0 bottom-0 z-[-1]"><br /> 
        <svg
          width="239"
          height="601"
          viewBox="0 0 239 601"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            opacity="0.3"
            x="-184.451"
            y="600.973"
            width="196"
            height="541.607"
            rx="2"
            transform="rotate(-128.7 -184.451 600.973)"
            fill="url(#paint0_linear_93:235)"
          />
          <rect
            opacity="0.3"
            x="-188.201"
            y="385.272"
            width="59.7544"
            height="541.607"
            rx="2"
            transform="rotate(-128.7 -188.201 385.272)"
            fill="url(#paint1_linear_93:235)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_93:235"
              x1="-90.1184"
              y1="420.414"
              x2="-90.1184"
              y2="1131.65"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" />
              <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_93:235"
              x1="-159.441"
              y1="204.714"
              x2="-159.441"
              y2="915.952"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" />
              <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </section>
  );
};

export default Pricing;
