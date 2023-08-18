
export default (name) => {
    const sizeVar = ((name.length - 10) * -2) + 13
    const sizeFix = ((750 / name.length) * 1.4) 
    document.documentElement.style.setProperty('--name-size-var', `${sizeVar}dvw`)
    document.documentElement.style.setProperty('--name-size-fix', `${sizeFix}px`)
}