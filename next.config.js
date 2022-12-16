/** @type {{eslint: (function(): {dirs: string[]}), images: {disableStaticImages: boolean}, reactStrictMode: boolean}} */
const nextConfig = {
  reactStrictMode: true,
  eslint: createEslint(),
  images: createImages(),
};

function createEslint() {
  return {
    dirs: ['pages', 'src'],
  };
}

function createImages() {
  return {
    disableStaticImages: true,
  };
}

module.exports = nextConfig;
