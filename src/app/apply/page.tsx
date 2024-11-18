import Link from "next/link";
import React from "react";

const Apply = () => {
  return (
    <div className="pt-12 m-8">
      <div className="text-black/80 text-left py-4">
        <h2 className="text-4xl font-bold text-[#87b676]">Applications</h2>
        <h3 className="text-xl mt-4">
        We generally begin our application process during fall quarter, so be sure to stay updated on our timeline and announcements!
          <br></br>To learn more about Zotbins, follow us on our social media platforms for the latest news, updates, and progress on our initiatives.
        </h3>
      </div>
      <div className="space-x-4">
      <button className="bg-transparent hover:bg-[#87b676]/80 text-[#87b676] font-semibold hover:text-white py-2 px-4 border border-[#87b676] hover:border-transparent rounded">
        <Link href={"https://www.instagram.com/zotbins/"} target="_blank">
          <p>Instagram</p>
        </Link>
      </button>
      <button className="bg-transparent hover:bg-[#87b676]/80 text-[#87b676] font-semibold hover:text-white py-2 px-4 border border-[#87b676] hover:border-transparent rounded">
        <Link href={"https://www.linkedin.com/company/zotbins/"} target="_blank">
          <p>LinkedIn</p>
        </Link>
      </button>
      <button className="bg-transparent hover:bg-[#87b676]/80 text-[#87b676] font-semibold hover:text-white py-2 px-4 border border-[#87b676] hover:border-transparent rounded">
        <Link href={"mailto:zotbinsuci@gmail.com"} target="_blank">
          <p>Email</p>
        </Link>
      </button>
      </div>
    </div>
  );
};

export default Apply;
