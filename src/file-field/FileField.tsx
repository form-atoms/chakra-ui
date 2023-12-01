import { Input, InputProps } from "@chakra-ui/react";
import { FileFieldProps, useFilesFieldProps } from "@form-atoms/field";

import { ChakraField } from "../chakra-field";

export const FileField = ({
  field,
  required,
  label,
  helperText,
  ...uiProps
}: FileFieldProps & InputProps) => {
  const props = useFilesFieldProps(field);

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
