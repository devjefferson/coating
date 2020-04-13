<p align="center">
  <img width="250" src="/coating-logo.png">
</p>
<h1 align="center"> Yargs </h1>
<p align="center">
  <b >Yargs be a node.js library fer hearties tryin' ter parse optstrings</b>
</p>

<br>

## Customizing your CLI

Documentação https://github.com/devjefferson/coating.git

## Comando para Instalar

```bash
npm install -g coatingcli
```

```bash
yarn add global coatingcli
```

# Componentes :

## Componentes Simples
Chamada de componente Simples.
```bash
coating componente Exemple
```
Criando uma pasta src/component/. com 2 arquivos sendo index.js e styles.js

### Index.js
````javascript
import React from 'react';

import { Container } from './styles';

export default function Exemple(){
  return (
    <Container>

    </Container>
  );
}
````
O arquivo index.js contém todo o codigo do componentes:

### React Styles.js
````javascript
import styled from 'styled-components';

export const Container = styled.div`
  
`;
````
### React-Native Styles.js
````javascript
import styled from 'styled-components/native';

export const Container = styled.View`
  
`;
````
O arquivo styles.js contém todo o codigo de estilo dependendo dos modulos instalado React ou React-native:

## Componentes com Graphql Ultilizado com Gatsby
Chamada de componente com Graphql.
```bash
coating componente:graphql Exemple
```
Criando uma pasta src/component/. com 2 arquivos sendo index.js e styles.js

### Index.js
````javascript
import React from 'react';
import { useStaticQuery, graphql } from "gatsby"
import { Container } from './styles';

export default function <%= props.name %>(){
  const data = useStaticQuery(graphql`
  {
    
  }
  `)
  return (
    <Container>

    </Container>
  );
}
````
O arquivo index.js contém todo o codigo do componentes:

### React Styles.js
````javascript
import styled from 'styled-components';

export const Container = styled.div`
  
`;
````

O arquivo styles.js contém todo o codigo de estilo styled-component e React:


# Pagina :

## Pagina Simples
Chamada de Pagina Simples.
```bash
coating pagina Exemple
```
Criando uma pasta src/pages/. com 2 arquivos sendo index.js e styles.js

### Index.js
````javascript
import React from 'react';

import { Container } from './styles';

export default function Exemple(){
  return (
    <Container>

    </Container>
  );
}
````
O arquivo index.js contém todo o codigo do componentes:

### React Styles.js
````javascript
import styled from 'styled-components';

export const Container = styled.div`
  
`;
````
### React-Native Styles.js
````javascript
import styled from 'styled-components/native';

export const Container = styled.View`
  
`;
````
O arquivo styles.js contém todo o codigo de estilo dependendo dos modulos instalado React ou React-native:

## Pagina com Graphql Ultilizado com Gatsby
Chamada de pagina com Graphql.
```bash
coating pagina:graphql Exemple
```
Criando uma pasta src/component/. com 2 arquivos sendo index.js e styles.js

### Index.js
````javascript
import React from 'react';
import { useStaticQuery, graphql } from "gatsby"
import { Container } from './styles';

export default function <%= props.name %>(){
  const data = useStaticQuery(graphql`
  {
    
  }
  `)
  return (
    <Container>

    </Container>
  );
}
````
O arquivo index.js contém todo o codigo da pagina:

### React Styles.js
````javascript
import styled from 'styled-components';

export const Container = styled.div`
  
`;
````

O arquivo styles.js contém todo o codigo de estilo styled-component e React:
# License

MIT - see LICENSE

