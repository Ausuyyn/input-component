/* 
const multiline = document.querySelector('[multiline]')
multiline.style.height = `${multiline.attributes.row.value}cm` 
*/


multiline = document.querySelector('[multiline]')
if ( multiline ) {
    let textArea = document.createElement('textarea')
    textArea.setAttribute('rows', multiline.attributes.row.value)
    multiline.parentElement.appendChild(textArea)
    multiline.remove()
}

/*  */
const placeholder = [...document.querySelectorAll('[text]')]

placeholder.forEach(element => {
    element.placeholder = element.attributes.text.value
});

/*  */
startIconFunction = ( div, icon )=> {
    const span = document.createElement('span')
    span.innerHTML = icon
    span.classList.add('material-icons')
    div.appendChild(span)
}

endIconFunction = ( div, icon )=> {
    const span = document.createElement('span')
    span.innerHTML = icon
    span.classList.add('material-icons')
    div.appendChild(span)
}

const startIcon = [...document.querySelectorAll('[startIcon]')]
const endIcon = [...document.querySelectorAll('[EndIcon]')]
const icons = startIcon.concat(endIcon)

icons.forEach(element => {
    let div = document.createElement('div')
    element.parentElement.appendChild(div)
    div.appendChild(element)
    if( element.attributes.startIcon ) {
        startIconFunction( div, element.attributes.startIcon.value )
    } else {
        endIconFunction( div, element.attributes.endIcon.value )
    }
});

/*  */
helperText = [...document.querySelectorAll('[helperText]')]
helperText.forEach(element => {
    const h5 = element.nextElementSibling
    let helperText = element.attributes.helpertext.textContent
    h5.innerHTML = helperText
});


