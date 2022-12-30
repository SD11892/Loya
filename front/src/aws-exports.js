import config from './config';
export default {
  Auth: {
    mandatorySignIn: true,
    aws_cognito_region: config.cognito.REGION,
    region: config.cognito.REGION,
    userPoolId: config.cognito.USER_POOL_ID,
    // identityPoolId: config.cognito.IDENTITY_POOL_ID,
    userPoolWebClientId: config.cognito.APP_CLIENT_ID,
    authenticationFlowType: config.cognito.AUTH_FLOW_TYPE,
    oauth: {
      domain: config.cognito.DOMAIN,
      scope: config.cognito.SCOPE,
      redirectSignIn: config.cognito.REDIRECT_SIGN_IN,
      redirectSignOut: config.cognito.REDIRECT_SIGN_OUT,
      responseType: config.cognito.RESPONSE_TYPE // or 'token', note that REFRESH token will only be generated when the responseType is code
    },
    'federationTarget': 'COGNITO_USER_POOLS'
  },
}