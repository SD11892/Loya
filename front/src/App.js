import React from 'react';
import { useDispatch } from 'react-redux';
import { useRoutes, useNavigate } from 'react-router-dom';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { routes } from './routes';
import GlobalStyle from './theme/globalStyle';
import { theme } from './theme/theme';
import { Hub, Auth, Amplify } from 'aws-amplify';
import { Loader } from 'rsuite';
import { getByGmail } from './actions/auth';
import { getAll } from './actions/project';
import awsConfig from './aws-exports';
import 'toastr/toastr.js';
import 'toastr/build/toastr.css';
import toastr from 'toastr';

Amplify.configure(awsConfig);

const App = () => {
  const [loading, setLoading] = React.useState(true);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // get user
  async function getUser() {
    try {
      await Auth.currentSession()
        .then((data) => {
          let idToken = data.getIdToken();
          let gmail = idToken.payload.email;
          getByGmail(gmail)
            .then(async (result) => {
              console.log('result=', result);
              if (result.CODE === 200) {
                if (result.data.data.data === 0) {
                  localStorage.setItem('email', gmail);
                  localStorage.setItem('password', 'abcd!@#$1234');
                  localStorage.setItem('upgrade', 'free');
                  await navigate('/profile');
                } else {
                  await localStorage.setItem(
                    'email',
                    JSON.stringify(result.data.data.data.email)
                  );
                  await localStorage.setItem(
                    'upgrade',
                    JSON.stringify(result.data.data.data.upgrade)
                  );
                  await localStorage.setItem(
                    'user',
                    JSON.stringify(result.data.data.data.username)
                  );
                  await localStorage.setItem(
                    'userId',
                    result.data.data.data.id
                  );
                  await dispatch(getAll()).then(() =>
                    navigate('/testimonials')
                  );
                }
              }
            })
            .catch((err) => {
              toastr.error('Server error occured');
            });
        })
        .catch((err) => console.log(err));
      setLoading(false);
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  }
  //listen for sign in + out events, if neither are happening check if user exists
  React.useEffect(() => {
    Hub.listen('auth', ({ payload }) => {
      if (payload.event === 'signIn') {
        return getUser();
      }
    });
  }, []);

  // show loading screen while fetching, otherwise return page
  // if (loading) {
  //   return <Loader speed="slow" size="md" />;
  // } else {
  const content = useRoutes(routes);
  return (
    <MuiThemeProvider theme={theme}>
      <GlobalStyle />
      {content}
    </MuiThemeProvider>
  );
};
export default App;
