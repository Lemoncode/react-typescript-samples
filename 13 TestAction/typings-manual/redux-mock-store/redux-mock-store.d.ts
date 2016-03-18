// Type definitions for Redux Mock Store v1.0.2
// Project: https://github.com/arnaudbenard/redux-mock-store
// Definitions by: Braulio Díez <https://github.com/brauliodiez/>>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../../typings/react/react.d.ts" />
/// <reference path="../../typings/redux/redux.d.ts" />

declare module "redux-mock-store" {
    interface MockStore extends Redux.Store {
      getActions: () => Array<any>;
      clearActions: () => void;
    }

    function configureStore(...args: any[]) : (...args: any[]) => MockStore;
    export = configureStore;
}
