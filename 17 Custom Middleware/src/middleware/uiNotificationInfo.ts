export class UINotificationInfo {
  successMessage : string;
  errorMessage : string;
  succeeded : boolean;

  constructor() {
    this.successMessage = null;
    this.errorMessage = null;
    this.succeeded = true;
  }
}
