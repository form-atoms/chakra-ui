import { numberField } from "@form-atoms/field";
import { z } from "zod";

import { FormStory, meta } from "@/stories";

import { RangeField } from "./RangeField";

export default {
  title: "RangeField",
  ...meta,
};

const rating = numberField({
  value: 3,
  schema: z.number().min(0).max(20),
});

export const Required: FormStory = {
  args: {
    fields: { rating },
    children: ({ required }) => (
      <RangeField
        field={rating}
        defaultValue={3}
        min={0}
        max={20}
        label="Rating"
        required={required}
      />
    ),
  },
};
