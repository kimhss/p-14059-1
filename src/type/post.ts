// export interface PostDto  {
//   id: number;
//   title: string;
// };
// 인터페이스는 클래스에 가깝다
// 딱히 이유가 없으면 인터페이스 쓰지 말고 type 쓰래요

export type PostDto = {
  id: number;
  createDate: string;
  modifyDate: string;
  title: string;
};

export type PostWithContentDto = PostDto & {
  content: string;
};

export type PostCommentDto = {
  id: number;
  createDate: string;
  modifyDate: string;
  content: string;
};
