import React from 'react';
import Card from "../UI/Card"
import classes from './ErrorCard.module.css';
import Button from "../UI/Button"

const errorCard=(props)=>{
 return(
    <div className={classes.backdrop}>
    <Card className={classes.modal}>
        <header className={classes.header}>
            <h1>{props.title}</h1>
        </header>
        <div>
            <h2>{props.message}</h2>
        </div>
        <footer className={classes.actions}>
            <Button>OKAY</Button>
        </footer>
    </Card>
    </div>
 )
}

export default errorCard;