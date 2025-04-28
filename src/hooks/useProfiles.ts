import { useQuery } from '@tanstack/react-query';
import { getProfiles } from '@/services/profile.service';

export const GET_PROFILES = "GET_PROFILES_QUERY";

export function UseGetProfiles () {
  return useQuery({
    queryKey: [GET_PROFILES],
    queryFn: () => getProfiles(),
  })
}