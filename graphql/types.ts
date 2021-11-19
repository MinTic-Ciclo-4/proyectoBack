import { gql } from "apollo-server-express";
import { typesEnums } from "../models/enums/types";
import { typesProject } from "../models/projects/types";
import { typesUser } from "../models/users/types";

const typesGlobals = gql`

  scalar Date

`;

export const types = [typesGlobals, typesEnums, typesUser, typesProject];