import React from 'react';
import {connect} from 'react-redux'
import { follow, setUsers, unfollow, setCurrentPage, setTotalUsersCount, toggleisFetching } from '../../redux/users-reducer';
import * as axios from 'axios';
import Users from './Users';
import preloader from '../../assets/images/preloader.gif';
import Preloader from '../common/preloader/Preloader';

class UsersContaine extends React.Component {
    componentDidMount() {
        this.props.toggleisFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
        .then(Response => {
            this.props.toggleisFetching(false)
            this.props.setUsers(Response.data.items)
            this.props.setTotalUsersCount(Response.data.totalCount)
        });
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.toggleisFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
        .then(Response => {
            this.props.toggleisFetching(false);
            this.props.setUsers(Response.data.items)
        });
    }

    render(){
        return <>
        { this.props.isFetching ? <Preloader /> : null}
            <Users totalUsersCount={this.props.totalUsersCount} 
                    pageSize={this.props.pageSize}
                    currentPage={this.props.currentPage}
                    onPageChanged={this.onPageChanged}
                    users={this.props.users}
                    follow={this.props.follow}
                    unfollow={this.props.unfollow}
                />
                </> 
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    }
}

// let mapDispatchToProps = (dispatch) => {
//     return {
//         follow: (userid) => {
//             dispatch(followAC(userid));
//         },
//         unfollow: (userid) => {
//             dispatch(unfollowAC(userid));
//         },
//         setUsers: (users) => {
//             dispatch(setUsersAC(users));
//         },
//         setCurrentPage: (pageNumber) => {
//             dispatch(setCurrentPageAC(pageNumber));
//         },
//         setTotalUsersCount: (totalCount) => {
//             dispatch(setTotalUsersCountAC(totalCount));
//         },
//         toggleisFetchingAC: (isFetching) => {
//             dispatch(toggleisFetchingAC(isFetching));
//         }
//     }
// }



export default connect(mapStateToProps, 
    {follow, unfollow, setUsers, setCurrentPage, setTotalUsersCount, toggleisFetching}) (UsersContaine);