import { fetch, addTask } from 'domain-task';
import { Action, Reducer, ActionCreator } from 'redux';
import { AppThunkAction } from './';

// -----------------
// STATE - This defines the type of data maintained in the Redux store.

export interface TimeState {
    isLoading?: boolean;
    data?: TimeCoponenteModel[];
}

export interface TimeCoponenteModel
{
    id: number;
    nome: string;
}
// -----------------
// ACTIONS - These are serializable (hence replayable) descriptions of state transitions.
// They do not themselves have any side-effects; they just describe something that is going to happen.

interface BuscarAction {
    type: 'BUSCAR';
}

interface RetornarAction {
    type: 'RETORNAR';
    data: TimeCoponenteModel[];
}

// Declare a 'discriminated union' type. This guarantees that all references to 'type' properties contain one of the
// declared type strings (and not any other arbitrary string).
type KnownAction = BuscarAction | RetornarAction;

// ----------------
// ACTION CREATORS - These are functions exposed to UI components that will trigger a state transition.
// They don't directly mutate state, but they can have external side-effects (such as loading data).

export const actionCreators = {
    buscarAction: (): AppThunkAction<KnownAction> => (dispatch, getState) => {
        // Only load data if it's something we don't already have (and are not already loading)
        let fetchTask = fetch(`api/Time/`)
            .then(response => response.json() as Promise<TimeCoponenteModel[]>)
            .then(data => {
                dispatch({ type: 'RETORNAR', data: data });
            });

        addTask(fetchTask); // Ensure server-side prerendering waits for this to complete
        dispatch({ type: 'BUSCAR' });
    }
};

// ----------------
// REDUCER - For a given state and action, returns the new state. To support time travel, this must not mutate the old state.

const unloadedState: TimeState = { isLoading: false, data: [] };

export const reducer: Reducer<TimeState> = (state: TimeState, incomingAction: Action) => {
    const action = incomingAction as KnownAction;
    switch (action.type) {
        case 'BUSCAR':
            return {
                data: state.data,
                isLoading: true
            };
        case 'RETORNAR':
            // Only accept the incoming data if it matches the most recent request. This ensures we correctly
            // handle out-of-order responses.
            return {
                data: action.data,
                isLoading: false
            };
        default:
            // The following line guarantees that every action in the KnownAction union has been covered by a case above
            const exhaustiveCheck: never = action;
    }

    return state || unloadedState;
};
