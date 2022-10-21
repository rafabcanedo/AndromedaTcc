import React from 'react';
import './TodoTask.css';

const TodoTask = () => {
	return (
		<div className="card-task">
			<div>
                <p>Fazer lição</p>
            </div>

            <div className="line-lista" >
            <span className="btn-takscard">X</span>
            </div>
		</div>
	);
}

export default TodoTask;