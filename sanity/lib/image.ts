import createImageUrlBuilder from '@sanity/image-url'
import type { Image } from 'sanity'

import { dataset, projectId } from '../env'

const imageBuilder = createImageUrlBuilder({
  projectId: projectId || '',
  dataset: dataset || '',
})

export const urlForImage = (source: Image) => {
  return imageBuilder?.image(source).auto('format').fit('max').url();
}

// export const urlForImage = (source: Image) => {
//   if (!source || !source.asset || !source.asset._ref) {
//     throw new Error('Invalid image source');
//   }
//   return imageBuilder?.image(source).auto('format').fit('max').url();
// }
