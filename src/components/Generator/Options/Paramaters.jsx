const PARAMETERS_DATA = [
    {
        name: "uppercase",
        label: "Uppercase",
    },
    {
        name: "lowercase",
        label: "Lowercase",
    },
    {
        name: "numbers",
        label: "Numbers",
    },
    {
        name: "symbols",
        label: "Symbols",
    },
]

const Paramaters = ({parameters, setParameters}) => {

    const handleOnChange = (event, prop) => {
        const auxObject = {}
        auxObject[prop] = event.target.checked
        setParameters({...parameters, ...auxObject})
    }
    
    return (
        <div className="flex flex-col">
            <ul className="sm:text-lg">
                {PARAMETERS_DATA.map(parameter => {
                    return (
                        <li className="flex items-center w-full gap-4 mb-1 last:mb-0" key={parameter.name}>
                            <input 
                                className="w-5 h-5 bg-transparent border-2 rounded-sm focus:ring-0 checked:border-none border-primary checked:bg-primary text-primary" 
                                onChange={(e) => handleOnChange(e, parameter.name)} type="checkbox" name={parameter.name} id={parameter.name}
                                defaultChecked={true}
                            />
                            <label htmlFor={parameter.name}>{parameter.label}</label>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}
export default Paramaters