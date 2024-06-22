import { Tags, TagsOption } from "@ginger-society/ginger-ui";
import { useState } from "react";

const TagsExample = () => {
  const [tags, setTags] = useState<TagsOption[]>([
    { value: "val1", label: "Label 1" },
    { value: "val2", label: "Label 2" },
    { value: "val3", label: "Label 3" },
    { value: "val4", label: "Label 4" },
  ]);

  const handleTagsChange = (updatedTags) => {
    setTags(updatedTags);
  };
  return (
    <div>
      <Tags value={tags} onChange={handleTagsChange} />
    </div>
  );
};

export default TagsExample;
