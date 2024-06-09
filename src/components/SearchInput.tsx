import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";

interface Props {
  onSearch: (searchText: string) => void;
}

const SearchInput = ({ onSearch }: Props) => {
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <form
      style={{ width: "100%" }}
      onSubmit={(event) => {
        event.preventDefault();
        if (inputRef.current) {
          onSearch(inputRef.current.value);
        }
      }}
    >
      <InputGroup>
        <InputLeftElement children={<BsSearch />} marginTop={1} color="black" />
        <Input
          ref={inputRef}
          borderRadius={20}
          marginTop={1}
          color="black"
          borderColor="rgb(56, 130, 171)"
          placeholder="Search games..."
          variant="filled"
        />
      </InputGroup>
    </form>
  );
};

export default SearchInput;
