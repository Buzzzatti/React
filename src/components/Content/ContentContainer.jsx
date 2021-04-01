import React from 'react'; 
import { connect } from 'react-redux';
import Content from './Content';
import * as axios from 'axios';
import {setUserProfile} from '../../redux/content-reducer';
import { withRouter } from 'react-router';

class ContentContainer extends React.Component{

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 2;
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
        .then(Response => {
            this.props.setUserProfile(Response.data)
        });
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

export default connect(mapStateToProps, {setUserProfile }) (withUrlDataContainerComponent);