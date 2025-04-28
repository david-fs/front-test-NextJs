import { changeStatus, deleteUser, getUsers } from '@/services/user.service';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { toaster } from '@/components/ui/toaster';

export const GET_USERS = "GET_USERS_QUERY";
export const CHANGE_STATUS = "CHANGE_STATUS";
export const DELETE_USER = "DELETE_USER";

export function useGetUsers (searchTerm?: string, profileId?: string) {
    return useQuery({
        queryKey: [GET_USERS],
        queryFn: () => getUsers(searchTerm, profileId),
    });
}

export function useChangeStatus () {
    const queryClient = useQueryClient();

    return useMutation({
        mutationKey: [CHANGE_STATUS],
        mutationFn: changeStatus,
        onSuccess: (data) => {
            toaster.create({
                title: `Usuário ${data.data.isActive ? 'ativado.' : 'desativado.'}`,
                type: 'success',
            })
            queryClient.invalidateQueries({queryKey:[GET_USERS]});
        },
        onError: (err) => {
            toaster.create({
                title: err.message,
                type: 'error',
            })
        }
    })
}

export function useDeleteUser() {
    const queryClient = useQueryClient();
    return useMutation({
        mutationKey: [DELETE_USER],
        mutationFn: deleteUser,
        onSuccess: () => {
            toaster.create({
                title: `Usuário deletado.`,
                type: 'success',
            })
            queryClient.invalidateQueries({queryKey:[GET_USERS]});
        },
        onError: (err) => {
            toaster.create({
                title: err.message,
                type: 'error',
            })
        }
    })
}