import { useQuery } from "@tanstack/react-query";
import MangaAPI from "~/apis/MangaAPI";
import CustomImage from "~/components/CustomImage";

export default function MangaThumnail(props: {
  id: string;
  className?: string;
}) {
  const { id, className } = props;

  const { data, isLoading, isError } = useQuery({
    queryKey: ["manga", "api", "detail", "thumnail", id],
    queryFn: async () => {
      const res = await MangaAPI.thumnail(id).catch((error) =>
        console.error(error)
      );

      if (!res || res.status >= 300) {
        return null;
      } else return res.data;
    },
  });

  if (isLoading) return <></>;
  if (isError || !data) return <></>;

  return <CustomImage className={className} src={data.base64.join("")} />;
}
