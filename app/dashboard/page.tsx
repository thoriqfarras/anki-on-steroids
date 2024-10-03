import Deck from '../ui/dashboard/deck';

export default function Page() {
  return (
    <>
      <h1 className="text-2xl font-bold mb-8 mt-20">Anki on Steroids</h1>
      <div className="max-w-[576px] w-full grid gap-2">
        <Deck />
        <Deck />
        <Deck />
      </div>
      <button className="p-2 rounded-md font-bold bg-zinc-100 drop-shadow-lg hover:brightness-90 mt-8">
        Add Deck
      </button>
    </>
  );
}
