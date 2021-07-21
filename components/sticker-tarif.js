export function StickerTarif({ title, prices, listTitle1, liste1, listTitle2, liste2, bg }) {
    console.log(liste1)
    return (  
         <div className={`flex flex-col border-2 border-tana-green rounded-lg p-4 m-8`}>
    <div className="text-center text-2xl text-gray-600">{title}</div>
    {prices.map((price, index) => (
      <div className="flex flex-row items-center my-2">
            <div>✅ {index+1} séance / semaine ➡ {price}€</div>
            <div className="flex flex-col text-xs ml-4 text-gray-600">
              <div>soit</div>
              <div>{price* 4 * (index+1)}€ / mois</div>
              </div>
            </div>
          ))}
</div>
)
  }