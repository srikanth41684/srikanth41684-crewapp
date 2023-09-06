import axios from 'axios';

const baseUrl = 'http://10.0.2.2:3000/';

const useCreateRequest = () => {
  const createGetRequst = async params => {
    let requestUrl = baseUrl + params;
    return axios
      .get(requestUrl)
      .then(res => {
        return res;
      })
      .catch(err => {
        console.log('createRequestErr---->', err);
        return err;
      });
  };

  const getNotesData = () => {
    return createGetRequst('notes');
  };

  const searchNotes = query => {
    return createGetRequst(`notes?q=${query}`);
  };

  const categoryNotes = cat => {
    return createGetRequst(`notes?category=:${cat}`);
  };

  const createPostRequest = async (params, data) => {
    let requestUrl = baseUrl + params;
    return axios
      .post(requestUrl, data)
      .then(res => {
        return res;
      })
      .catch(err => {
        return err;
      });
  };

  const postNotesData = data => {
    return createPostRequest('notes', data);
  };

  const createDeleteRequest = async params => {
    let requestUrl = baseUrl + params;
    return axios
      .delete(requestUrl)
      .then(res => {
        return res;
      })
      .catch(err => {
        return err;
      });
  };

  const deleteNotes = id => {
    return createDeleteRequest(`notes/${id}`);
  };

  const createPutRequest = async (params, data) => {
    let requestUrl = baseUrl + params;
    return axios
      .put(requestUrl, data)
      .then(res => {
        return res;
      })
      .catch(err => {
        return err;
      });
  };

  const updateNote = (id, data) => {
    return createPutRequest(`notes/${id}`, data);
  };

  return {
    createGetRequst,
    getNotesData,
    searchNotes,
    categoryNotes,

    createPostRequest,
    postNotesData,

    createDeleteRequest,
    deleteNotes,

    createPutRequest,
    updateNote,
  };
};

export default useCreateRequest;
