export const deps = {
    dependencies: {
      react: '-',
    },
    // TODO: add this only if using ts
    devDependencies: {
      '@types/react': '16.9.43',
      '@types/react-router-dom': '^5.1.5',
    },
    // TODO: take version from config
    peerDependencies: {    
      react: '^16.13.1',
      'react-dom': '^16.13.1',
    //   "@testing-library/jest-dom": "^5.11.3",
    //   "enzyme-to-json": {
    //     "version": "3.6.1",
    //     "resolveFromEnv": true
    //   },
    //   "enzyme": {
    //     "version": "3.11.0",
    //     "resolveFromEnv": true
    // },
      "handlebars-loader": {
        version: "1.7.1",
        resolveFromEnv: true
      }
    },
  }