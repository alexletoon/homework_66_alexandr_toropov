const divParent = document.getElementById('container')

for(i = 0; i < 5; i++){
    const divChild = document.createElement('div')
    divChild.className = 'element'
    divChild.innerText = `Element ${i+1}`
    divParent.append(divChild)
}
