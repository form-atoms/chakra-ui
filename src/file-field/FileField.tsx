import { Input, InputProps } from "@chakra-ui/react";
import {
  FileFieldProps,
  useClearFileInputEffect,
  useFilesFieldProps,
} from "@form-atoms/field";

import { ChakraField } from "../chakra-field";

export const FileField = ({
  field,
  required,
  label,
  helperText,
  ...uiProps
}: FileFieldProps & InputProps) => {
  const { value, ...props } = useFilesFieldProps(field);
  useClearFileInputEffect(field);

  return (
    <ChakraField
      field={field}
      required={required}
      label={label}
      helperText={helperText}
    >
      {(fieldProps) => (
        <Input type="file" {...props} {...uiProps} {...fieldProps} />
      )}
    </ChakraField>
  );
};
