# coating CLI

A CLI for coating.

## Customizing your CLI

Check out the documentation at https://github.com/infinitered/gluegun/tree/master/docs.

## Publishing to NPM

To package your CLI up for NPM, do this:


# Componentes :

## Simples componentes
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
# License

MIT - see LICENSE

