import { useSearchParams } from "react-router-dom";

export default function PuppeteerPage() {
  const [searchParams] = useSearchParams(window.location.href);
  const url = searchParams.get("url");
  if (!url) return <></>;
  return <img id="puppeteer" src={url} alt="Error" />;
}
