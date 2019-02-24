import { MemberEntity } from '../../model';
import { members } from './mockData';

const fetchMembers = (): Promise<MemberEntity[]> => {
  return Promise.resolve(members);
};

export const memberAPI = {
  fetchMembers,
};
