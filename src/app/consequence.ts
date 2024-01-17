export interface Consequnece {
  chance: number;
  success: {
    health?: number;
    popularity?: number;
    wealth?: number;
    content: string;   
  },
  failure?: {
    health?: number;
    popularity?: number;
    wealth?: number;
    content: string;
  }
}