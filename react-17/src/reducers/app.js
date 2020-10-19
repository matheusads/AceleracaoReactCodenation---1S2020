import packageJson from '../../package.json';

const appInitialState = {
    enviroment: process.env.NODE_ENV,
    name: packageJson.name,
    version: packageJson.version,
};

const appReducer = (state = appInitialState) => state;

export default appReducer;