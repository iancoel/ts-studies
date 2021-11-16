// classes
export class Invoice {

  //This way only works if we use readonly, private or public modifiers
  constructor(
    readonly client: string,
    private details: string,
    public amount: number,
  ) {}

  format() {
    return `${this.client} owes £${this.amount} for ${this.details}`
  }
}