import Link from "next/link";
import React from "react";
import "animate.css";

const Apply = () => {
  return (
    <div className="pt-12 m-8">
      <div className="text-black/80 text-left py-4">
        <h2 className="text-4xl font-bold text-[#87b676] animate__animated animate__fadeInUp">Applications</h2>
        <h3 className="text-xl mt-4 animate__animated animate__fadeInUp">
        We generally begin our application process during fall quarter, so be sure to stay updated on our timeline and announcements!
          <br></br>To learn more about Zotbins, follow us on our social media platforms for the latest news, updates, and progress on our initiatives.
        </h3>
        <h3 className="text-xl mt-8 animate__animated animate__fadeInUp">
        Contact us if you have any questions or inquiries regarding the application process!
        </h3>
      </div>
      <div className="space-x-4 animate__animated animate__fadeInUp">
        <button className="bg-transparent hover:bg-[#87b676]/80 text-[#87b676] font-semibold hover:text-white py-2 px-4 border border-[#87b676] hover:border-transparent rounded transition duration-300 ease-in-out hover:-translate-y-1">
          <Link href={"https://www.instagram.com/zotbins/"} target="_blank">
            <p>Instagram</p>
          </Link>
        </button>
        <button className="bg-transparent hover:bg-[#87b676]/80 text-[#87b676] font-semibold hover:text-white py-2 px-4 border border-[#87b676] hover:border-transparent rounded transition duration-300 ease-in-out hover:-translate-y-1">
          <Link href={"https://www.linkedin.com/company/zotbins/"} target="_blank">
            <p>LinkedIn</p>
          </Link>
        </button>
        <button className="bg-transparent hover:bg-[#87b676]/80 text-[#87b676] font-semibold hover:text-white py-2 px-4 border border-[#87b676] hover:border-transparent rounded transition duration-300 ease-in-out hover:-translate-y-1">
          <Link href={"mailto:zotbins@uci.edu"} target="_blank">
            <p>Email</p>
          </Link>
        </button>
      </div>
    </div>
  );
};

export default Apply;
