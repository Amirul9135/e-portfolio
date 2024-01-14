class CurrentPath {
    // Attribute
    public pathname: string;

    // Constructor
    constructor() {
        this.pathname = ""
    }

    log() {
        fetch('/api/log/path', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                // Add any other headers if needed
            },
            body: JSON.stringify({
                path:this.pathname
            }),
        })
            .then(response => { 
            }) 
            .catch(error => { 
            });
    }
}

export default CurrentPath