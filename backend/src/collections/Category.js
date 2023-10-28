import payload from 'payload';

/** @type {import('payload/types').CollectionConfig} */
const Category = {
  slug: 'Category',
  
  admin: {
    useAsTitle: 'name'
  },

  access: {
    read: () => true,
    update: () => true,
    delete: () => true,
    create: () => true,
  },

  hooks: {
    afterOperation: [
      async (args) => {
        if (args.operation === "create"){
          let logMessage = `Category: [${args.result.name}], id: [${args.result.id}] created`;
          await payload.create({
            collection: "Logs",
            data: {
              name: args.result.name,
              log: logMessage,
              timestamp: new Date(),
              action: "Category Created",
            },
          });
        } 
        else if (args.operation === "deleteByID"){
          let logMessage = `Category: [${args.result.name}], id: [${args.result.id}] deleted`;
          await payload.create({
            collection: "Logs",
            data: {
              name: args.result.name,
              log: logMessage,
              timestamp: new Date(),
              action: "Category Deleted",
            },
          });
        } 
        else if (args.operation === "updateByID"){
          let logMessage = `Category: [${args.result.name}], id: [${args.result.id}] updated`;
          await payload.create({
            collection: "Logs",
            data: {
              name: args.result.name,
              log: logMessage,
              timestamp: new Date(),
              action: "Category Updated",
            },
          });
        }
      },
    ],
  },

  fields: [
    {
      name: 'name',
      label: 'Title',
      type: 'text',
      required: true,
    },
  ],
};

export default Category;