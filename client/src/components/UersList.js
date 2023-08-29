import React from 'react'
import axios from 'axios';
import Button from '@mui/material/Button';

// import { Button } from '@material-ui/core';
import {
    Routes,
    Route,
    Link
} from "react-router-dom";

const UserList = (props) => {
    return (
        <div>

            {props.users.map((user, i) =>
                <p key={i}>
                    {user.lastName}, {user.firstName}
                    <Link to={"/users/" + user._id + "/edit"}>
                        <Button variant="contained" color="info">
                            Edit
                        </Button>
                    </Link>

                </p>
            )}
        </div>
    )
}

export default UserList;

