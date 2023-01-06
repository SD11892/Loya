export default {
  api: {
    endpoint: process.env.REACT_APP_API_ENDPOINT,
  },
  cognito: {
    REGION: process.env.REACT_APP_COGNITO_REGION,
    USER_POOL_ID: process.env.REACT_APP_COGNITO_USER_POOL_ID,
    IDENTITY_POOL_ID: process.env.REACT_APP_COGNITO_IDENTITY_POOL_ID,
    APP_CLIENT_ID: process.env.REACT_APP_COGNITO_APP_CLIENT_ID,
    AUTH_FLOW_TYPE: process.env.REACT_APP_COGNITO_AUTH_FLOW_TYPE,
    DOMAIN: process.env.REACT_APP_COGNITO_DOMAIN,
    SCOPE: process.env.REACT_APP_COGNITO_SCOPE.split(","),
    REDIRECT_SIGN_IN: process.env.REACT_APP_COGNITO_REDIRECT_SIGN_IN,
    REDIRECT_SIGN_OUT: process.env.REACT_APP_COGNITO_REDIRECT_SIGN_OUT,
    RESPONSE_TYPE: process.env.REACT_APP_COGNITO_RESPONSE_TYPE,
  },
  analytics: {
    TRACKING_ID: process.env.REACT_APP_GOOGLE_ANALYTICS_TRACKING_ID,
  },
};
