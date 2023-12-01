import styles from './index.module.css';

export const Figure = ({ quote, quoteDb, author, authorDb }) => {
    return (
        <figure className = {styles.textArea}>
            <blockquote>
                <p id = "quote"> {quote} {quoteDb} </p>
            </blockquote>
            <figcaption id = "author"> &mdash; {author} {authorDb} </figcaption>
        </figure>
    )
};

