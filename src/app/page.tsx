import React from 'react';

function Page() {
  return (
    <div className="grid gap-2 
        grid-cols-1 
        sm:grid-cols-3 
        md:grid-cols-5 
        grid-rows-[82px_250px_250px_250px_82px] 
        sm:grid-rows-[82px_auto_auto_82px] 
        md:grid-rows-[82px_250px_250px_250px_82px]">
      {/* Header */}
      <div className="bg-orange-400 col-span-full text-center content-center font-semibold text-orange-700 border-1 border-orange-700">
        Header
      </div>

      {/* Side-bar */}
      <div className="bg-cyan-400 row-span-3 text-center content-center font-semibold text-cyan-700 border-1 border-cyan-700 
          sm:col-span-1 
          md:col-span-1">
        Side-bar
      </div>

      {/* Hero-Section */}
      <div className="bg-green-400 
          col-span-full 
          sm:col-span-2 
          md:col-span-4 
          row-span-2 text-center content-center font-semibold text-green-700 border-1 border-green-700">
        Hero-Section
      </div>

      {/* Content-1 */}
      <div className="bg-yellow-400 text-center content-center font-semibold text-yellow-700 border-1 border-yellow-700 
          col-span-full 
          sm:col-span-1 
          md:col-span-2">
        Content-1
      </div>

      {/* Content-2 */}
      <div className="bg-purple-400 text-center content-center font-semibold text-purple-700 border-1 border-purple-700 
          col-span-full 
          sm:col-span-1 
          md:col-span-2">
        Content-2
      </div>

      {/* Footer */}
      <div className="bg-rose-400 col-span-full text-center content-center font-semibold text-rose-700 border-1 border-rose-700">
        Footer
      </div>
    </div>
  );
}

export default Page;