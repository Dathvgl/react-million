import {
  MangaChapterClient,
  MangaDetailClient,
  MangaListClient,
  MangaThumnailClient,
} from "~/types/manga";
import { httpClient } from "~/utils/HttpClient";

const type = "nettruyen";

export default class MangaAPI {
  static lastest(page: number = 1) {
    return httpClient.get<MangaListClient>("api/manga/lastest", {
      params: { type, page },
    });
  }

  static thumnail(id: string) {
    return httpClient.get<MangaThumnailClient>(`api/manga/thumnail/${id}`, {
      params: { type },
    });
  }

  static detail(id?: string) {
    return httpClient.get<MangaDetailClient>(`api/manga/detail/${id}`, {
      params: { type },
    });
  }

  static chapter(detailId?: string, chapterId?: string) {
    return httpClient.get<MangaChapterClient>(
      `api/manga/chapter/${detailId}/${chapterId}`,
      {
        params: { type },
      }
    );
  }
}
