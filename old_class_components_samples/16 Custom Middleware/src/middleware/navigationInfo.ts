export class NavigationInfo {
  successNavigationRoute : string;
  errorNavigationRoute : string;
  succeeded : boolean;

  constructor() {
    this.successNavigationRoute = null;
    this.errorNavigationRoute = null;
    this.succeeded = true;
  }
}
