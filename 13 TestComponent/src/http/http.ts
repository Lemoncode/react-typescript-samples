import * as Q from 'q'
import * as $ from 'jquery'
import httpCallStarted from "../actions/httpCallStarted"
import httpCallCompleted from "../actions/httpCallCompleted"



class Http {
  _dispatcher : any;

  public Initialize(dispatcher) {
    this._dispatcher = dispatcher;
  }

  // =========================
  // Send dispatch command to increment in one the async calls counter
  // Execute the async call action
  // On Success, On Error --> Send dispatch comment to decrement
  // Return promise
  // =========================
  public Get(url : string)
  {
    var deferred = Q.defer<any>();
    this._dispatcher(httpCallStarted());

    // TODO: enhance this, better error handling
    $.getJSON(url, function(data) {
        this._dispatcher(httpCallCompleted());
        deferred.resolve(data);
    }.bind(this)
    ,function (err) {
       this._dispatcher(httpCallCompleted());
       deferred.reject(err);
    }.bind(this)
  );

    return deferred.promise;


  }
}

export default new Http();
