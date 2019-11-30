export default class App {
  private welcome: string = 'Hello world!';
  displayGreeting() {
    console.log(this.welcome);
    return Promise.resolve(this.welcome);
  }
}
