export enum RelationTypeEnum {
  OneToOne = "one2one",
  OneToMany = "one2many"
}

export enum SideEnum {
  Left = "left",
  Right = "right",
  Top = "top",
  Bottom = "bottom"
}

export interface IColumn {
  id: number;
  field: string;
}

export interface IEntity {
  name: string;
  columns: IColumn[];
}

export interface IRelation {
  type: RelationTypeEnum;
  from: string;
  to: string;
}

export interface IPosition {
  top: number;
  left: number;
  width: number;
  height: number;
}

export interface IEntityOnDiagram {
  name: string;
  position: IPosition;
}

export interface IRelationPosition {
  side: SideEnum;
  shiftInPercent: number;
}

export interface IRelationOnDiagram {
  name: IRelation;
  startPoint: IRelationPosition;
  endPoint: IRelationPosition;
}

export interface IEntityDiagram {
  tables: IEntityOnDiagram[];
  relations: IRelationOnDiagram[];
}


export interface Component {
  entities: IEntity[];
  relations: IRelation[];
  entityDiagram: IEntityDiagram;
}
