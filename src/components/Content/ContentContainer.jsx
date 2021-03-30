import React from 'react'; 
import { connect } from 'react-redux';
import Content from './Content';
import * as axios from 'axios';
import {setUserProfile} from '../../redux/content-reducer';

class ContentContainer extends React.Component{

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
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

export default connect(mapStateToProps, {setUserProfile }) (ContentContainer);