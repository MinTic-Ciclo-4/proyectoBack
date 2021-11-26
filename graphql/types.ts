import { gql } from "apollo-server-express";
import { typesAdvancements } from "../models/advancements/types";
import { typesEnums } from "../models/enums/types";
import { typesInscription } from "../models/inscriptions/types";
import { typesProject } from "../models/projects/types";
import { typesUser } from "../models/users/types";

const typesGlobals = gql`

  scalar Date

`;

export const types = [typesGlobals, typesEnums, typesUser, typesProject, typesAdvancements, typesInscription];