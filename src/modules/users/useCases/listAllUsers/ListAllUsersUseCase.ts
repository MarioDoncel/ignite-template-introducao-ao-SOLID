import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  // eslint-disable-next-line prettier/prettier
  constructor(private usersRepository: IUsersRepository) { }

  execute({ user_id }: IRequest): User[] {
    const user = this.usersRepository.findById(user_id);
    if (!user) throw new Error("Requesting user not found");
    if (!user.admin) throw new Error("User not authorized");
    const users = this.usersRepository.list();
    return users;
  }
}

export { ListAllUsersUseCase };
