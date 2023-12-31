"use server";

import { CreateUserParams, UpdateUserParams } from "@/types";
import { handleError } from "../utils";
import { connectToDatabase } from "../database";
import { User } from "../database/models/user.models";

export async function createUser(user: CreateUserParams) {
  try {
    await connectToDatabase();
    const newUser = await User.create(user);
    return JSON.parse(JSON.stringify(newUser));
  } catch (error) {
    handleError(error);
  }
}

export async function getUserById(userID: string) {
  try {
    await connectToDatabase();
    const user = await User.findById(userID);
    if (!user) throw new Error("User not found");
  } catch (error) {
    handleError(error);
  }
}

export async function updateUser(clerkId: String, user: UpdateUserParams) {
  try {
    await connectToDatabase();
    const updateUser = await User.findOneAndUpdate(clerkId, user, {
      new: true,
    });
    if (!updateUser) throw new Error("User Update failed");
  } catch (error) {
    handleError(error);
  }
}

export async function deleteUser(clerkId: String) {
  try {
    await connectToDatabase();
    //find user to delete
    const userToDelete = await User.findOne({ clerkId });
    if (!userToDelete) throw new Error("User not found");
  } catch (error) {
    handleError(error);
  }
}
