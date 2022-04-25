import React from "react";
import type { LinkProps } from "react-router-dom";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

const CustomLink = ({ children, to, ...props }: LinkProps) => {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });
  return (
    <div>
      <Link style={{ color: match ? "white" : "#b0b0b0" }} to={to} {...props}>
        {children}
      </Link>
    </div>
  );
};

export default CustomLink;
