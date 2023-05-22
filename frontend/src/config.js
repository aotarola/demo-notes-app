const config = {
  // Backend config
  MAX_ATTACHMENT_SIZE: 5_000_000,
  STRIPE_KEY: "pk_test_51NALUpIXxIrRc3hSEX5fjOwQH9zaazHg1JbvrT3wgOZTf0np3f0frtlR3t3IuRPXjMpgvgZg4OlhoSnBf5kLwjKF00p36r8MTq",
  s3: {
    REGION: process.env.REACT_APP_REGION,
    BUCKET: process.env.REACT_APP_BUCKET,
  },
  apiGateway: {
    REGION: process.env.REACT_APP_REGION,
    URL: process.env.REACT_APP_API_URL,
  },
  cognito: {
    REGION: process.env.REACT_APP_REGION,
    USER_POOL_ID: process.env.REACT_APP_USER_POOL_ID,
    APP_CLIENT_ID: process.env.REACT_APP_USER_POOL_CLIENT_ID,
    IDENTITY_POOL_ID: process.env.REACT_APP_IDENTITY_POOL_ID,
  },
};

export default config;
