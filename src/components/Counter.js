import { useSelector, useDispatch } from "react-redux";
import {
    increment,
    decrement,
    reset,
    
} from '../configurations/Slice';


const Counter = () => {
    const count = useSelector((state) => state.counter.count);
    const dispatch = useDispatch();

   

    const resetAll = () => {
        
        dispatch(reset());
    }

    return (
        <section>
            <p>{count}</p>
            <div>
                <button onClick={() => dispatch(increment())}>+</button>
                <button onClick={() => dispatch(decrement())}>-</button>
            </div>

           

            <div>
                
                <button onClick={resetAll}>Reset</button>
            </div>
        </section>
    )
}
export default Counter