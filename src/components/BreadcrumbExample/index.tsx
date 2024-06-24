import React from "react";
import { Breadcrumb } from "@ginger-society/ginger-ui";

const paths = [
  { path: "home", label: "Home" },
  { path: "home/accounts", label: "Accounts" },
  { path: "home/accounts/receivables", label: "Receivables" },
];

const handleBreadcrumbClick = (path) => {
  console.log("Breadcrumb clicked:", path);
  // Implement navigation or any other logic here
};

export const BreadcrumbExample = () => (
  <Breadcrumb value={paths} onClick={handleBreadcrumbClick} />
);
