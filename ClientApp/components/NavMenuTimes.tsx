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

export class NavMenuTimes extends React.Component<TimesProps, {}> {
    componentWillMount() {
        this.props.buscarAction();
    }

    public render() {
        return <li>
            {
                this.props.data.map(time =>
                    < NavLink to={'time/' + time.id} activeClassName='active' >
                        <span className='glyphicon glyphicon-th-list'></span> {time.nome}
                    </NavLink>
                )
            }
        </li>;
    }
}

export default connect(
    (state: ApplicationState) => state.times,
    TimeState.actionCreators
)(NavMenuTimes) as typeof NavMenuTimes;