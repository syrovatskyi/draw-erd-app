import {
  RelationTypeEnum,
  SideEnum,
  Component
} from './interfaces';

const testComponent: Component = {
  entities: [
    {
      name: "user",
      columns: [
        {
          id: 1,
          field: "Bob"
        },
        {
          id: 2,
          field: "John"
        },
        {
          id: 3,
          field: "Tom"
        },
      ]
    },
    {
      name: "country",
      columns: [
        {
          id: 1,
          field: "USA"
        },
        {
          id: 2,
          field: "Canada"
        },
        {
          id: 3,
          field: "England"
        }
      ]
    },
    {
      name: "capital",
      columns: [
        {
          id: 1,
          field: "Washington"
        },
        {
          id: 2,
          field: "Ottawa"
        },
        {
          id: 3,
          field: "London"
        }
      ]
    }
  ],
  relations: [
    {
      type: RelationTypeEnum.OneToMany,
      from: "user",
      to: "country"
    },
    {
      type: RelationTypeEnum.OneToMany,
      from: "country",
      to: "capital"
    }
  ],
  entityDiagram: {
    tables: [
      {
        name: "user",
        position: {
          top: 20,
          left: 20,
          width: 50,
          height: 50
        }
      },
      {
        name: "country",
        position: {
          top: 80,
          left: 80,
          width: 50,
          height: 50
        }
      },
      {
        name: "capital",
        position: {
          top: 140,
          left: 140,
          width: 50,
          height: 50
        }
      }
    ],
    relations: [
      {
        name: {
          type: RelationTypeEnum.OneToMany,
          from: "user",
          to: "country"
        },
        startPoint: {
          side: SideEnum.Right,
          shiftInPercent: 50
        },
        endPoint: {
          side: SideEnum.Left,
          shiftInPercent: 50
        }
      },
      {
        name: {
          type: RelationTypeEnum.OneToOne,
          from: "country",
          to: "capital"
        },
        startPoint: {
          side: SideEnum.Bottom,
          shiftInPercent: 50
        },
        endPoint: {
          side: SideEnum.Top,
          shiftInPercent: 50
        }
      }
    ]
  }
};

let a: string = "hello";
