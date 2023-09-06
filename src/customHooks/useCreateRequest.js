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

  return {
    createGetRequst,
    getNotesData,

    createPostRequest,
    postNotesData,
  };
};

export default useCreateRequest;
