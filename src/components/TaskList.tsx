import React from 'react';
import {Input} from './Input';
import Task from './Task';
  
  


const TaskLists = (props: {listOfItems :Input[]}) => {

    const {listOfItems} = props;

    if (listOfItems.length === 0 ){
        return <div>Sorry! There are no Task present right now...</div>
    }

    return (
        <div>
            <ul>
            {props.listOfItems.map((curr: Input)=> {
               return <Task
                key = {curr.id}
                id = {curr.id}
                task = {curr.task}               
                />
            })}

            </ul>
        </div>
    )
}

export default TaskLists;
