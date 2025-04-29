import {Flex, Icon, Table} from "@chakra-ui/react";
import {columns} from "@/components/userList/constants";
import {User} from "@/models/user.model";
import { ActiveActions } from '@/components/userList/usertable/activeActions';
import { DeleteAction } from '@/components/userList/usertable/deleteAction';
import { UserDrawer } from '@/components/userList/userForm';

interface UserTableProps {
    data: User[]
}

export function UserTable({data}: UserTableProps) {

    return (
        <Table.ScrollArea borderWidth="1px" rounded="md" >
            <Table.Root size="sm" stickyHeader striped>
                <Table.Header h={'42px'}>
                    <Table.Row bg="bg.subtle" >
                        {columns.map(column => (<Table.ColumnHeader key={column} p={2}>{column}</Table.ColumnHeader>))}
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {data.map((item, index) => (
                        <Table.Row key={item.id} h={'42px'}>
                            <Table.Cell p={2}>{index + 1}</Table.Cell>
                            <Table.Cell p={2}>{item.id}</Table.Cell>
                            <Table.Cell p={2}>{item.firstName}</Table.Cell>
                            <Table.Cell p={2}>{item.lastName}</Table.Cell>
                            <Table.Cell p={2}>{item.email}</Table.Cell>
                            <Table.Cell p={2}>{item.profileId}</Table.Cell>
                            <Table.Cell p={2}>
                                <ActiveActions isActive={item.isActive} id={item.id}></ActiveActions>
                            </Table.Cell>
                            <Table.Cell p={2}>
                                <Flex gap={2}>
                                    <UserDrawer
                                      headerTittle={`Editar usuário ${item.id}`} type={'Edit'}
                                      data={item}></UserDrawer>
                                    <DeleteAction id={item.id}></DeleteAction>
                                </Flex>
                            </Table.Cell>
                        </Table.Row>
                    ))}
                </Table.Body>
            </Table.Root>
        </Table.ScrollArea>
    )
}