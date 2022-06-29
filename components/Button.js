import React from "react";
import Link from "next/link";

const Button = ({ type, href, title, onClick }) => {
  if (type === "external-link") {
    return (
      <a href={href} rel="noopener noreferrer" target="_blank">
        {title}
      </a>
    );
  } else if (type === "internal-link") {
    return (
      <Link href={href} rel="noopener noreferrer" target="_blank">
        {title}
      </Link>
    );
  }else{
    return(
        <button className="px-10 py-2 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-800" onClick={onClick}>{title}</button>
    )
  }
};

export default Button;
