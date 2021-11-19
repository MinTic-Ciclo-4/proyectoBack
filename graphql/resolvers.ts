import { resolversAdvancement } from "../models/advancements/resolvers";
import { resolversProject } from "../models/projects/resolvers";
import { resolversUser } from "../models/users/resolvers";

export const resolvers = [resolversUser, resolversProject, resolversAdvancement];