
const Movie ={
    title: 'Movie',
  name: 'movie',
  type: 'document',

  fields: [
    {
      title: 'Movie',
      name: 'movie',
      type: 'string',
      description:'Dette er navnet på en Film',
    },
    {
        title: 'Actor',
        name: 'actor',
        type: 'document',
        fields: [
          {
            title: 'Actor',
            name: 'actor',
            type: 'reference',
            to: [{type: 'actor'}],
            validation: (Rule) => Rule.required(),
          }
        ]
      }
]
}

export default Movie