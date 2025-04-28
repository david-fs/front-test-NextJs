import { Flex } from '@chakra-ui/react';
import { InputSearchText } from '@/components/userList/filters/inputSearchText';
import { SelectFilter } from '@/components/userList/filters/selectFilter';
import { UseGetProfiles } from '@/hooks/useProfiles';

interface InputSearchProps {
  setSearchTerm: (value: (((prevState: string) => string) | string)) => void,
  setProfileFilters: (value: (((prevState: string) => string) | string)) => void
}

export function Filters({ setSearchTerm, setProfileFilters }: InputSearchProps) {
  const {data: profiles, isLoading} = UseGetProfiles()


  return (
    <Flex gap={8}>
      <InputSearchText setSearchTerm={setSearchTerm}></InputSearchText>
      <SelectFilter setProfileFilters={setProfileFilters} data={profiles?.data || []} isLoading={isLoading}></SelectFilter>
    </Flex>

  );
}