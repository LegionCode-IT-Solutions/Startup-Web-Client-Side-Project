import apiClient from '../api/apiClient';

export const login = async (credentials) => {
  const response = await apiClient.post('/login', credentials);
  return response.data;
};
