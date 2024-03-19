module.exports = {
   testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?)$',
   setupFilesAfterEnv: ['./jest.setup.js'],
   moduleFileExtensions: ['js', 'jsx', 'json', 'node'],
   transform: {
      '^.+\\.jsx?$': [
         'esbuild-jest',
         {
            sourcemap: true,
            loaders: {
               '.js': 'jsx',
               '.test.jsx': 'jsx',
            },
         },
      ],
   },
   moduleNameMapper: {
      '^react-blank-project(.*)$': '<rootDir>/src$1',
   },
};
