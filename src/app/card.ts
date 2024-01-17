import { Consequnece } from "./consequence";

export interface Card {
  type: 'text' | 'event';
  content: string;
  leftChoice?: string;
  rightChoice?: string;
  done?: boolean;
  leftConsequence?: () => Consequnece;
  rightConsequence?: () => Consequnece;
}