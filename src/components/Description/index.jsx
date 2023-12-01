import styles from './index.module.css';

export const Description = ({description}) => {
    return (
        <div className = {styles.description}> {description} </div>
    );
};