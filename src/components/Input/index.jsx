import styles from './index.module.css'

export const Input = () => {
    return (
        <figure className = {styles.textArea}>
            <textarea className = {styles.Input} id = "userQuote" placeholder = "Your quote goes here..."></textarea>
        </figure>
    );
}