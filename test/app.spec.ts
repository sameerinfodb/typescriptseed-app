import App from '../src/app';

describe('HelloWorld', () => {
  it('should return a greeting', done => {
    let h = new App();

    h.displayGreeting()
      .then(greeting => {
        expect(greeting).toBe('Hello world!');
        done();
      })
      .catch(error => done.fail());
  });
});
