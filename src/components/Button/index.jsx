import styles from './index.module.css';

export const Button = ({ onClick, buttonName }) => {
    return (
        <button className = {styles.gimmeBtn} onClick = {onClick}>
           {buttonName} 
        </button>
    );
};

/* Кнопка для сброса страницы до первоначального вида */

export const ResetButton = ({ onClick }) => {
    return (
        <button className = {styles.resetBtn} onClick = {onClick}>
           Reset page 
        </button>
    );
};

/* Кнопка для отображения всех цитат */

export const ShowButton = ({ onClick }) => {
    return (
        <button className = {styles.showBtn} onClick = {onClick}>
           Show all quotes 
        </button>
    );
};


