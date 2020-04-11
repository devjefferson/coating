module.exports =  {
  name: 'gerar:pagina',
  description: "Pagina Gerada em src/pages",
  run: async toolbox =>{
    const {
      parameters,
      criarComponente
    } = toolbox

    const name = parameters.first

   

    await criarComponente('src/pages', name)
    
  }
  
}