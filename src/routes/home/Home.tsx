import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import MangaAPI from "~/apis/MangaAPI";
import { tsFromNow } from "~/utils/Date";

export default function HomePage() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["manga", "api", "lastest"],
    queryFn: async () => {
      const res = await MangaAPI.lastest().catch((error) =>
        console.error(error)
      );

      if (!res || res.status >= 300) {
        return null;
      } else return res.data;
    },
  });

  if (isLoading) return <></>;
  if (isError || !data) return <></>;

  return (
    <>
      <div className="grid grid-cols-5">
        {data.data.map((item, index) => (
          <div
            key={index}
            className="border border-black rounded overflow-hidden"
          >
            <div className="px-2 py-1">
              <Link
                to={`/manga/${item._id}`}
                className="line-clamp-2 font-bold text-justify"
              >
                {item.title}
              </Link>
              <div>
                {item.chapters.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between"
                  >
                    <Link to={""} className="font-semibold text-base">
                      Ch {item.chapter}
                    </Link>
                    <i className="text-sm">{tsFromNow(item.time)}</i>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
