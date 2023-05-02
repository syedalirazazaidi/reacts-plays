import React from "react";
import MainLayout from "../layout/MainLayout";

function AllJobs() {
  return (
    <div className="flex justify-between gap-2 flex-wrap p-8">
      <div className="bg-white rounded-md shadow-lg p-4 w-80">
        <h2 className="text-lg font-semibold mb-2">Card Title</h2>
        <p className="text-gray-600 text-sm">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed commodo
          vestibulum enim, nec tincidunt nunc bibendum sit amet. Nullam eu
          hendrerit nulla.
        </p>
      </div>
      <div className="bg-white rounded-md shadow-lg p-4  w-80">
        <h2 className="text-lg font-semibold mb-2">Card Title</h2>
        <p className="text-gray-600 text-sm">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed commodo
          vestibulum enim, nec tincidunt nunc bibendum sit amet. Nullam eu
          hendrerit nulla.
        </p>
      </div>
      <div className="bg-white rounded-md shadow-lg p-4  w-80">
        <h2 className="text-lg font-semibold mb-2">Card Title</h2>
        <p className="text-gray-600 text-sm">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed commodo
          vestibulum enim, nec tincidunt nunc bibendum sit amet. Nullam eu
          hendrerit nulla.
        </p>
      </div>
    </div>
    // <MainLayout>
    //   <div>AllJobs</div>;
    // </MainLayout>
  );
}

export default AllJobs;
