import { Icon } from '@chakra-ui/react';
import { CiCircleRemove } from 'react-icons/ci';
import { useDeleteUser } from '@/hooks/useUsers';

interface DeleteActionProps {
  id: string;
}

export function DeleteAction({ id }: DeleteActionProps) {

  const {mutate} = useDeleteUser()

  return (<Icon
    as={CiCircleRemove }
    color={'red'}
    fontSize={20}
    cursor={'pointer'}
    onClick={() => mutate(id)}
  />);
}