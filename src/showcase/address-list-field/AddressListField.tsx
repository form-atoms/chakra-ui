import {
  AddIcon,
  ChevronDownIcon,
  ChevronUpIcon,
  DeleteIcon,
} from "@chakra-ui/icons";
import {
  Button,
  ButtonGroup,
  Card,
  CardBody,
  FormLabel,
  HStack,
  VStack,
} from "@chakra-ui/react";
import { ListField, listFieldBuilder, textField } from "@form-atoms/field";
import { formAtom } from "form-atoms";
import { z } from "zod";

import { TextField } from "@/components";

const zipCodeSchema = z.string().regex(/^\d{5}$/);

const addressBuilder = listFieldBuilder(({ city, street, zip }) => ({
  city: textField({
    name: "city",
    value: city,
  }),
  street: textField({
    name: "street",
    value: street,
  }),
  zip: textField({ schema: zipCodeSchema, name: "zip", value: zip }),
}));

const fields = {
  addresses: addressBuilder([
    { city: "Bratislava", street: "Hrad", zip: "81106" },
  ]),
};

const form = formAtom(fields);

export const AddressesListField = () => (
  <div className="max-w-xl">
    <div className="flex flex-col gap-4">
      <FormLabel>
        Adjust your addresses, the first one will be primary.
      </FormLabel>
      <VStack spacing={4}>
        <ListField
          keyFrom="city"
          path={["addresses"]}
          form={form}
          builder={addressBuilder}
          RemoveItemButton={({ remove }) => (
            <Button onClick={remove} colorScheme="red">
              <DeleteIcon />
            </Button>
          )}
          AddItemButton={({ add }) => (
            <Button colorScheme="blue" leftIcon={<AddIcon />} onClick={add}>
              Add address
            </Button>
          )}
        >
          {({ fields, RemoveItemButton, index, count, moveUp, moveDown }) => (
            <Card style={{ minWidth: 400 }}>
              <CardBody>
                <HStack style={{ justifyContent: "space-between" }}>
                  <FormLabel>Address #{index + 1}</FormLabel>
                  <ButtonGroup isAttached>
                    <Button onClick={moveUp}>
                      <ChevronUpIcon />
                    </Button>
                    <Button disabled={count === index + 1} onClick={moveDown}>
                      <ChevronDownIcon />
                    </Button>
                    <RemoveItemButton />
                  </ButtonGroup>
                </HStack>
                <VStack>
                  <TextField label="City" field={fields.city} />
                  <TextField label="Street" field={fields.street} />
                  <TextField label="Zip Code" field={fields.zip} />
                </VStack>
              </CardBody>
            </Card>
          )}
        </ListField>
      </VStack>
    </div>
  </div>
);
