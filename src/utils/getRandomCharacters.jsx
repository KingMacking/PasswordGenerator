export function getRandomCharacters (charcodes, length) {
    const randomizedCharcodes = []

    for (let i = 0; i < length; i++){
        const charcode = charcodes[Math.floor(Math.random() * charcodes.length)]
        randomizedCharcodes.push(String.fromCharCode(charcode))
    }

    return randomizedCharcodes.join('')
}