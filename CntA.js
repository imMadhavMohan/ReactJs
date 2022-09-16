import React,{useReducer} from 'react';
import CntB from '../Components/CntB'
import CntC from '../Components/CntC'
export const CountContext = React.createContext()

const initialState = 0
const reducer = (state, action) => {
	switch (action) {
		case '+':
			return state + 1
		case '-':
			return state - 1
		case 'reset':
			return initialState
		default:
			return state
	}
}

function CntA() {
	const [count, dispatch] = useReducer(reducer, initialState)
	return (
		<CountContext.Provider value={{ countState: count, countDispatch: dispatch }}>
			<div className="App">											
				<CntB />
				<CntC />
			</div>
		</CountContext.Provider>
	)
}

export default CntA