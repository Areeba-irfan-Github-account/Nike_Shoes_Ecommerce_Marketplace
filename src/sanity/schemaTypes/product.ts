export default {
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
      {
          name: 'productName',
          title: 'Product Name',
          type: 'string',
      },
      {
          name: 'category',
          title: 'Category',
          type: 'string',
      },
      {
        name:'review',
        title:'Review',
        type:'reference',
        to: [{type:'review'}]
      },
      {
          name: 'slug',
          title: 'Slug',
          type: 'slug',
          options: {
              source: 'productName',
              maxLength: 96,
          },
      },
      {
          name: 'price',
          title: 'Price',
          type: 'number',
      },
      {
          name: 'inventory',
          title: 'Inventory',
          type: 'number',
      },
      {
          name: 'colors',
          title: 'Colors',
          type: 'array',
          of: [{ type: 'string' }],
      },
      {
          name: 'status',
          title: 'Status',
          type: 'string',
      },
      {
          name: 'image',
          title: 'Image',
          type: 'image',
          options: {
              hotspot: true,
          },
      },
      {
          name: 'description',
          title: 'Description',
          type: 'text',
      },
  ],
};