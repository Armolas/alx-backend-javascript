export default function handleResponseFromAPI(promise) {
  promise
    .then(() => {
      const res = {
        status: 200,
        body: 'Success',
      };
      return res;
    })
    .catch(() => Error())
    .finally(() => {
      console.log('Got a response from the API');
    });
}
