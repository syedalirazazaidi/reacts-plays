import React from "react";

export default function MovieCard({ data }: any) {
  return (
    <div>
      <div className="grid grid-cols-3 gap-4">
        {data &&
          data?.map((item: any, index: any) => (
            <div
              key={item?.jawSummary?.synopsis}
              className="bg-white p-4 shadow"
            >
              <p className="text-xl font-bold">{item?.jawSummary?.synopsis}</p>
            </div>
          ))}
      </div>
    </div>
  );
}
