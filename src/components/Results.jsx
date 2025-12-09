import {calculateInvestmentResults} from "../util/investment"

export default function Results({userInput}){
    const resultData = calculateInvestmentResults(userInput);
    console.log("resultData", resultData);
    return(
        <p>Results...</p>
        
    )


}