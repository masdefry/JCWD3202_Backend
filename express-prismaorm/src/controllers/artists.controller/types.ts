export interface IArtist {
  id: string;
  name: string;
  genre: string;
  firstDebutYear: number;
  country: string;
  description: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date | null;
}
