import { Button, Drawer, Icon } from '@chakra-ui/react';
import { MdEdit } from 'react-icons/md';

interface ButtonTriggerProps {
  type: string;
}

export function ButtonTrigger({ type }: ButtonTriggerProps) {
  return (<Drawer.Trigger asChild>
    {type === 'Create' ? (<Button colorPalette="teal" variant="solid" h={42} w={150}>
      Novo usuário
    </Button>) : (<Icon cursor={'pointer'} as={MdEdit} fontSize={20} />)}

  </Drawer.Trigger>);
}