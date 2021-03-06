import { resolversAdvancement } from "../models/advancements/resolvers";
import { resolversInscription } from "../models/inscriptions/resolvers";
import { resolversProject } from "../models/projects/resolvers";
import { resolversUser } from "../models/users/resolvers";
import { resolversAuth } from "./auth/resolvers";

export const resolvers = [resolversUser, resolversProject, resolversAdvancement, resolversInscription, resolversAuth ];