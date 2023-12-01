import styles from './index.module.css';

export const Title = ({title}) => {
    return (
        <h3 className = {styles.Heading}> {title} </h3>
    );
};