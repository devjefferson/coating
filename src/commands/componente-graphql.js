module.exports =  {
  name: 'componente:graphql',
  description: "Componente Gerado em src/componente",
  run: async toolbox =>{
    const {
      parameters,
      criarComponenteGraphql
    } = toolbox

    const name = parameters.first

   

    await criarComponenteGraphql('src/components', name)
    
  }

  
}