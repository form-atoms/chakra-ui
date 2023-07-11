import { Radio, RadioGroup, Stack } from "@chakra-ui/react";
import { SelectFieldProps, useOptions } from "@form-atoms/field";
import { useFieldActions, useInputFieldProps } from "form-atoms";

import { ChakraField, ChakraFieldProps } from "../chakra-field";

export const RadioField = <Option,>({
  field,
  options,
  getValue,
  getLabel,
  label,
  required,
  helperText,
}: SelectFieldProps<Option> & ChakraFieldProps) => {
  const inputProps = useInputFieldProps(field);
  const { renderOptions } = useOptions({
    field,
    getLabel,
    options,
  });
  const actions = useFieldActions(field);

  return (
    <ChakraField
      field={field}
      label={label}
      required={required}
      helperText={helperText}
    >
      {() => (
        <RadioGroup
          name={inputProps.name}
          value={inputProps.value}
          onChange={actions.setValue}
          // @ts-ignore
          onBlur={() => inputProps.onBlur()}
        >
          <Stack>
            {renderOptions.map(({ id, label }) => (
              <Radio key={id} value={getValue(id)}>
                {label}
              </Radio>
            ))}
          </Stack>
        </RadioGroup>
      )}
    </ChakraField>
  );
};
