import { Icon, Input, InputGroup } from '@chakra-ui/react';
import { LuSearch } from 'react-icons/lu';
import debounce from 'debounce';

interface InputSearchTextProps {
  setSearchTerm: (value: (((prevState: string) => string) | string)) => void;
}

export function InputSearchText({ setSearchTerm }: InputSearchTextProps) {
  const search = debounce((value: string) => {
    setSearchTerm(value);
  }, 800);

  return (<InputGroup startElement={<Icon as={LuSearch} ml={2} />} w={'500px'}>
    <Input placeholder="Digite sua busca....." onChange={e => search(e.target.value)} />
  </InputGroup>);
}