"use client"
import React from "react";
import SectionHeading from "../Helper/SectionHeading";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { userReviewData } from "@/data";
import ClientReviewCard from "./ClientReviewCard";

const ClientReview = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <section>
      <div className="lg:px-30">
        <div>
          <SectionHeading
            title1="Our Client"
            title2="Review"
            description="Check out our client reviews"
          />
        </div>
        <div>
          <Carousel

            responsive={responsive}
            arrows={true}
            infinite={true}
            autoPlay={false}
            autoPlaySpeed={5000}
          >
            {userReviewData.map((user, index)=>{
                return(
                    <div key={index}>
                        <ClientReviewCard user={user} />
                    </div>
                )
            })}
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default ClientReview;
