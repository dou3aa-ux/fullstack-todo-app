import { useState } from "react";
import './TodoForm.css';


export const TodoForm=({ onAdd})=>{
    const [input, setInput]=useState('');
    const [isSubmitting, setIsSubmitting]=useState(false);

    const handleSubmit= async(e)=>{
        e.preventDefault();
        if(!input.trim()) return;

        setIsSubmitting(true);
        const success=await onAdd(input);
        if(success){
            setInput('');
        }
        setIsSubmitting(false)
    };
    return(
        <form onSubmit={handleSubmit} className="todo-form">
            <input type="text" value={input} onChange={(e)=> setInput(e.target.value)} placeholder="what needs to be done ?" className="todo-form-input" disabled={isSubmitting}/>
            <button type="submit" disabled={isSubmitting || !input.trim()} className="todo-form-button">{isSubmitting ?(<span className="spinner"></span>):('+Add')}</button>
        </form>
    );
};