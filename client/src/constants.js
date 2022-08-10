const production = {
    // url: 'https://click-test-full.herokuapp.com'
  };
  const development = {
    url: 'http://localhost:3002'
  };
  export const config = process.env.NODE_ENV === 'development' ? development : production;