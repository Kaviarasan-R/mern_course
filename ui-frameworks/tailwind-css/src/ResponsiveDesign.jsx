/* 
https://tailwindcss.com/docs/responsive-design 

Breakpoint - Minimum width - CSS
sm	- (640px)  - @media (width >= 640px) { ... }
md	- (768px)  - @media (width >= 768px) { ... }
lg	- (1024px) - @media (width >= 1024px) { ... }
xl	- (1280px) - @media (width >= 1280px) { ... }
2xl	- (1536px) - @media (width >= 1536px) { ... }

Breakpoint - Maximum width - CSS
max-sm	- (640px)  - @media (width < 640px) { ... }
max-md	- (768px)  - @media (width < 768px) { ... }
max-lg	- (1024px) - @media (width < 1024px) { ... }
max-xl	- (1280px) - @media (width < 1280px) { ... }
max-2xl	- (1536px) - @media (width < 1536px) { ... }

TODO: @container query (https://tailwindcss.com/docs/responsive-design#container-queries)
*/

function ResponsiveDesign() {
  return (
    <div className="flex flex-col gap-5">
      <h1 className="text-3xl font-bold text-[var(--default-green)]">
        Responsive Design
      </h1>
      <div className="mx-auto max-w-md overflow-hidden rounded-xl bg-white shadow-md md:max-w-2xl">
        <div className="md:flex md:bg-amber-300 sm:bg-blue-300 mobile-lg:bg-emerald-300">
          <div className="md:shrink-0 max-xs:hidden">
            {/* max-sm:hidden xs:hidden*/}
            <img
              className="h-48 w-full object-cover md:h-full md:w-48"
              src="building.png"
              alt="Modern building architecture"
            />
          </div>
          <div className="p-8">
            <div className="text-sm font-semibold tracking-wide text-indigo-500 uppercase">
              Company retreats
            </div>
            <a
              href="#"
              className="mt-1 block text-lg leading-tight font-medium text-black hover:underline"
            >
              Incredible accommodation for your team
            </a>
            <p className="mt-2 text-gray-500">
              Looking to take your team away on a retreat to enjoy awesome food
              and take in some sunshine? We have a list of places to do just
              that.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResponsiveDesign;
