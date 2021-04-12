import React from 'react'; 
import { connect } from 'react-redux';
import Content from './Content';
import * as axios from 'axios';
import {getUserProfile} from '../../redux/content-reducer';
import { withRouter } from 'react-router';

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

let mapStateToProps = (state) => ({
    profile: state.contentPage.profile
});

let withUrlDataContainerComponent = withRouter(ContentContainer);

export default connect(mapStateToProps, {getUserProfile}) (withUrlDataContainerComponent);