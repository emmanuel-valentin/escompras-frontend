import { User } from "../../auth/interfaces/user.interface";
import { Photo } from "./photo.interface";
import { Tag } from "./tag.interface";

export interface Post {
  postId:    number;
  title:     string;
  content:   string;
  createdAt: Date;
  price:     number;
  tags:      Tag[];
  photos:    Photo[];
  published: boolean;
  user:      User;
}
