import React,{ useState,useCallback} from 'react';

function Howtousecallback() {

    const [age,setAge] = useState(25)
    const [salary,setSalary] = useState(25000)


    const incrementAge = useCallback(
        () => {setAge(age+1)},[age]
    )

    const incrementSalary = useCallback(
        () => {setSalary(salary+1000)},[salary]
    )

return(
    <div>
            <h1>{age}</h1>
            <button onClick={incrementAge}>Increment Age</button>
        <hr />
            <h1>{salary}</h1>
            <button onClick={incrementSalary}>Increment Salary</button>
     </div>
    )
}

export default Howtousecallback;
