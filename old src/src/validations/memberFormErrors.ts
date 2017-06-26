
export default class MemberErrors {
  id: string;
  login: string;
  avatar_url: string;

  isEntityValid : boolean;

  public constructor() {
    this.id = "";
    this.login = "";
    this.avatar_url = "";
    
  }
}
