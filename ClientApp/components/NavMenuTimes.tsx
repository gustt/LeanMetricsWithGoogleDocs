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
    
    private renderTimes() {
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

    public render() {
        return <div className='main-nav'>
                <div className='navbar navbar-inverse'>
                <div className='navbar-header'>
                    <button type='button' className='navbar-toggle' data-toggle='collapse' data-target='.navbar-collapse'>
                        <span className='sr-only'>Recolher menu</span>
                        <span className='icon-bar'></span>
                        <span className='icon-bar'></span>
                        <span className='icon-bar'></span>
                    </button>
                    <Link className='navbar-brand' to={ '/' }>Dash Board Lean</Link>
                </div>
                <div className='clearfix'></div>
                <div className='navbar-collapse collapse'>
                    <ul className='nav navbar-nav'>
                        <li>
                            <NavLink exact to={ '/' } activeClassName='active'>
                                <span className='glyphicon glyphicon-home'></span> Introdução
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={ '/counter' } activeClassName='active'>
                                <span className='glyphicon glyphicon-education'></span> Counter
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={ '/fetchdata' } activeClassName='active'>
                                <span className='glyphicon glyphicon-th-list'></span> Teste
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={ '/fetchdata' } activeClassName='active'>
                                <span className='glyphicon glyphicon-th-list'></span> Testesss
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </div>;
    }
}

export default connect(
    (state: ApplicationState) => state.times,
    TimeState.actionCreators
)(NavMenuTimes) as typeof NavMenuTimes;