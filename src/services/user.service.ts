import api from "@/services/api";
import {User} from "@/models/user.model";
import {AxiosResponse} from 'axios'

export function getUsers(searchTerm: string | undefined, profileId: string | undefined): Promise<AxiosResponse<User[]>> {
    return  api.get<User[]>('/user/getUsers', {
        params: { searchTerm, profileId },
    });
}

export function changeStatus(id:string) {
    return api.patch(`/user/active/${id}`)
}

export function deleteUser(id:string) {
    return api.delete(`/user/delete/${id}`)
}

export function createUser(user: User) {
    return api.post(`/user/create`, user);
}
export function updateUser(user: User) {
    return api.put(`/user/update/${user.id}`, user);
}