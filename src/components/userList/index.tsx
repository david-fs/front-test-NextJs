'use client'

import {Flex} from "@chakra-ui/react";
import {Filters} from "@/components/userList/filters/filters";
import {UserTable} from "@/components/userList/usertable/userTable";
import { GET_USERS, useGetUsers } from '@/hooks/useUsers';
import { useEffect, useState } from 'react';
import { useQueryClient } from '@tanstack/react-query';

export function UserList() {
    const [searchTerm, setSearchTerm] = useState<string>('');
    const [profileFilters, setProfileFilters] = useState<string>('');
    const {data: users } = useGetUsers(searchTerm, profileFilters);
    const queryClient = useQueryClient();

    useEffect(() => {
      queryClient.invalidateQueries({queryKey:[GET_USERS]});
    },[queryClient, searchTerm, profileFilters]);

  return(
        <Flex flexDirection="column" gap={4}>
            <Filters setSearchTerm={setSearchTerm} setProfileFilters={setProfileFilters}></Filters>
            <UserTable data={users?.data || []}></UserTable>
        </Flex>
    );
}