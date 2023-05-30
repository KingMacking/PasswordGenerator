import { useState } from "react"

import { generateCharcodesArray } from "../../utils/charcodesGenerator"

import Length from "./Options/Length"
import Paramaters from "./Options/Paramaters"
import Strength from "./Strength/Strength"
import { getRandomCharacters } from "../../utils/getRandomCharacters"

const NUMBER_CHARCODES = generateCharcodesArray(48, 57)
const SYMBOLS_CHARCODES = [33, 40, 41, 45, 46, 63, 91, 93, 95, 96, 126, 59, 58, 64, 35, 36, 37, 94, 38, 42, 43, 61]
const UPPER_CHARCODES = generateCharcodesArray(65, 90)
const LOWER_CHARCODES = generateCharcodesArray(97, 122)

const Generator = ({setPassword, setIsCopied}) => {
    const [parameters, setParameters] = useState({
        uppercase: true,
        lowercase: true,
        numbers: true,
        symbols: true
    })
    
    const [passwordLength, setPasswordLength] = useState(6)

    const generatePassword = (parameters, length) => {

        setIsCopied(false)

        if(!parameters.uppercase && !parameters.lowercase && !parameters.numbers && !parameters.symbols) {
            return "You must select 1 option at least"
        }
        let charcodes = []
        if(parameters.lowercase)  charcodes = charcodes.concat(LOWER_CHARCODES)
        if(parameters.uppercase) charcodes = charcodes.concat(UPPER_CHARCODES)
        if(parameters.numbers) charcodes = charcodes.concat(NUMBER_CHARCODES)
        if(parameters.symbols) charcodes = charcodes.concat(SYMBOLS_CHARCODES)
        return getRandomCharacters(charcodes, length)
    }

    return (
        <article className="flex flex-col w-full gap-4 px-6 py-4 rounded-md dark:bg-greyDark bg-greyWhite">
            <Length passwordLength={passwordLength} setPasswordLength={setPasswordLength} />
            <Paramaters parameters={parameters} setParameters={setParameters} />
            <Strength length={passwordLength} parameters={parameters} />
            <button className="p-3 text-xl font-semibold transition-all ease-in-out rounded-md bg-primary hover:scale-105 hover:drop-shadow" onClick={() => setPassword(generatePassword(parameters, passwordLength))}>Generate</button>
        </article>
    )
}
export default Generator