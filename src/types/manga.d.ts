import { BaseMongo } from "./mongo";

export type MangaType = "nettruyen";
export type MangaSort = "lastest" | "chapter" | "name";
export type MangaLink = { href: string; name: string };
export type MangaIndex = { _id: string; chapter: number };
export type MangaLinkClient = { _id: string; name: string };

export type MangaListResult<T> = {
  totalData: number;
  totalPage: number | null;
  currentPage: number;
  canPrev: boolean;
  canNext: boolean;
  data: T[];
};

export type MangaListPuppeteer = MangaListResult<{
  href: string;
  title: string;
  thumnail: string;
  chapters: {
    href: string;
    title: string;
    time: number;
  }[];
}>;

export type MangaDetailPuppeteer = {
  type: MangaType;
  href: string;
  thumnail: string;
  title: string;
  altTitle?: string;
  authors?: string | MangaLink | MangaLink[];
  status: string;
  tags: MangaLink[];
  watched: number;
  followed: number;
  description: string;
  chapters: MangaDetailChapterPuppeteer[];
};

export type MangaDetailChapterPuppeteer = {
  href: string;
  title: string;
  time: number;
  watched: number;
};

export type MangaTagPuppeteer = {
  name: string;
  href: string;
  type: MangaType;
  description: string;
};

export type MangaAuthorPuppeteer = {
  name: string;
  href: string;
  type: MangaType;
};

export type MangaTagMongo = BaseMongo & MangaTagPuppeteer;
export type MangaAuthorMongo = BaseMongo & MangaAuthorPuppeteer;
export type MangaThumnailMongo = BaseMongo & {
  detailId: string;
  type: MangaType;
  base64: string[];
};
export type MangaDetailMongo = BaseMongo &
  Omit<MangaDetailPuppeteer, "tags" | "authors" | "chapters"> & {
    lastestUpdated: number;
  };
export type MangaDetailChapterMongo = BaseMongo &
  Omit<MangaDetailChapterPuppeteer, "href" | "title"> & {
    detailId: string;
    type: MangaType;
    chapter: number;
  };
export type MangaDetailChapterImageMongo = BaseMongo & {
  chapterId: string;
  chapterIndex: number;
  type: MangaType;
  base64: string[];
};

export type MangaTagClient = Omit<
  MangaTagMongo,
  "href" | "type" | "createdAt" | "updatedAt"
>;
export type MangaAuthorClient = Omit<
  MangaAuthorMongo,
  "href" | "type" | "createdAt" | "updatedAt"
>;
export type MangaThumnailClient = Omit<
  MangaThumnailMongo,
  "type" | "createdAt" | "updatedAt"
>;
export type MangaDetailClient = Omit<
  MangaDetailMongo,
  "href" | "type" | "thumnail" | "createdAt" | "updatedAt"
> & {
  authors: MangaLinkClient[];
  tags: (MangaLinkClient & { description: string })[];
};
export type MangaDetailChapterClient = Omit<
  MangaDetailChapterMongo,
  "type" | "createdAt" | "updatedAt"
>;
export type MangaDetailChapterImageClient = Omit<
  MangaDetailChapterImageMongo,
  "type" | "createdAt" | "updatedAt"
>;
export type MangaListClient = MangaListResult<
  Omit<MangaDetailClient, "altTitle"> & {
    chapters: { _id: string; chapter: number; time: number }[];
  }
>;
export type MangaChapterClient = {
  canPrev: MangaIndex | null;
  canNext: MangaIndex | null;
  current:
    | {
        _id: string;
        chapterId: string;
        chapterIndex: string;
        base64: string[];
      }[]
    | null;
  chapters: MangaIndex[];
};
