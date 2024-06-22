import React from "react";
import { Tab, Tabs } from "@ginger-society/ginger-ui";

const TabsExample: React.FC = () => {
  return (
    <Tabs>
      <Tab heading={<span>Tab 1</span>}>
        <div>Content for Tab 1</div>
      </Tab>
      <Tab heading={<span>Tab 2</span>} active>
        <div>Content for Tab 2</div>
      </Tab>
      <Tab heading={<span>Tab 3</span>} disabled>
        <div>Content for Tab 3</div>
      </Tab>
    </Tabs>
  );
};

export default TabsExample;
