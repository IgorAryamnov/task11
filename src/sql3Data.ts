import { User } from "./User";
import { AppDataSource } from "./dataSource";

const userRepository = AppDataSource.getRepository(User);

const getUsers = async () => {
  try {
    const users = await userRepository.find();
    return users;
  } catch (err) {
    return null;
  }
};

const addUser = async (user: { name: string; age: number }) => {
  try {
    const newUser = userRepository.create(user);
    await userRepository.save(newUser);
    return newUser;
  } catch (err) {
    return null;
  }
};

const updateUser = async (
  id: number,
  updateData: { name: string; age: number }
) => {
  try {
    const user = await userRepository.findOneBy({ id });
    // const updatedUser = await userRepository.update(id, updatedData)
    if (!user) {
      return null;
    }
    userRepository.merge(user, updateData);
    await userRepository.save(user);
    return user;
  } catch (err) {
    return "error";
  }
};

const deleteUser = async (id: number) => {
  try {
    const result = await userRepository.delete(id);
    return (result.affected ?? 0) > 0;
  } catch (err) {
    return "error";
  }
};

const getUserById = async (id: number) => {
  try {
    const user = await userRepository.findOneBy({ id });
    return user;
  } catch (err) {
    return "error";
  }
};

export { getUsers, addUser, updateUser, deleteUser, getUserById };
