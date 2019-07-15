import axios from 'axios';

axios.defaults.baseURL =
  'https://cors-anywhere.herokuapp.com/http://test.subj.ua/api/v1/';
axios.defaults.headers.common.Authorization =
  'Bearer p2l0ynbwahsnx2404tcxi4lwyurwrpoyrwwr';

const getAllItems = async () => {
  const response = await axios.get('/notes');
  return response.data;
};

const addItem = async (item, source) => {
  const response = await axios.post('/notes', item, {
    cancelToken: source.token,
  });
  return response.data;
};

const deleteItem = async (id, source) => {
  const response = await axios.delete(`/notes/${id}`, {
    cancelToken: source.token,
  });
  return response.status === 204;
};

const updateItem = async note => {
  const response = await axios.patch(`/notes/${note.id}`, {
    title: note.title || '',
    text: note.text || '',
  });
  return response.data;
};

export { getAllItems, addItem, deleteItem, updateItem };
