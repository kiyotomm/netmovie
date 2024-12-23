import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import useMovieVideo from "@/hooks/useMovieVideo";
import { useParams } from "react-router-dom";

interface Props {
  open: JSX.Element;
}

export function DialogComponent({ open }: Props) {
  const { id } = useParams();
  const { data } = useMovieVideo(id);

  const getKey = () => {
    return data?.results[0]?.key;
  };
  return (
    <Dialog>
      <DialogTrigger asChild>{open}</DialogTrigger>
      <DialogContent
        className="flex justify-center items-center p-0"
        style={{ width: "80vw", height: "80vh", maxWidth: "none" }}
      >
        {" "}
        <iframe
          className="w-[80vw] h-full"
          // width="560"
          // height="315"
          src={`https://www.youtube.com/embed/${getKey()}?si=EPdZOA6AwmV4JRpG`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </DialogContent>
    </Dialog>
  );
}
