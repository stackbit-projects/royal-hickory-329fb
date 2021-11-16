const AlertSection = ({ annotationPrefix, body }) => {
    return (
        <div data-sb-field-path={annotationPrefix}>
            <p data-sb-field-path=".body">{body}</p>
        </div>
    )
}

export default AlertSection