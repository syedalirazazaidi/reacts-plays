import React from "react";
import searchWiki from "../lib/serachWiki";

type Props = {
  params: {
    searchTerm: string;
  };
};

export default async function page({ params: { searchTerm } }: Props) {
  const data = await searchWiki(searchTerm);
  const results = data?.query?.pages;
  return (
    <main className="bg-slate-200 mx-auto max-w-lg py-1 min-h-screen">
      {results ? (
        Object.values(results).map((result: any) => {
          return result && result?.title;
        })
      ) : (
        <h2 className="p-2 text-xl">{`${searchTerm} Not Found`}</h2>
      )}
    </main>
  );
}
