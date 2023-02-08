import React from 'react';
import { useDispatch } from 'react-redux';
import { useRoutes, useNavigate } from 'react-router-dom';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { routes } from './routes';
import GlobalStyle from './theme/globalStyle';
import { theme } from './theme/theme';
import { Hub, Auth, Amplify } from 'aws-amplify';
import { getByGmail } from './actions/auth';
import { getAll } from './actions/project';
import { getAll as getTestimonialAll } from './actions/testimonial';
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
        .then(async (data) => {
          console.log('data=', data);
          let idToken = data.getIdToken();
          let gmail = idToken.payload.email;
          await getByGmail(gmail).then(async (result) => {
            console.log('result=========+++++', result);
            if (result.data.status === 200) {
              console.log('here Register');
              localStorage.setItem('email', gmail);
              localStorage.setItem('password', '!@#$%^&*()abcd1234');
              localStorage.setItem('upgrade', 'free');
              await navigate('/profile');
            } else if (result.data.status === 201) {
              const promise = new Promise((resolve, reject) => {
                localStorage.setItem('email', result.data.data.data.email);
                localStorage.setItem(
                  'upgrade',
                  JSON.parse(JSON.stringify(result.data.data.data.upgrade))
                );
                localStorage.setItem('user', result.data.data.data.username);
                localStorage.setItem('userId', result.data.data.data.id);
                resolve();
              });
              promise
                .then(() => {
                  let userId = localStorage.getItem('userId');
                  console.log('localstorage=', userId);
                  dispatch(getAll()).then((res) => {
                    console.log('projects=', res);
                    let projectId = res.data.projects[0].id;
                    localStorage.setItem('projectId', projectId);
                    dispatch(getTestimonialAll())
                      .then((result) => {
                        navigate('/testimonials');
                      })
                      .catch((erro) => {
                        console.log('AppTestimonialError=', erro);
                      });
                  });
                })
                .catch((err) => {
                  toastr.error(err);
                });
            }
          });
        })
        .catch((err) => {
          console.log('errrr=', err);
          toastr.error('Server error occured');
        });
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  }
  //listen for sign in + out events, if neither are happening check if user exists
  React.useEffect(() => {
    Hub.listen('auth', ({ payload }) => {
      if (payload.event === 'signIn') {
        console.log('AUthaction HERE!!!');
        return getUser();
      }
      if (payload.event === 'signOut') {
        console.log('Sign Out HERE!!!');
        localStorage.clear();
        //navigate('/');
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
