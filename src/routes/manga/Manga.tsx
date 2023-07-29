import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import MangaAPI from "~/apis/MangaAPI";
import MangaThumnail from "./components/Thumnail";

export default function MangaPage() {
  const { id } = useParams();

  const { data, isLoading, isError } = useQuery({
    queryKey: ["manga", "api", "ccc", id],
    queryFn: async () => {
      const res = await MangaAPI.detail(id).catch((error) =>
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
      <MangaThumnail id={data._id} />
    </>
  );
}
