export type introData = {
  description1: string;
  description2: string;
  description3: string;
};

export type newsItem = {
  id: string;
  title: string;
  content: string;
  author: string;
  category: string;
  createdAt: number;
};

export type blogItem = {
  id: string;
  title: string;
  content: string;
  author: string;
  category: string;
  createdAt: number;
  tags: string[];
};

export type todoItem = {
  id: string;
  title: string;
  contents: string;
  isCompleted: boolean;
  imgPath: string;
  createdAt: number;
};
