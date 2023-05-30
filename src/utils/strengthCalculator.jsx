const strengthCalculator = (length, uppercase, lowercase, numbers, symbols) => {
    const strengthCriteria = [
        {label: "Very weak", color: "#E43715"},
        {label: "Weak", color: "#E49B15"},
        {label: "Moderate", color: "#E4DD15"},
        {label: "Strong", color: "#007F2C"},
        {label: "Very strong", color: "#007CE9"},
    ]
    let strengthValue = 0
    strengthValue = strengthValue + (length >=12 && 1) + (uppercase && 1) + (lowercase && 1) + (numbers && 1) + (symbols && 1)

    const {label, color} = strengthCriteria[strengthValue > 0 ? strengthValue-1 : 0]
    return {label, color, strengthValue, strengthCriteria}
}
export default strengthCalculator