const Import = (value, path) => {
    return (
        require('./' + path + value).default
    );
}

export default Import;