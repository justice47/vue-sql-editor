type ColumnSchema = {
  name: string,
  type: string
}

export type TableSchemaModel = {
  name: string,
  columns: ColumnSchema[]
}

export type TableModel = {
  title?: string,
  columns: string[],
  data: string[][]
}

export const tablesSchemaData : TableSchemaModel[] = [
  {
    name: 'Customers',
    columns: [
      {
        name: 'customer_id',
        type: 'int'
      },

      {
        name: 'first_name',
        type: 'varchar(100)'
      },

      {
        name: 'last_name',
        type: 'varchar(100)'
      },

      {
        name: 'customer_id',
        type: 'int'
      },

      {
        name: 'age',
        type: 'int'
      },

      {
        name: 'country',
        type: 'varchar(100)'
      }
    ]
  },

  {
    name: 'Orders',
    columns: [
      {
        name: 'order_id',
        type: 'int'
      },

      {
        name: 'customer_id',
        type: 'int'
      },

      {
        name: 'order_date',
        type: 'date'
      },

      {
        name: 'total',
        type: 'int'
      }
    ]
  },

  {
    name: 'Shippings',
    columns: [
      {
        name: 'shipping_id',
        type: 'integer'
      },

      {
        name: 'status',
        type: 'integer'
      },

      {
        name: 'customer',
        type: 'integer'
      }
    ]
  }
]

export const outputTableData : TableModel = {
  columns: ['customer_id', 'first_name', 'last_name', 'age', 'country'],
  data: [
    ['1', 'John', 'Doe', '31', 'USA'],
    ['2', 'Robert', 'Luna', '22', 'USA'],
    ['3', 'David', 'Robinson', '22', 'UK'],
    ['1', 'John', 'Doe', '31', 'USA'],
    ['1', 'John', 'Doe', '31', 'USA']
  ]
}

export const availableTablesData : TableModel[] = [
  {
    title: 'Customers',
    columns: ['customer_id', 'first_name', 'last_name', 'age', 'country'],
    data: [
      ['1', 'John', 'Doe', '31', 'USA'],
      ['2', 'Robert', 'Luna', '22', 'USA'],
      ['3', 'David', 'Robinson', '22', 'UK'],
      ['1', 'John', 'Doe', '31', 'USA'],
      ['1', 'John', 'Doe', '31', 'USA']
    ]
  },
  {
    title: 'Orders',
    columns: ['customer_id', 'first_name', 'last_name', 'age', 'country'],
    data: [
      ['1', 'John', 'Doe', '31', 'USA'],
      ['2', 'Robert', 'Luna', '22', 'USA'],
      ['3', 'David', 'Robinson', '22', 'UK'],
      ['1', 'John', 'Doe', '31', 'USA'],
      ['1', 'John', 'Doe', '31', 'USA']
    ]
  },
  {
    title: 'Shippings',
    columns: ['customer_id', 'first_name', 'last_name', 'age', 'country'],
    data: [
      ['1', 'John', 'Doe', '31', 'USA'],
      ['2', 'Robert', 'Luna', '22', 'USA'],
      ['3', 'David', 'Robinson', '22', 'UK'],
      ['1', 'John', 'Doe', '31', 'USA'],
      ['1', 'John', 'Doe', '31', 'USA']
    ]
  }
]
