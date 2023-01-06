import { useRoutes } from 'react-router-dom';
import { ThemeProvider } from '@mui/material';
import { routes } from './routes';
import GlobalStyle from './theme/globalStyle';
import { theme } from './theme/theme';
import { Amplify } from 'aws-amplify';
import awsConfig from './aws-exports';
import 'toastr/toastr.js';
import 'toastr/build/toastr.css';

Amplify.configure(awsConfig);

const App = () => {
  const content = useRoutes(routes);
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {content}
    </ThemeProvider>
  );
};

export default App;
