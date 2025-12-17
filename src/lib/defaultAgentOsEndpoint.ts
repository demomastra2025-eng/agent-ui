import { constructEndpointUrl } from '@/lib/constructEndpointUrl'

export const DEFAULT_AGENTOS_ENDPOINT =
  constructEndpointUrl(process.env.NEXT_PUBLIC_AGENTOS_ENDPOINT) ||
  'http://localhost:8080'

