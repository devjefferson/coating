module.exports =  {
  name: 'gerar:componente',
  description: "Componente Gerado em src/componente",
  run: async toolbox =>{
    const {
      parameters,
      criarComponente
    } = toolbox

    const name = parameters.first

   

    await criarComponente('src/components', name)
    
  }

  
}