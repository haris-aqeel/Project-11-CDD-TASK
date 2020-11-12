import React from 'react';

export interface Input {
  id: string;
  task: string;
}



export default function Inputs(props: {itemsList: Input[],  setItemsList: (x: Input[]) => void}) {

  const [Value, setValue] = React.useState<string>("");
  

  const addTask = () => {
    props.setItemsList([...props.itemsList, {id: `${Math.random() * Math.random()}`, task: Value}]);
    setValue("");    
  }

  return (
    <div className="input-Box">

      <input type="text" value={Value} onChange = {e => setValue(e.target.value)}/>
      <button type="submit" onClick={addTask}>Add Task</button>

    </div>
  );
}