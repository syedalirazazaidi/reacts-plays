import Link from "next/link";
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
              <p className="text-xl font-bold ">{item?.jawSummary?.synopsis}</p>
              <Link href={`/movie/${item?.jawSummary?.id}`}>
                {" "}
                <button className="bg-red-200 radius">Read More</button>
              </Link>
            </div>
          ))}
      </div>
    </div>
  );
}
