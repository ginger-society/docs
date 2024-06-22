import React from "react";
import { Tooltip } from "@ginger-society/ginger-ui";

const TooltipExample: React.FC = () => {
  return (
    <div
      style={{
        display: "flex",
        gap: "20px",
        justifyContent: "center",
        marginTop: "50px",
      }}
    >
      <Tooltip label={<button>Hover me (Top)</button>} position="top">
        Tooltip content at the top
      </Tooltip>

      <Tooltip label={<button>Hover me (Right)</button>} position="right">
        Tooltip content at the right
      </Tooltip>

      <Tooltip label={<button>Hover me (Bottom)</button>} position="bottom">
        Tooltip content at the bottom
      </Tooltip>

      <Tooltip label={<button>Hover me (Left)</button>} position="left">
        Tooltip content at the left
      </Tooltip>
    </div>
  );
};

export default TooltipExample;
