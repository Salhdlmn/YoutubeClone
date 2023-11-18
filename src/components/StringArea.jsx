import { useState } from "react";

const StringArea = ({ text, max }) => {
  let shortText = text;
  const [showFull, setShowFull] = useState(false);

  if (text.length > max && !showFull) {
    shortText = text.slice(0, max) + "...Daha fazla";
  }
  return (
    <p onClick={() => setShowFull(!showFull)}>
      {/* Stringi split ile  "boşluğa göre"   Array'a çevirdik her bir satırı dizi methodu olan map kullanıp <br /> ile boşluk bırakarak ekrana yazdık */}
      {shortText.split("\n").map((line, index) => (
        <span key={index}>
          {line}
          <br />
        </span>
      ))}
    </p>
  );
};

export default StringArea;
