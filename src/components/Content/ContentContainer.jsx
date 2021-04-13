import React from 'react'; 
import { connect } from 'react-redux';
import Content from './Content';
import * as axios from 'axios';
import {getUserProfile} from '../../redux/content-reducer';
import { Redirect, withRouter } from 'react-router';

class ContentContainer extends React.Component{

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 2;
        }
        this.props.getUserProfile(userId);
    }

    render() {
        if (!this.props.isAuth ) return <Redirect to='/login' />;

        return (
            <Content {...this.props} profile={this.props.profile}/>
        )
    }
}

let mapStateToProps = (state) => ({
    profile: state.contentPage.profile,
    isAuth: state.auth.isAuth
});

let withUrlDataContainerComponent = withRouter(ContentContainer);

export default connect(mapStateToProps, {getUserProfile}) (withUrlDataContainerComponent);