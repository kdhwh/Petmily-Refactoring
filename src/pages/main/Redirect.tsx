import axios from 'axios';
import { useEffect } from 'react';

const Redirect = () => {
  const urlParams = new URLSearchParams(window.location.search);
  const idToken = urlParams.get('id_token');
  const accessToken = urlParams.get('access_token');

  console.log('idToken: ', idToken);
  console.log('accessToken:', accessToken);

  useEffect(() => {
    axios
      .get(`http://localhost:1337/api/auth/google/callback?access_token=${accessToken}`)
      .then((res) => console.log(res));
  }, []);
  return <div>hi</div>;
};

export default Redirect;
