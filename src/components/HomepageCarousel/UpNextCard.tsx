interface Props {
  image: string;
  original_title: string;
}
export const UpNextCard = ({ image, original_title }: Props) => {
  return (
    <div className=" w-[30vw] h-[40vh] overflow-hidden">
      <div className="flex">
        <div>
          <img
            src={`https://image.tmdb.org/t/p/w500/${image}`}
            alt=""
            className="w-[6vw] h-full"
          />
        </div>
        <div>{original_title}</div>
      </div>
    </div>
  );
};
