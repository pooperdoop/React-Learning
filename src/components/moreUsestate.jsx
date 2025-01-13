import React,{useState} from "react";


function Counter(){

    const [counterValue, setCounterValue] = useState(1)

    const [count, setCount] = useState(0)

    return(

        <section className="d-flex justify-content-center align-items-center bg-success">
            <h1 className="sectionTitle">More useState / Counter / Onclick events</h1>

            <div className="h-50 col col-md-12 col-lg-3 d-flex justify-content-center align-items-center flex-column">
                        <h1 className="counter text-center">{count}</h1>
                        <h2>Value = +-{counterValue}</h2>
                <div className="h-25 w-100 d-flex justify-content-between align-items-center">

                    <button type="button" className="counterButton" onClick={() => setCount(count+counterValue)}>
                        Increment
                    </button>
                    <button type="button" className="counterButton" onClick={() => setCount(0)}>
                        Reset
                    </button>
                    <button type="button" className="counterButton" onClick={() => setCount(count-counterValue)}>
                        Decrement
                    </button>
                </div>
                    <div className="h-25 w-100 d-flex justify-content-between align-items-center">

                    <button type="button" className="counterButton" onClick={() => setCounterValue(1)}>
                        Value = 1
                    </button>
                    <button type="button" className="counterButton" onClick={() => setCounterValue(2)}>
                        Value = 2
                    </button>
                    <button type="button" className="counterButton" onClick={() => setCounterValue(3)}>
                        Value = 3
                    </button>
                </div>
            </div>


        </section>

    );

}

export default Counter