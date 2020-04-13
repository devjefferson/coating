const fs = require('fs')

module.exports = (toolbox)=>{
  const { filesystem, template, print:{success, error} } = toolbox

  async function isReactNative(){
    const packege = await filesystem.read('package.json', 'json')
    
    return !!packege.dependencies['react-native']
  }

  async function isGatsby(){
    const packege = await filesystem.read('package.json', 'json')
    
    return !!packege.dependencies['gatsby']
  }

  async function criarComponenteGraphql(folder, name){
    if(!name){
      error('Porfavor informe um nome')
      return
    }

    const arqIndex = await folder == 'src/components'
    ? 'index.js'
    : 'index.jsx'
    
    const arqTemplate = await folder == 'src/components'
    ? 'componentgraphql.ejs'
    : 'pagesGraphql.ejs'

    if(!await isGatsby()){
      return error(`Erro ao criar ${folder}/${name} com Graphql node_modules/gatsby Não encontrado`)
    }else{
      await fs.access(`${folder}/${name}`,async (err)=>{
        if (!err) {
          error(`${folder}/${name} ja existe`)
          return
        }else{
  
          await template.generate({
            template: arqTemplate,
            target:`${folder}/${name}/${arqIndex}`,
            props: {name}
          })
      
          const estiloTemplate = (await isReactNative())
            ? 'styles-rn.ejs'
            : 'styles-react.ejs'
      
          await template.generate({
            template: estiloTemplate,
            target: `${folder}/${name}/styles.js`,
          })
          success(`${folder}/${name} Gerado com sucesso`)
  
        }
      })
  
    }

   
   
  }

  toolbox.criarComponenteGraphql = criarComponenteGraphql

};