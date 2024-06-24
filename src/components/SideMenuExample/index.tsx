import React, { useState } from "react";
import { SideMenu } from "@ginger-society/ginger-ui";

const sideMenuOptions = [
  { id: "home", label: <span>Home</span> },
  {
    id: "accounts",
    label: <span>Accounts</span>,
  },
  {
    id: "finance",
    label: <span>Finance</span>,
    children: [
      { id: "finance.accountsPayable", label: <span>Accounts Payable</span> },
      {
        id: "finance.accountsReceivables",
        label: <span>Accounts Receivables</span>,
      },
    ],
  },
];

const SideMenuExample: React.FC = () => {
  const [activeItem, setActiveItem] = useState("home");

  const handleMenuChange = (newId: string) => {
    setActiveItem(newId);
  };

  return (
    <div>
      <SideMenu
        options={sideMenuOptions}
        active={activeItem}
        onChange={handleMenuChange}
      />
      {/* Other content based on the selected menu item */}
    </div>
  );
};

export default SideMenuExample;
