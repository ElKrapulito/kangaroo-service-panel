import { LinkType } from '../enum/link-type.enum';

export interface NavLink {
  route: string;
  icon: string;
  text: string;
  protection: LinkType;
}
