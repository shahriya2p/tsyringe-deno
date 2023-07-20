// controllers/SomeController.ts
import { autoInjectable , container} from 'npm:tsyringe';
import { TestService } from './test.service.ts';

@autoInjectable()
export class TestController {
    constructor(
        private testService: TestService
    ) {
        this.testService = container.resolve(TestService)
    }

    greet() {
        return this.testService.sayHello();
    }
}