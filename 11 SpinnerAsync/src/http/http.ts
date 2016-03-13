import * as Q from 'q'
import * as $ from 'jquery'

class Http {

  // =========================
  // Send dispatch command to increment in one the async calls counter
  // Execute the async call action
  // On Success, On Error --> Send dispatch comment to decrement
  // Return promise
  // =========================
  public Get(dispatcher, url : string)
  {
    var deferred = Q.defer<any>();
    dispatcher.dispatch("HTTP_GET_CALL_STARTED");

    // TODO: enhance this, better error handling
    $.getJSON(url, function(data) {
        dispatcher.dispatch("HTTP_GET_CALL_COMPLETED");
        deferred.resolve(data);
    },function (err) {
       dispatcher.dispatch("HTTP_GET_CALL_COMPLETED");
       deferred.resolve(err);
    }
  );

    return deferred.promise;


  }
}

export default new Http();
