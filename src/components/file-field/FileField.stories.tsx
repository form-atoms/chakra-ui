import { filesField } from "@form-atoms/field";

import { FormStory, meta } from "@/stories";

import { FileField } from "./FileField";

export default {
  title: "FileField",
  ...meta,
};

const profilePicture = filesField();

export const Required: FormStory = {
  args: {
    fields: { profilePicture },
    children: ({ required }) => (
      <FileField
        field={profilePicture}
        label="Profile Picture"
        required={required}
      />
    ),
  },
};
