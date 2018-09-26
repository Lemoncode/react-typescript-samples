const httpCallStarted = () => {
    console.log("call started");
    return {
        type: 'HTTP_GET_CALL_STARTED'
    }
}

export default httpCallStarted;