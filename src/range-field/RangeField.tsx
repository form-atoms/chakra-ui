import {
  Slider,
  SliderFilledTrack,
  SliderProps,
  SliderThumb,
  SliderTrack,
} from "@chakra-ui/react";
import { NumberFieldProps, useNumberFieldProps } from "@form-atoms/field";
import { useFieldActions, useFieldInitialValue } from "form-atoms";

import { ChakraField } from "../chakra-field";

export const RangeField = ({
  field,
  label,
  required,
  helperText,
  defaultValue,
  min = 0,
  ...sliderProps
}: NumberFieldProps & SliderProps) => {
  const props = useNumberFieldProps(field);
  const actions = useFieldActions(field);

  useFieldInitialValue(field, defaultValue);

  const value = props.value || min;

  return (
    <ChakraField
      field={field}
      label={label}
      required={required}
      helperText={helperText}
    >
      {({ id }) => (
        <Slider
          id={id}
          value={value}
          name={props.name}
          {...sliderProps}
          onChange={actions.setValue}
        >
          <SliderTrack>
            <SliderFilledTrack />
          </SliderTrack>
          <SliderThumb />
        </Slider>
      )}
    </ChakraField>
  );
};
