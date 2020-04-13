module.exports =  {
  name: 'pagina:graphql',
  description: "Pagina Gerada em src/pages",
  run: async toolbox =>{
    const {
      parameters,
      criarComponenteGraphql
    } = toolbox

    const name = parameters.first

   

    await criarComponenteGraphql('src/pages', name)
    
  }
  
}