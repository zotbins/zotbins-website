import Link from "next/link";
import React from "react";
import "animate.css";

const Apply = () => {
  return (
    <div className="pt-12 m-8">
      <div className="bg-gray-50 rounded-2xl shadow-xl p-8 md:p-12 mb-16 animate__animated animate__fadeInUp">
        <div className="text-left">
          <h2 className="text-4xl font-bold text-[#87b676] mb-6">Applications</h2>
          <p className="text-xl text-gray-600 leading-relaxed mb-8">
            We generally begin our application process during fall quarter, so be sure to stay updated on our timeline and announcements!
            <br></br>To learn more about Zotbins, follow us on our social media platforms for the latest news, updates, and progress on our initiatives.
          </p>
          <div className="space-x-4 animate__animated animate__fadeInUp">
            <button className="bg-transparent hover:bg-[#87b676]/80 text-[#87b676] font-semibold hover:text-white py-2 px-4 border border-2 border-[#87b676] hover:border-transparent rounded-full transition duration-300 ease-in-out hover:-translate-y-1">
              <Link href={"https://www.instagram.com/zotbins/"} target="_blank">
                <p>Instagram</p>
              </Link>
            </button>
            <button className="bg-transparent hover:bg-[#87b676]/80 text-[#87b676] font-semibold hover:text-white py-2 px-4 border border-2 border-[#87b676] hover:border-transparent rounded-full transition duration-300 ease-in-out hover:-translate-y-1">
              <Link href={"https://www.linkedin.com/company/zotbins/"} target="_blank">
                <p>LinkedIn</p>
              </Link>
            </button>
            <button className="bg-transparent hover:bg-[#87b676]/80 text-[#87b676] font-semibold hover:text-white py-2 px-4 border border-2 border-[#87b676] hover:border-transparent rounded-full transition duration-300 ease-in-out hover:-translate-y-1">
              <Link href={"mailto:zotbins@uci.edu"} target="_blank">
                <p>Email</p>
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Apply;
