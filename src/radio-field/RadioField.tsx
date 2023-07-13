import { Radio, RadioGroup, Stack } from "@chakra-ui/react";
import {
  SelectProps,
  SelectField,
  useOptions,
  useSelectFieldProps,
} from "@form-atoms/field";
import { useFieldActions } from "form-atoms";

import { ChakraField, ChakraFieldProps } from "../chakra-field";

export const RadioField = <Option, Field extends SelectField>({
  field,
  options,
  getValue,
  getLabel,
  label,
  required,
  helperText,
}: SelectProps<Option, Field> & ChakraFieldProps) => {
  const inputProps = useSelectFieldProps({ field, options, getValue });
  const { renderOptions } = useOptions({
    field,
    options,
    getLabel,
  });
  const actions = useFieldActions(field);

  // TODO: rename to RadioGroupField
  // TODO: inputProps not changing when value changed
  // TODO: handle rest of props
  return (
    <ChakraField
      field={field}
      label={label}
      required={required}
      helperText={helperText}
    >
      {(props) => (
        <RadioGroup
          id={props.id}
          name={inputProps.name}
          value={`${inputProps.value}`}
          onChange={(strIndex) => {
            const value = getValue(options[parseInt(strIndex)]!);
            console.log(value);

            actions.setValue(value);
          }}
          // @ts-ignore
          onBlur={() => inputProps.onBlur()}
        >
          <Stack>
            {renderOptions.map(({ id, value, label }) => (
              <Radio key={id} id={id} value={`${value}`}>
                {label}
              </Radio>
            ))}
          </Stack>
        </RadioGroup>
      )}
    </ChakraField>
  );
};
