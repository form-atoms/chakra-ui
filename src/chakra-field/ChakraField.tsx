import {
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
} from "@chakra-ui/react";
import {
  FieldProps,
  FieldLabel,
  RequiredProps,
  ZodField,
  useRequiredProps,
} from "@form-atoms/field";
import { ReactNode } from "react";
import { RenderProp } from "react-render-prop-type";

import { useFieldError } from "../hooks";

export type ChakraFieldProps = {
  label?: ReactNode;
  helperText?: ReactNode;
  required?: boolean;
};

type Children = RenderProp<
  RequiredProps & {
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
  const { error, isInvalid } = useFieldError(field);
  const requiredProps = useRequiredProps({
    field,
    required,
  });

  const formLabel = label && (
    <FieldLabel field={field} label={label}>
      {(props) => <FormLabel {...props} />}
    </FieldLabel>
  );

  return (
    <FormControl isInvalid={isInvalid} isRequired={requiredProps.required}>
      {formLabel}
      {children({ ...requiredProps, id: `${field}`, helperText })}
      <FormErrorMessage>{error}</FormErrorMessage>
      {!isInvalid && helperText && (
        <FormHelperText>{helperText}</FormHelperText>
      )}
    </FormControl>
  );
};
