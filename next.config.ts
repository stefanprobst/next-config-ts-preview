import type { NextConfig } from 'next'
import { baseUrl } from './config/env.config'

console.log(baseUrl)

const config: NextConfig = {
  env: {
    hello_next_config_ts: 'Hello, next.config.ts!',
  },
}

export default config
