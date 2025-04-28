import api from '@/services/api';

export function getProfiles() {
  return api.get('/profile/getAll');
}