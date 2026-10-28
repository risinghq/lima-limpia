import path from 'node:path';
import type { NextConfig } from 'next';

// Next.js and Turbopack trace from the monorepo root in development. A build elsewhere sets
// USE_MONOREPO_PATHS=true to do the same.
const useMonorepoPaths = process.env.NODE_ENV === 'development' || process.env.USE_MONOREPO_PATHS === 'true';
const monorepoRoot = path.join(__dirname, '..', '..');

const nextConfig: NextConfig = {
  ...(useMonorepoPaths && {
    outputFileTracingRoot: monorepoRoot,
    turbopack: {
      root: monorepoRoot,
    },
  }),
  pageExtensions: ['ts', 'tsx'],
  experimental: {
    cssChunking: true,
  },
  transpilePackages: ['next-mdx-remote'],
  devIndicators: {
    position: 'bottom-right',
  },
  poweredByHeader: false,
};

export default nextConfig;
