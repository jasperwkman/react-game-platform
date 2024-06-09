import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";

const SearchInput = () => {
  return (
    <InputGroup>
      <InputLeftElement children={<BsSearch />} marginTop={1} color="black" />
      <Input
        borderRadius={20}
        marginTop={1}
        color="black"
        borderColor="rgb(56, 130, 171)"
        placeholder="Search games..."
        variant="filled"
      />
    </InputGroup>
  );
};

export default SearchInput;
