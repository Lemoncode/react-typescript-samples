import http from '../http/http';

const httpInitializeDispatcher = (dispatcher) => {
    http.Initialize(dispatcher);

    return {
        type: 'HTTP_INITIALIZE_DISPATCHER'
    }
}

export {
    httpInitializeDispatcher
}
