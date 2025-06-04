import Link from "next/link";
import React from "react";
import "animate.css";

const Contact = () => {
  return (
    <div className="pt-12 m-8">
      <div className="bg-gray-50 rounded-2xl shadow-xl p-8 md:p-12 mb-16 animate__animated animate__fadeInUp">
        <div className="text-left">
          <h2 className="text-4xl font-bold text-[#87b676] mb-6">Contact Us</h2>
          <p className="text-xl text-gray-600 leading-relaxed mb-8">
            Questions about our project, recruitment, or anything related?
          </p>
          <button className="bg-transparent hover:bg-[#87b676] text-[#87b676] font-semibold hover:text-white py-3 px-8 border-2 border-[#87b676] hover:border-transparent rounded-full transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg">
            <Link href={"mailto:zotbins@uci.edu"}>
              <p>Email</p>
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};


export default Contact;
