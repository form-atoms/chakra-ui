import {
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
} from "@chakra-ui/react";
import {
  FieldProps,
  RequiredProps,
  ZodField,
  useRequiredProps,
} from "@form-atoms/field";
import { ReactNode, useId } from "react";
import { RenderProp } from "react-render-prop-type";

import { useFieldError } from "../hooks";

export type ChakraFieldProps = {
  label?: ReactNode;
  helperText?: ReactNode;
};

type Children = RenderProp<
  Omit<RequiredProps, "isFieldRequired"> & {
    id: string;
    helperText: ReactNode;
  }
>;

export const ChakraField = <Field extends ZodField<any>>({
  field,
  label,
  helperText,
  required,
  children,
}: FieldProps<Field> & ChakraFieldProps & Children) => {
  const id = useId();
  const { error, isInvalid } = useFieldError(field);
  const { required: isRequired, ...props } = useRequiredProps({
    field,
    required,
  });

  return (
    <FormControl isInvalid={isInvalid} isRequired={isRequired}>
      {label && <FormLabel htmlFor={id}>{label}</FormLabel>}
      {children({ ...props, id, helperText })}
      <FormErrorMessage>{error}</FormErrorMessage>
      {!isInvalid && helperText && (
        <FormHelperText>{helperText}</FormHelperText>
      )}
    </FormControl>
  );
};
