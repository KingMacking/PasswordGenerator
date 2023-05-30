import { useState } from "react"
import { Icon } from "@iconify/react"

import Footer from "./components/Footer/Footer"
import Generator from "./components/Generator/Generator"
import PasswordOutput from "./components/PasswordOutput/PasswordOutput"
import useColorMode from "./hooks/useColorMode"

function App() {
    const [password, setPassword] = useState("")
    const [colorMode, setColorMode] = useColorMode()
    const [isCopied, setIsCopied] = useState(false)

    return (
        <div className="flex flex-col items-center min-h-screen px-2 text-black transition-all ease-in-out bg-white dark:bg-black dark:text-white font-primary">
            <main className="flex flex-col items-center w-full max-w-xs gap-4 rounded-lg sm:max-w-xl">
                <section className="flex flex-col items-center justify-between w-full gap-4 mt-24">
                    <h1 className="text-3xl font-semibold">Password generator</h1>
                    <button onClick={() => setColorMode(colorMode === "light" ? "dark" : "light")} className="flex items-center" >
                        <Icon className="p-2 text-4xl text-black border rounded-full border-greyLight dark:text-white" icon={colorMode === "dark" ? "ph:moon-fill" : "ph:sun-fill"}/>
                    </button>
                </section>
                <PasswordOutput password={password} isCopied={isCopied} setIsCopied={setIsCopied}/>
                <Generator setPassword={setPassword} setIsCopied={setIsCopied}/>
            </main>
            <Footer />
        </div>
    )
}

export default App
