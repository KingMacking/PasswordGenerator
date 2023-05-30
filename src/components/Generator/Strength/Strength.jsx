import strengthCalculator from "../../../utils/strengthCalculator"

const Strength = ({parameters, length}) => {
    const strength = strengthCalculator(length, parameters.uppercase, parameters.lowercase, parameters.numbers, parameters.symbols)
    return (
        <section className="flex items-center justify-between">
            <span className="sm:text-lg">Strength:</span>
            <div className="flex items-center gap-1">
                <span className="text-sm md:text-base sm:mr-2">{strength.label}</span>
                {strength.strengthCriteria.map((elem, index) => {
                    return (
                        <div key={index} style={{backgroundColor: (index+1 <= strength.strengthValue) ? strength.color : "transparent"}} className="w-3 h-8 border border-black sm:border-2 sm:w-4 dark:border-white"></div>
                    )
                })}
            </div>
        </section>
    )
}
export default Strength