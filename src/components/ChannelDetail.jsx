import millify from "millify";
import moment from "moment/moment";
import { AiFillDislike, AiFillLike } from "react-icons/ai";
import "moment/locale/tr";
import StringArea from "./StringArea";

const ChannelDetail = ({ detail }) => {
  const apiTarihString = detail.publishedDate;

  // API'den gelen tarihi içeren string'i Date nesnesine çevirme
  const apiTarihi = new Date(apiTarihString);

  // Gün, ay ve yıl bilgilerini alarak ayrıştırma
  const gun = apiTarihi.getDate();
  const ay = apiTarihi.getMonth() + 1; // JavaScript'te ay indeksleri 0'dan başlar, bu yüzden 1 ekliyoruz
  const yil = apiTarihi.getFullYear();

  // Sonuçları istediğiniz formatta birleştirme (örneğin, "gün.ay.yıl" formatı)
  const sonuc = gun + "-" + ay + "-" + yil;

  return (
    <>
      <h1 className="mt-3 text-xl font-bold p-3">{detail.title}</h1>
      <div className="flex justify-between items-center p-3">
        <div className="flex items-center gap-4">
          <img
            className="rounded-full w-12 h-12"
            src={detail.author.avatar[0].url}
          />
          <div>
            <h4 className="font-bold">{detail.author.title}</h4>
            <p>{detail.author.stats.subscribersText}</p>
          </div>
          <button className="bg-white h-9 rounded-full text-black px-3 transition hover:bg-[#bebebe]">
            Abone Ol
          </button>
        </div>
        <div className="flex items-center rounded-full py-2 px-6 text-lg bg-[#4b4a4a]">
          <div className="flex gap-2 items-center pr-3 border-r-2 border-white">
            <AiFillLike />
            <span>{millify(detail.stats.likes)}</span>
          </div>
          <div className="pl-2">
            <AiFillDislike />
          </div>
        </div>
      </div>
      <div className="bg-[#383838] rounded p-2 mt-2 hover:bg-[#535353]">
        <div className="flex gap-3 ">
          <p>{millify(detail.stats.views)} Görüntüleme</p>
          <p>{moment(sonuc).fromNow()}</p>
          <ul className=" flex gap-3">
            {detail.superTitle.items.slice(0, 3).map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
        <StringArea text={detail.description} max={200} />
      </div>
    </>
  );
};

export default ChannelDetail;
