const httpInitializeDispatcher = (dispatcher) => {
   return {
     type: 'HTTP_INITIALIZE_DISPATCHER'
     ,dispatcher: dispatcher
   }
}

export default httpInitializeDispatcher;
