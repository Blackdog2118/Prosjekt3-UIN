
const Movie ={
    title: 'Movie',
  name: 'movie',
  type: 'document',

  fields: [
    {
      title: 'Film',
      name: 'title',
      type: 'string',
      description:'Dette er navnet på en Film'
    },
 
          {
            title: 'Actor',
            name: 'actor',
            type: 'reference',
            to: [{type: 'actor'}]
          }
      
      
]
}

export default Movie