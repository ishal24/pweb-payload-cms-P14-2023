import payload from 'payload';

/** @type {import('payload/types').CollectionConfig} */
const Todo = {
  slug: 'Todo',
  
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
        if (args.operation === 'create'){
          let logMessage = `Todo: [${args.result.name}], id: [${args.result.id}] created`;
          await payload.create({
            collection: 'Logs',
            data: {
              name: args.result.name,
              log: logMessage,
              timestamp: new Date(),
              action: 'Todo Created',
            },
          });
        } 
        else if (args.operation === 'deleteByID'){
          let logMessage = `Todo: [${args.result.name}], id: [${args.result.id}] deleted`;
          await payload.create({
            collection: 'Logs',
            data: {
              name: args.result.name,
              log: logMessage,
              timestamp: new Date(),
              action: 'Todo Deleted',
            },
          });
        }
        else if (args.operation === 'updateByID'){
          let logMessage = `Todo: [${args.result.name}], id: [${args.result.id}] updated`;
          await payload.create({
            collection: 'Logs',
            data: {
              name: args.result.name,
              log: logMessage,
              timestamp: new Date(),
              action: 'Todo Updated',
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
    {
      name: 'description',
      type: 'textarea',
      label: 'Description',
      required: true,
    },
    {
      name: 'dueDate',
      type: 'date',
      label: 'Due Date',
      required: true,
    },
    {
      name: 'Category',
      type: 'relationship',
      required: true,
      relationTo: 'Category',
    },
  ],
};

export default Todo;
