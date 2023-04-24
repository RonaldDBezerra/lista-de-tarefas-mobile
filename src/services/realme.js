import Realm from "realm";

import { RepositorySchema } from "../schemas/RepositorySchema";

export async function getRealm() {
  return await Realm.open({
    path: "taref-app",
    schema: [RepositorySchema],
  });
}