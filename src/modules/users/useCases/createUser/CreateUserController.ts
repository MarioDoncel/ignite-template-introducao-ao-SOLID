import { Response, Request } from "express";

import { CreateUserUseCase } from "./CreateUserUseCase";

class CreateUserController {
  // eslint-disable-next-line prettier/prettier
  constructor(private createUserUseCase: CreateUserUseCase) { }

  handle(request: Request, response: Response): Response {
    const { name, email } = request.body;
    try {
      const user = this.createUserUseCase.execute({ name, email });
      return response.status(201).send(user);
    } catch (error) {
      return response.status(400).json({ error: (error as Error).message });
    }
  }
}

export { CreateUserController };
