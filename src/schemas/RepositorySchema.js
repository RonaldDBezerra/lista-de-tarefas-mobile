export const RepositorySchema = {
    name: "Taref",
    properties: {
      _id: {type: "string", indexed: true},
      title: "string",
      responsible: "string",
      date: "string",
      description: "string",
      status: "string"
    },
    primaryKey: "_id",
}