import React from 'react'
import Box from '../views/Box'
import { useState, useEffect } from 'react';
import axios from 'axios';
import {
    Link
  } from "react-router-dom";
function Dashboard() {


    const boxStyle = {
        display: "flex",
        justifyContent: "center"
    }



    const [toDoTasks, setToDoTasks] = useState([]);
    const [doingTasks, setDoingTasks] = useState([]);
    const [doneTasks, setDoneTasks] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8000/api/projects/todo")
            .then(res => {
                setToDoTasks(res.data)
            })
        axios.get("http://localhost:8000/api/projects/doing")
            .then(res => {
                setDoingTasks(res.data)
            })
        axios.get("http://localhost:8000/api/projects/done")
            .then(res => {
                setDoneTasks(res.data)
            })

    }, [])



    const startDoing = (e, doingTask) => {
        doingTask.status = "doing";
        axios.put("http://localhost:8000/api/project/" + doingTask._id, doingTask)
        setDoingTasks([...doingTasks, doingTask]);
        const newTaskArray = toDoTasks.filter((eachTask) => {
            return eachTask.name !== doingTask.name
        })
        setToDoTasks(newTaskArray);
    }

    const finishTask = (e, doneTask) => {
        doneTask.status = "done";
        axios.put("http://localhost:8000/api/project/" + doneTask._id, doneTask)
            .then(res => {
                setDoneTasks([...doneTasks, doneTask]);
                const newTaskArray = doingTasks.filter((eachTask) => {
                    return eachTask.name !== doneTask.name
                })
                setDoingTasks(newTaskArray);
            })

    }
    const removeTask = (e, deletedTask) => {
        axios.delete("http://localhost:8000/api/project/delete/" + deletedTask._id)
        const newTaskArray = doneTasks.filter((eachTask) => {
            return eachTask.name !== deletedTask.name
        })
        setDoneTasks(newTaskArray);
    }

    return (
        <div>
            <h2>Manage Your Day</h2>
            <div style={boxStyle}>
                <Box data={toDoTasks} callBack={startDoing} val="Backlog" color="#fffff" bak="coral" />
                <Box data={doingTasks} callBack={finishTask} val="In Progress" color="#fffff" bak="#008000" />
                <Box data={doneTasks} callBack={removeTask} val="completed" color="#fffff" bak="Maroon" />
                <Link to="/new"> ADD new Projects </Link>
            </div>


        </div>
    )
}

export default Dashboard
