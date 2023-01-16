async function getPage(id: string) {
  const record = await fetch(
    `http://127.0.0.1:8090/api/collections/dash/records/${id}`
  );
  const data = await record.json();
  console.log(data);
  return data;
}

export default async function Post({ params }: any) {
  const record = await getPage(params.slug as string);

  return (
    <div className="text-white flex justify-center items-center h-screen ">
      <div className="flex w-fit bg-white/10 p-2 backdrop-blur-xl rounded-lg">
        <img
          src={record.image}
          className="rounded-lg"
          height={800}
          width={800}
        />
        <div className="mx-20">
         
          <h1>{record.name}</h1>
          <p>Created: {record.created}</p>
        </div>
      </div>
    </div>
  );
}
