const httpCallCompleted = () => {
    console.log("call Compleated");
    return {
        type: 'HTTP_GET_CALL_COMPLETED'
    }
}

export default httpCallCompleted;