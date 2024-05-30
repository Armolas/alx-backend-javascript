export default function handleResponseFromAPI(promise) {
  return promise
    .then(() => {
      const res = {
        status: 200,
        body: 'Success',
      };
      return res;
    })
    .catch(() => {
    	return Error();
    })
    .finally(() => {
      console.log('Got a response from the API');
    });
}
