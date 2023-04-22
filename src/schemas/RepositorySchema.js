export class RepositorySchema {
  static schema = {
    name: "Repository",
    primaryKey: "id",
    properties: {
      id: {type: 'int', indexed: true},
      title: "string",
      responsible: "string",
      date: "string",
      description: "string",
      status: "string"
    }
  }
}