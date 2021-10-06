import { log, delimeterMsg, logF } from './util';

function teamLeadFears() {
  log(
    `Some of the fears of being a team lead are:
    - Failure to meet end goals
    - Conflicts and fighting in team
    - Being replaced by another leader
    - Not being respected for merits
    - Being overriden by someone aggressive in a team
    `,
  );
}

export default function rolesAndResponsibilitiesOfATeamLeader() {
  delimeterMsg('ROLES AND RESPONSIBILITIES OF A TEAM LEADER');
  logF(teamLeadFears);
}
