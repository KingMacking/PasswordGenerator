import { Icon } from "@iconify/react"
import { useState } from "react"
import { CopyToClipboard } from 'react-copy-to-clipboard'

const PasswordOutput = ({password, isCopied, setIsCopied}) => {
    return (
        <div className="flex w-full overflow-hidden rounded-md dark:bg-greyDark bg-greyWhite">
            <input className="w-full px-3 py-2 text-lg sm:text-2xl dark:bg-greyDark bg-greyWhite" disabled value={password} placeholder="P4$5W0rD!"/>
            <CopyToClipboard text={password} onCopy={() => setIsCopied(true)} >
                <button 
                    className={`p-4 text-lg transition-all ease-in-out border-2 rounded-md ${isCopied ? "text-white border-success bg-success" : "text-primary dark:bg-greyDark bg-greyWhite border-primary hover:bg-primary dark:hover:bg-primary hover:text-white"}`}>
                    <Icon icon={isCopied ? "iconamoon:check-bold" : "bxs:copy"} />
                </button>
            </CopyToClipboard>
        </div>
    )
}
export default PasswordOutput