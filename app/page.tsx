import Link from "next/link";
import PocketBase from "pocketbase";
// async function fetch() {
//   const client = new PocketBase("http://127.0.0.1:8090");

//   const records = await client.records.getFullList(
//     "dash",
//     200 /* batch size */,
//     {
//       sort: "-created",
//     }
//   );

//   return records;
// }

async function getProducts() {
  const client = await fetch("https://dummyjson.com/products");
  const data = await client.json();

  return data["products"];
}

export default async function Page() {
  const data = await getProducts();

  return (
    <div className="bg-pink-400/40 text-white">
      <h1 className="text-center text-4xl p-5">Products </h1>

      <div className="flex justify-between m-10 flex-wrap  gap-5 space-y-4">
        {data.map((e: any) => (
          <div
            key={e.id}
            className="bg-purple-300/25 h-1/4 w-1/4 p-4 rounded-lg space-y-2 "
          >
            <div className="">
              <img
                src={e.thumbnail}
                alt={e.tittle}
                className="object-cover h-48 w-96 hover:object-scale-down"
              />
            </div>
            <div className="flex justify-between">
              <h2 className="font-bold">{e.title}</h2>
              <p>⭐ {e.rating}</p>
            </div>
            <p>{e.description}</p>
            <p>${e.price}</p>
          </div>
        ))}
        {/* {data.map((e, i) => (
          <Link key={i} href={`/${e.id}`}>
            <div
              className="relative hover:scale-105 m-10 hover:transition-all hover:cursor-pointer group"
              key={e["id"]}
            >
              <div className="bg-white/30 rounded-b-lg invisible group-hover:transition-all group-hover:duration-100 group-hover:visible absolute w-full p-6 backdrop-brightness-50 backdrop-blur-sm bottom-0 ">
                <p className="text-center  text-white font-medium">
                  {e["name"]}
                </p>
              </div>
              <img
                className="rounded-lg : "
                height={400}
                width={400}
                src={e["image"]}
                alt={e["name"]}
              />
            </div>
          </Link>
        ))} */}
      </div>
    </div>
  );
}
