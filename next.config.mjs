const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  assetPrefix: isProd ? '/abelozerov/blog/' : '',
  basePath: isProd ? '/abelozerov/blog' : '',
  output: 'export'
};

export default nextConfig;
