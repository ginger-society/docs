import React from "react";
import {
  TextSize,
  TextColor,
  TextWeight,
  Text,
} from "@ginger-society/ginger-ui";

const TextExample: React.FC = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Text>Default Text</Text>
      <Text
        size={TextSize.XLarge}
        color={TextColor.Danger}
        weight={TextWeight.Bold}
      >
        Extra Large Bold Danger Text
      </Text>
      <Text size={TextSize.Large} color={TextColor.Success} underline>
        Large Underlined Success Text
      </Text>
      <Text size={TextSize.Normal} color={TextColor.Warning} italics>
        Normal Italicized Warning Text
      </Text>
      <Text size={TextSize.Small} color={TextColor.Info}>
        Small Info Text
      </Text>
      <Text size={TextSize.Small} color={TextColor.Muted}>
        Small Muted Text
      </Text>
    </div>
  );
};

export default TextExample;
