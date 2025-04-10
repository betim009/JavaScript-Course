# Seletores DOM em JavaScript ✏️

Seletores são métodos que permitem **localizar e manipular elementos HTML** usando JavaScript. Existem várias formas de selecionar elementos, cada uma com suas particularidades.

1. getElementById("valor_id")
2. getElementsByClassName("valor_classe")
3. getElementsByTagName("tag")
4. querySelector("seletor_classe_tag_id")
5. querySelectorAll("seletor_classe_tag_id")


<br>
<br>


**🏆 Melhores Práticas**
<table class="seletores-table">
    <thead>
        <tr>
            <th>Seletor</th>
            <th>Quando Usar</th>
            <th>Retorno</th>
            <th>Performance</th>
            <th>Exemplo</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><code>getElementById()</code></td>
            <td>Elementos com <strong>ID único</strong></td>
            <td>Elemento único ou <code>null</code></td>
            <td>⭐ Mais rápido</td>
            <td><code>document.getElementById('header')</code></td>
        </tr>
        <tr>
            <td><code>querySelector()</code></td>
            <td>
                <ul>
                    <li>Seletores CSS complexos</li>
                    <li>Primeira ocorrência</li>
                </ul>
            </td>
            <td>Elemento único ou <code>null</code></td>
            <td>⚡ Rápido</td>
            <td><code>document.querySelector('.btn.primary')</code></td>
        </tr>
        <tr>
            <td><code>querySelectorAll()</code></td>
            <td>
                <ul>
                    <li>Seleção múltipla</li>
                    <li>Seletores CSS</li>
                </ul>
            </td>
            <td><code>NodeList</code> (estático)</td>
            <td>💨 Moderada</td>
            <td><code>document.querySelectorAll('input[type="text"]')</code></td>
        </tr>
        <tr>
            <td><code>getElementsByClassName()</code></td>
            <td>Elementos com mesma classe</td>
            <td><code>HTMLCollection</code> (dinâmica)</td>
            <td>🚀 Rápido</td>
            <td><code>document.getElementsByClassName('active')</code></td>
        </tr>
        <tr>
            <td><code>getElementsByTagName()</code></td>
            <td>Elementos pela tag HTML</td>
            <td><code>HTMLCollection</code> (dinâmica)</td>
            <td>⚡ Rápido</td>
            <td><code>document.getElementsByTagName('li')</code></td>
        </tr>
    </tbody>
</table>


------------------------------- 
### Código de exemplo do HTML:
Seleciona **UM único elemento** pelo seu atributo `id`.
```html
    <div id="resultado"> 

    </div>
```

### Código de exemplo no javascript
```javascript
    const divResultado = document.getElementById("resultado");
```

----------------

