import { Icon } from '@chakra-ui/react';
import { FaCircle } from 'react-icons/fa';
import { useChangeStatus } from '@/hooks/useUsers';

interface ActiveActionsProps {
  isActive: boolean,
  id: string
}

export function ActiveActions({ isActive, id }: ActiveActionsProps) {

  const { mutate } = useChangeStatus();

  function handleColor() {
    if (isActive) {
      return ('green');
    } else {
      return ('red');
    }
  }

  return (
    <Icon
      as={FaCircle}
      color={handleColor()}
      fontSize={20}
      cursor={'pointer'}
      onClick={() => mutate(id)}
    />
  );

}