import React, {useEffect, useState } from "react";
import { tasks } from "../apis/testApi";

const TaskScreen =() => {
    useEffect(() => {
        console.log("TaskScreen Mounted");
    }, []);
    useEffect(() => {
        console.log("taskScreen updated");
        // setCount(5)
    }, []);
    return tasks.map((task, index) => (
        <div key ={index}>
            <h1>
                {task.taskNumber} {task.taskName}
            </h1>
            <p>{task.taskDescription}</p>
        </div>
    ));
};
export default TaskScreen;