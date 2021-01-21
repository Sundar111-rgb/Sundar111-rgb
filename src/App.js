
import './App.css';
import {useDispatch, useSelector} from 'react-redux';

function App() {
    const roll = useSelector(state => state);
    const name = useSelector(state => state.name);
    const address = useSelector((state) => {
        return state.address
    })

    const empid = useSelector(state => state.empid);
    const empName = useSelector(state => state.empName);
    const empAddress = useSelector((state) => {
        return state.empAddress
    })

    const dispatch = useDispatch();
    return (
        <div className="App">
            <h1>{roll.roll}</h1>
            <h1>{name}</h1>
            <h1>{address}</h1>
            <hr/>
                <h1>{empid}</h1>
                <h1>{empName}</h1>
                <h1>{empAddress}</h1>
            <button onClick={() => dispatch({
                type: 'CHANGE_NAME',
                payload: { roll: 11,
                           name: 'Chetan',
                           address: 'kerala'
                          }
            })}>Click
            </button>

            <button onClick={() => dispatch({
                type: 'CHANGE_EMP',
                payload: { empid: 1,
                           empName: 'Chauhan',
                           empAddress: 'Mumbai'
                         }
            })}>Click
            </button>
        </div>
    );
}

    //  changeName : (name) => {
    //     const dispatch = useDispatch();
    //     dispatch({type: 'CHANGE_NAME', payload: name})
    // }

// const mapStateToProps = (state) => {
//   return{
//     myname : state.name
//   }
// }
//
// const mapDispatchToProps = (dispatch) => {
//   return {
//   changeName : (name) => {
//     dispatch({type: 'CHANGE_NAME', payload: name})
//   }
// }
// }
//
// export default connect(mapStateToProps,mapDispatchToProps)(App);

export default  App;
