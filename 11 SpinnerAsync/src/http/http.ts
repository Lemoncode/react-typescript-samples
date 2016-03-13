import * as Q from 'q'
import * as $ from 'jquery'
import httpCallStarted from "../actions/httpCallStarted"
import httpCallCompleted from "../actions/httpCallCompleted"

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
    dispatcher(httpCallStarted);

    // TODO: enhance this, better error handling
    $.getJSON(url, function(data) {
        dispatcher(httpCallCompleted);
        deferred.resolve(data);
    },function (err) {
       dispatcher(httpCallCompleted);
       deferred.reject(err);
    }
  );

    return deferred.promise;


  }
}

export default new Http();
