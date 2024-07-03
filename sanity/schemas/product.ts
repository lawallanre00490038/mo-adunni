import {defineType, defineField, defineArrayMember} from 'sanity'


const product = {
  name: "product",
  title: "Products",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      validation: (Rule: any) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name", 
        maxLength: 200,
      },
      validation: (Rule: any) => Rule.required(),
    }),
    {
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [{ 
        type: 'image',
          options: {
          hotspot: true,
        }
      }],
      validation: (Rule: any) => Rule.required(),
    },
    defineField({
      name: "details",
      title: "Details",
      type: "text",
      validation: (Rule: any) => Rule.required(),
    }),
    defineField({
      name: "price",
      title: "Price",
      type: "number",
      validation: (Rule: any) => Rule.required().min(0),
    }),
    {
      name: "createdAt",
      title: "CreatedAt",
      type: "datetime",
      options: {
        dateFormat: "YYYY-MM-DDTHH:mm:ssZ",
      },
      readOnly: true,
      
    },
    
  ]
};

export default product;
