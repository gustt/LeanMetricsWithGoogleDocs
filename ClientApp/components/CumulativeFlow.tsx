import * as React from 'react';
import { connect } from 'react-redux'
import { NavLink, Link } from 'react-router-dom';
import { ApplicationState } from '../store';
import * as TimeState from '../store/Times';
import { RouteComponentProps } from 'react-router';

type TimesProps =
    TimeState.TimeState
    & typeof TimeState.actionCreators
    & RouteComponentProps<{}>;

export class ComulativeFlow extends React.Component<TimesProps, {}> {
    componentWillMount() {
        this.props.buscarAction();
    }

    public render() {
        return <div>
            <h1>Cumulative Flow Diagram</h1>
            {
                this.props.data.map(time =>
                    <div>
                        <h2>Time {time.nome}</h2>
                        <img className="fullscreen" src={time.cumulativeFlowURL + '&timechange=' + Date.now.call(this)} alt={"CFD do Time " + time.nome} />
                    </div>
                )
            }
        </div>
    }
}

export default connect(
    (state: ApplicationState) => state.times,
    TimeState.actionCreators
)(ComulativeFlow) as typeof ComulativeFlow;