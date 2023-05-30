const Length = ({passwordLength, setPasswordLength}) => {
    return (
        <div>
            <label className="flex justify-between min-w-full mb-1 sm:text-lg" htmlFor="length">Characters<span>{passwordLength}</span></label>
            <input 
                type="range"
                onChange={(e) => setPasswordLength(e.target.value)}
                min={8}
                max={24}
                step={1}
                value={passwordLength}
                className="
                    min-w-full appearance-none bg-transparent
                    [&::-webkit-slider-runnable-track]:rounded-full 
                    [&::-webkit-slider-runnable-track]:bg-primary/30
                    [&::-webkit-slider-thumb]:appearance-none
                    [&::-webkit-slider-thumb]:h-3
                    [&::-webkit-slider-thumb]:w-3
                    [&::-webkit-slider-thumb]:scale-[200%]
                    [&::-webkit-slider-thumb]:inset-10
                    [&::-webkit-slider-thumb]:rounded-full
                    [&::-webkit-slider-thumb]:dark:bg-white
                    [&::-webkit-slider-thumb]:bg-black
                    px-1
                "
            />
        </div>
    )
}
export default Length