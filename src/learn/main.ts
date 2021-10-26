import aggregateFunctions from './aggregateFunctions';
import designingInstagramClone from './designingInstagramClone';
import workingWithInstagramData from './workingWithInstagramData';
import introduction from './introduction';
import logicalOperators from './logicalOperators';
import manyToMany from './manyToMany';
import oneToMany from './oneToMany';
import refiningSelections from './refiningSelections';
import stringFunctions from './stringFunctions';
import tableCRUD from './tableCRUD';
import databaseTriggers from './databaseTriggers';

export function main() {
  introduction();
  tableCRUD();
  stringFunctions();
  refiningSelections();
  aggregateFunctions();
  logicalOperators();
  oneToMany();
  manyToMany();
  designingInstagramClone();
  workingWithInstagramData();
  databaseTriggers();
}
