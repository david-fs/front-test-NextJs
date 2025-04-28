import {Flex, Box, Text} from "@chakra-ui/react";
import {UserList} from "@/components/userList";
import { UserDrawer } from '@/components/userList/userForm';

export default function Home() {


  return (
    <Flex borderWidth="1px"
          flexDirection="column"
          w={'85vw'}
          minH={"80vh"}
          justifySelf="center"
          mt={20}
          boxShadow="md"
          p={8}
          gap="6"
    >
      <Box>
        <Text  fontSize={20} fontWeight={700} >Lista de usuários</Text>
      </Box>
      <Box>
        <UserDrawer></UserDrawer>
      </Box>
      <Box>
        <UserList></UserList>
      </Box>

    </Flex>
  );
}
