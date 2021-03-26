const Actor ={
    title: 'Actor',
  name: 'actor',
  type: 'document',

  fields: [
    {
      title: 'Actor',
      name: 'actor',
      type: 'string',
      description:'Dette er navnet på en Skuespiller',
      validation: (Rule) => Rule.required(),
      
    },
]
}

export default Actor