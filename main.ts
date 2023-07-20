// index.ts
import 'npm:reflect-metadata';
import { container } from 'npm:tsyringe';
import { TestController } from "./testController.ts";


// Register classes in the container
container.register('TestController', { useClass: TestController});

// Now you can use the controller
const controller = container.resolve(TestController);
console.log(controller.greet());


