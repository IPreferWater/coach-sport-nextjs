
export function Sticker({ title, subTitle, listTitle1, liste1, listTitle2, liste2 }) {
    console.log(liste1)
    return (  
         <div className="flex flex-col bg-green-600 rounded-lg p-4 text-white">
    <div className="font-bold text-3xl text-center mb-2">{title}</div>
    <div className="mb-4">{subTitle}</div>
    <div className="font-bold">{listTitle1}</div>

    {liste1.map((str, index) => (
            <div>➡ {str}</div>
          ))}
    <div className="mt-4 font-bold">{listTitle2}</div>
    
    {liste2.map((str, index) => (
            <div>➡ {str}</div>
          ))}
</div>
)
  }