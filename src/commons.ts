export class Commons {
  givenName = "Mushaheed";
  familyName = "Syed";
  get name() {
    return `${this.givenName} ${this.familyName}`;
  }
}

export const commons = new Commons();
