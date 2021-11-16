const AlertSection = ({ annotationPrefix, body }) => {
    return (
        <div data-sb-field-path={annotationPrefix} className="py-6 bg-primary">
            <div className="container mx-auto">
                <p data-sb-field-path=".body" className="text-center text-xl text-white">
                    {body}
                </p>
            </div>
        </div>
    )
}

export default AlertSection