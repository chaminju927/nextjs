/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
};

module.exports = nextConfig;
// next.config.js

// const nextConfig = {
//   experimental: {
//     appDir: true,
//   },
//   webpack: (config, { isServer }) => {
//     // TypeScript 파일을 ts-loader로 처리하도록 설정
//     config.module.rules.push({
//       test: /\.(ts|tsx)$/,
//       exclude: /node_modules/,
//       use: {
//         loader: "ts-loader",
//       },
//     });

//     return config;
//   },
// };

// module.exports = nextConfig;
