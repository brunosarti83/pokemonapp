
export default (name) => {
    const sizeVar = ((name.length - 10) * -2) + 16
    const sizeFix = ((750 / name.length) * 1.6) 
    document.documentElement.style.setProperty('--name-size-var', `${sizeVar}dvw`)
    document.documentElement.style.setProperty('--name-size-fix', `${sizeFix}px`)
}