import {
  Checkbox,
  CheckboxProps,
  FormControl,
  FormErrorMessage,
  FormHelperText,
} from "@chakra-ui/react";
import {
  CheckboxFieldProps,
  useCheckboxFieldProps,
  useRequiredProps,
} from "@form-atoms/field";

import { useFieldError } from "../../hooks";

export const CheckboxField = ({
  field,
  required,
  helperText,
  ...uiProps
}: CheckboxFieldProps & CheckboxProps) => {
  const {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    "aria-invalid": _, // ERR: chakra does not accept false value for this prop
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    ref, // BUG: ref causes infinite renders
    checked,
    ...props
  } = useCheckboxFieldProps(field);
  const { isInvalid, error } = useFieldError(field);
  const { required: isRequired, ...requiredProps } = useRequiredProps({
    field,
    required,
  });

  return (
    <FormControl isInvalid={isInvalid} isRequired={isRequired}>
      <Checkbox
        {...uiProps}
        {...props}
        {...requiredProps}
        isChecked={checked}
      />
      <FormErrorMessage>{error}</FormErrorMessage>
      {!isInvalid && <FormHelperText>{helperText}</FormHelperText>}
    </FormControl>
  );
};
