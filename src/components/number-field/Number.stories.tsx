import { numberField } from "@form-atoms/field";

import { FormStory, meta } from "@/stories";

import { NumberField } from "./NumberField";

export default {
  title: "NumberField",
  ...meta,
};

const quantity = numberField();

export const Required: FormStory = {
  args: {
    fields: { quantity },
    children: ({ required }) => (
      <NumberField field={quantity} label="Qty." required={required} />
    ),
  },
};
