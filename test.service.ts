import { autoInjectable } from 'npm:tsyringe';

@autoInjectable()
export class TestService {
  sayHello() {
    return 'This is my service';
  }
}