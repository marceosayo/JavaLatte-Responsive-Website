import croissant from "/croissant.png";
import whippedLatte from "/whipped-latte.jpg";

function CoffeePreviews({ nightMode }) {
  return (
    <section className="preview-container">
      <div className="preview flex items-center justify-center flex-row">
        <div className="left w-[50%] flex-col">
          <h1 className="text-[2.8rem] text-amber-700 dark:text-amber-500">
            Honey Croissants are BACK!
            <hr className="border-[2px] rounded-[10px] opacity-30" />
          </h1>
          <p className="preview-desc text-[1.5rem] dark:text-white">
            The scent of our most popular and freshly-served buttered croissants
            filled with honey and cinnamon is in the air from 9:00 AM until
            12:00 PM for a limited time only!
          </p>
          <p className="text-[13px] dark:text-white/60">
            **Limit of 1 basket per table**
          </p>

          <p className="price text-[2rem] text-amber-700 dark:text-amber-500">
            $7.50
          </p>
        </div>

        <div className="right w-[50vw]">
          <img
            src={croissant}
            className="w-[50vw] dark:brightness-[80%]"
            draggable="false"
          />
        </div>
      </div>

      <hr className="split border-[3px] rounded-[10px] opacity-20 text-amber-700 dark:text-amber-500" />

      <div className="preview flex items-center justify-center flex-row gap-[1.5rem]">
        <div className="left w-[50%]">
          <img
            src={whippedLatte}
            className="w-[50vw] rounded-br-[280px] rounded-tl-[280px] rounded-tr-[50px] rounded-bl-[50px] dark:brightness-[80%] shadow-xl"
            draggable="false"
          />
        </div>

        <div className="right w-[50vw]">
          <h1 className="text-[2.8rem] text-amber-700 dark:text-amber-500">
            Whipped Lattes are in the house!
            <hr className="border-[2px] rounded-[10px] opacity-30" />
          </h1>
          <p className="preview-desc text-[1.5rem] dark:text-white">
            Order one of our Caramel or White Mocha Whipped Lattes today!
          </p>
          <p className="text-[13px] dark:text-white/60">
            **Dairy-free options available**
          </p>
          <p className="price text-[2rem] text-amber-700 dark:text-amber-500">
            $6.95
          </p>
        </div>
      </div>
      <hr className="split border-[3px] rounded-[10px] opacity-20 text-amber-700 dark:text-amber-500" />
    </section>
  );
}

export default CoffeePreviews;
