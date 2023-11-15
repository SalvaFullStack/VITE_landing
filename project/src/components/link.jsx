import { Link as LinkRouterDOM } from "react-router-dom";

const Link = ({ to, children }) => (
  <LinkRouterDOM to={to}>{children}</LinkRouterDOM>
);

export default Link;
