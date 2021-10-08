import { createTable } from './db.model';
import { log, delimeterMsg, logF } from './util';

function firstSteps() {
  log(
    `Create db description:
    - lala
    - bla bla
    `,
  );
  createTable();
}

export default function introduction() {
  delimeterMsg('FIRST STEPS MOCK');
  logF(firstSteps);
}
