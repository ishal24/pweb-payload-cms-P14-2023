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
          await payload.create({
            collection: 'Logs',
            data: {
              name: args.result.name,
              log: args.result.id,
              timestamp: new Date(),
              action: 'Todo Created',
            },
          });
        } 
        else if (args.operation === 'deleteByID'){
          await payload.create({
            collection: 'Logs',
            data: {
              name: args.result.name,
              log: args.result.id,
              timestamp: new Date(),
              action: 'Todo Deleted',
            },
          });
        }
        else if (args.operation === 'updateByID'){
          await payload.create({
            collection: 'Logs',
            data: {
              name: args.result.name,
              log: args.result.id,
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
