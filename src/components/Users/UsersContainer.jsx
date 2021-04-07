import React from 'react';
import {connect} from 'react-redux'
import { follow, setUsers, unfollow, setCurrentPage, setTotalUsersCount, toggleisFetching, toggleisFollowingProgress } from '../../redux/users-reducer';
import Users from './Users';
import Preloader from '../common/preloader/Preloader';
import { usersAPI } from '../../api/api';


class UsersContaine extends React.Component {
    componentDidMount() {
        this.props.toggleisFetching(true)

        usersAPI.getUsers(this.props.currentPage, this.props.pageSize)
            .then(data => {
            this.props.toggleisFetching(false) 
            this.props.setUsers(data.items)
            this.props.setTotalUsersCount(data.totalCount)
        });
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.toggleisFetching(true);
        
        usersAPI.getUsers(pageNumber, this.props.pageSize)
            .then(data => {
            this.props.toggleisFetching(false);
            this.props.setUsers(data.items)
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
                    toggleisFollowingProgress={this.props.toggleisFollowingProgress}
                    followingInProgress={this.props.followingInProgress}
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
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}

export default connect(mapStateToProps, 
    {follow, unfollow, setUsers, setCurrentPage, setTotalUsersCount, toggleisFetching, toggleisFollowingProgress}) (UsersContaine);