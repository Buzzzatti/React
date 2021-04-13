import React from 'react'; 
import { connect } from 'react-redux';
import Content from './Content';
import * as axios from 'axios';
import {getUserProfile} from '../../redux/content-reducer';
import { Redirect, withRouter } from 'react-router';
import { withAuthRedirect } from '../hoc/withAuthRedirect';

class ContentContainer extends React.Component{

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 2;
        }
        this.props.getUserProfile(userId);
    }

    render() {
        

        return (
            <Content {...this.props} profile={this.props.profile}/>
        )
    }
}

let AuthRedirectComponent = withAuthRedirect(ContentContainer);

let mapStateToProps = (state) => ({
    profile: state.contentPage.profile,
});

let withUrlDataContainerComponent = withRouter(AuthRedirectComponent);

export default connect(mapStateToProps, {getUserProfile}) (withUrlDataContainerComponent);