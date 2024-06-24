import React, { useState } from "react";
import { Text, TextSize, Aside } from "@ginger-society/ginger-ui";

export const AsideExample = () => {
  const [isSliderOpen, setIsSliderOpen] = useState(false);

  return (
    <>
      <button onClick={() => setIsSliderOpen(true)}>Open Aside</button>
      <Aside isOpen={isSliderOpen} onClose={() => setIsSliderOpen(false)}>
        <Text tag="h1" size={TextSize.Large}>
          Example heading
        </Text>
        <Text>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex id odit
          explicabo delectus in quae quisquam eveniet tempora dolor quia,
          repellat a illum maxime nobis laborum vel alias ipsam. Unde?
        </Text>
      </Aside>
    </>
  );
};
