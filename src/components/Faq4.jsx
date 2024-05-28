import React, { useState } from "react";
import PropTypes from "prop-types";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faChevronDown,faChevronUp } from " @fortawesome/fontawesome-svg-core";
import { MdOutlineKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";
// import '../App.css'

const faqList = [
  {
    isActive: true,
    question: "How does the free trial work?",
    answer:
      "When it comes to booking a holiday, we know everyone likes something different - so we've designed our getaways with you in mind. When it comes to booking a holiday, we know everyone likes something different - so we've designed our getaways with you in mind.",
  },
  {
    isActive: false,
    question: "Can I change plans anytime?",
    answer:
      "When it comes to booking a holiday, we know everyone likes something different - so we've designed our getaways with you in mind. When it comes to booking a holiday, we know everyone likes something different - so we've designed our getaways with you in mind.",
  },
  {
    isActive: false,
    question: "How do I pause my Bonsai subscription?",
    answer:
      "When it comes to booking a holiday, we know everyone likes something different - so we've designed our getaways with you in mind. When it comes to booking a holiday, we know everyone likes something different - so we've designed our getaways with you in mind.",
  },
  {
    isActive: false,
    question: "What is your refund policy?",
    answer:
      "When it comes to booking a holiday, we know everyone likes something different - so we've designed our getaways with you in mind. When it comes to booking a holiday, we know everyone likes something different - so we've designed our getaways with you in mind.",
  },
  {
    isActive: false,
    question: "Can I get a refund if I cancel my subscription?",
    answer:
      "When it comes to booking a holiday, we know everyone likes something different - so we've designed our getaways with you in mind. When it comes to booking a holiday, we know everyone likes something different - so we've designed our getaways with you in mind.",
  },
//   {
//     isActive: false,
//     question: "Can I use Easy Frontend designs in my portfolio?",
//     answer:
//       "When it comes to booking a holiday, we know everyone likes something different - so we've designed our getaways with you in mind. When it comes to booking a holiday, we know everyone likes something different - so we've designed our getaways with you in mind.",
//   },
//   {
//     isActive: false,
//     question: "Can I buy Easy Frontend extended license?",
//     answer:
//       "When it comes to booking a holiday, we know everyone likes something different - so we've designed our getaways with you in mind. When it comes to booking a holiday, we know everyone likes something different - so we've designed our getaways with you in mind.",
//   },
];

const FaqItem = ({ faq }) => {
  const [isOpen, setIsOpen] = useState(faq.isActive);

  const toggleFaq = () => setIsOpen(!isOpen);

  return (

          <div className={`${isOpen && "active"} rounded-lg mt-6 shadow-xl`}>
      <a
        href="#!"
        className="btn p-4 lg:p-6 w-full text-start flex justify-between items-center cursor-pointer"
        onClick={toggleFaq}
      >
        <span>{faq.question}</span>
         {isOpen ? <MdOutlineKeyboardArrowUp/> : <MdKeyboardArrowDown/>}
        {/* <FontAwesomeIcon icon={isOpen ? faChevronDown : faChevronUp} /> */}
      </a>
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } p-4 lg:p-6 text-black rounded-xl`}
      >
        <p className="opacity-50">{faq.answer}</p>
      </div>
          </div>

  );
};

FaqItem.propTypes = {
  faq: PropTypes.object.isRequired,
};

const Faq4 = () => {
  return (
    <section className="ezy__faq4 light py-14 md:py-24 text-black mt-10">
      <div className="container px-16 md:px-8 lg:px-28">
        {/* <div className="grid grid-cols-12 justify-center md:mb-6">
          <div className="col-span-12 lg:col-span-8 lg:col-start-3 xl:px-12 text-center">
            <h2 className="font-bold text-[25px] md:text-[45px] leading-none mb-4">
              Frequently Asked Questions
            </h2>
            <p className="">
              It’s easier to reach your savings goals when you have the right
              savings account. Take a look and find the right one for you!
            </p>
          </div>
        </div> */}

        <div className="grid grid-cols-12 gap-0 md:gap-6">
          <div className="col-span-12 md:col-span-8 md:col-start-3">
            {faqList.slice(0, 5).map((faq, i) => (
              <FaqItem faq={faq} key={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq4;


