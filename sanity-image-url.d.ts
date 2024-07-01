declare module '@sanity/image-url' {
    import { ImageUrlBuilder } from '@sanity/image-url/lib/types/builder'
    import { SanityClient } from '@sanity/client'
  
    function createImageUrlBuilder(client: SanityClient | { projectId: string; dataset: string }): ImageUrlBuilder
  
    export default createImageUrlBuilder
  }