import { type SchemaTypeDefinition } from 'sanity'
import banner from './banner'
import product from './product'
import profile from './profile'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [product, banner, profile],
}
