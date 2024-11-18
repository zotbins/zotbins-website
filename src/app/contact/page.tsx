import Link from "next/link";
import React from "react";

const Contact = () => {
  return (
    <div className="pt-12 m-8">
      <div className="text-black/80 text-left py-4">
        <h2 className="text-4xl font-bold text-[#87b676]">Contact Us</h2>
        <h3 className="text-xl mt-4">
          Questions about our project, recruitment, or anything related?
        </h3>
      </div>
      <button className="bg-transparent hover:bg-[#87b676]/80 text-[#87b676] font-semibold hover:text-white py-2 px-4 border border-[#87b676] hover:border-transparent rounded">
        <Link href={"mailto:zotbinsuci@gmail.com"}>
          <p>Email</p>
        </Link>
      </button>
    </div>
  );
};

export default Contact;
