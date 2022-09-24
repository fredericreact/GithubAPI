# Semantic UI

```javascript
$  yarn add semantic-ui-react semantic-ui-css
```

Semantic react c'est les composants, Semantic css c'est le CSS

# Images

utiliser import car webpack va tout deplacer

# PropTypes

```javascript 
Message.defaultProps ={
    total:0
}

Message.propTypes = {
    total : PropTypes.number
}

```

Je peux definir en not required et fournir une valeur par defaut

# props

```javascript 
const Message =({total}) =>{
    
}
```
c'est equivalent a 
```javascript

const Message =(props) =>{
{total} = props    
}
```