// https://tailwindcss.com/docs/hover-focus-and-other-states#quick-reference

/*
| Selector   | Meaning                      | Example Output     |
| ---------- | ---------------------------- | ------------------ |
| [&]        | The element itself           | .box { … }         |
| [&:hover]  | On hover of this element     | .box:hover { … }   |
| [&>span]   | Direct child <span>          | .box > span { … }  |
| [&_*]      | Any child element            | .box * { … }       |
| [&+.item]  | Next sibling with class item | .box + .item { … } |
| [&_.child] | Any nested .child inside     | .box .child { … }  |

| Symbol | Meaning                | Example                                        |
| ------ | ---------------------- | ---------------------------------------------- |
| &      | current element (self) | [&:hover]:bg-red-500 → .element:hover { … }    |
| *      | any descendant         | [&_*]:text-gray-500 → .element * { … }         |
| >      | direct child           | [&>span]:text-blue-500 → .element > span { … } |
*/

import React, { useState } from "react";

function Core() {
  const [items] = useState([
    {
      id: 1,
      name: "Alice Johnson",
      email: "alice@example.com",
      hobby: "Photography",
    },
    { id: 2, name: "Bob Smith", email: "bob@example.com", hobby: "" },
    {
      id: 3,
      name: "Carol Williams",
      email: "carol@example.com",
      hobby: "Reading",
    },
    { id: 4, name: "David Brown", email: "david@example.com", hobby: "Gaming" },
  ]);

  const [checked, setChecked] = useState(false);
  const [radioValue, setRadioValue] = useState("draft");
  const [draggingIndex, setDraggingIndex] = useState(null);

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            Tailwind CSS Core
          </h1>
        </div>

        {/* Hover, Focus, Active */}
        <section className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">
            Hover, Focus, Active
          </h2>
          <div className="space-y-4">
            <button className="bg-violet-500 hover:bg-violet-600 focus:outline-2 focus:outline-offset-2 focus:outline-violet-500 active:bg-violet-700 px-6 py-3 rounded text-white font-medium transition">
              Hover, Focus, and Click Me
            </button>

            <button className="bg-blue-500 hover:bg-blue-600 focus-visible:ring-4 focus-visible:ring-blue-300 px-6 py-3 rounded text-white font-medium">
              Focus Visible (keyboard focus)
            </button>

            <button className="bg-indigo-600 focus:outline-2 focus:outline-offset-2 focus:outline-violet-500 hover:not-focus:bg-indigo-700 px-6 py-3 rounded text-white font-medium">
              :not() variant
            </button>
            <a
              href="#visited-1"
              className="block text-blue-600 hover:text-blue-800 visited:text-purple-600"
            >
              Click this link (visited state will be purple)
            </a>
            <a
              href="#visited-2"
              className="block text-blue-600 hover:text-blue-800 visited:text-purple-600"
            >
              Click this link too (visited state will be purple)
            </a>
          </div>
        </section>

        {/* First, Last, Odd, Even */}
        <section className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">
            First, Last, Odd, Even
          </h2>

          <div className="mb-6">
            <h3 className="text-lg font-medium mb-3 text-gray-700">
              First & Last
            </h3>
            <ul className="border rounded">
              {items.map((person, index) => (
                <li
                  key={person.id}
                  className="flex items-center py-4 px-4 first:pt-2 first:bg-gray-100 last:pb-2 border-b last:border-b-0 last:bg-gray-100"
                >
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-400 to-pink-500 flex items-center justify-center text-white font-bold">
                    {person.name.charAt(0)}
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-900">
                      {person.name}
                    </p>
                    <p className="text-sm text-gray-500">{person.email}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-3 text-gray-700">
              Odd & Even (Table Rows)
            </h3>
            <table className="w-full border-collapse rounded overflow-hidden">
              <thead className="bg-gray-800 text-white">
                <tr>
                  <th className="px-4 py-2 text-left">Name</th>
                  <th className="px-4 py-2 text-left">Email</th>
                  <th className="px-4 py-2 text-left">Hobby</th>
                </tr>
              </thead>
              <tbody>
                {items.map((person) => (
                  <tr key={person.id} className="odd:bg-white even:bg-gray-100">
                    <td className="px-4 py-3 border-b">{person.name}</td>
                    <td className="px-4 py-3 border-b">{person.email}</td>
                    <td className="px-4 py-3 border-b empty:text-gray-400 empty:italic empty:before:content-['No_hobby']">
                      {person.hobby}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Form States */}
        <section className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">
            Form States
          </h2>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Required Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500 invalid:border-pink-500 invalid:text-pink-600 focus:invalid:ring-pink-500"
                placeholder="you@example.com"
              />
              <p className="text-xs text-gray-500 mt-1">
                Type an invalid email to see the invalid state
              </p>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Disabled Input
              </label>
              <input
                type="text"
                disabled
                value="This is disabled"
                className="w-full px-3 py-2 border border-gray-300 rounded disabled:bg-gray-100 disabled:text-gray-500 disabled:cursor-not-allowed"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Read-only Input
              </label>
              <input
                type="text"
                readOnly
                value="This is read-only"
                className="w-full px-3 py-2 border border-gray-300 rounded read-only:bg-amber-50 read-only:text-amber-600"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Placeholder Styling
              </label>
              <input
                type="text"
                placeholder="Enter your name..."
                className="w-full px-3 py-2 border border-gray-300 rounded placeholder:italic placeholder:text-amber-400"
              />
            </div>
          </div>
        </section>

        {/* Checked, Indeterminate */}
        <section className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">
            Checked & Radio States
          </h2>

          <div className="space-y-4">
            <div className="flex items-center">
              <label
                htmlFor="styled-checkbox"
                className="flex items-center has-[:checked]:bg-blue-50 has-[:checked]:text-blue-600 p-2 rounded cursor-pointer"
              >
                <input
                  type="checkbox"
                  id="styled-checkbox"
                  checked={checked}
                  onChange={(e) => setChecked(e.target.checked)}
                  className="peer w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500 checked:accent-amber-400"
                />
                <span className="ml-2">
                  Custom styled checkbox (checked state)
                </span>
              </label>
            </div>

            <div>
              <p className="text-sm font-medium text-gray-700 mb-2">
                Radio buttons with checked states (Siblings / Peer):
              </p>
              <div className="space-y-2">
                <label className="peer flex items-center cursor-pointer">
                  <input
                    type="radio"
                    name="status"
                    value="draft"
                    checked={radioValue === "draft"}
                    onChange={(e) => setRadioValue(e.target.value)}
                    className="peer w-4 h-4 text-blue-600 checked:accent-red-600"
                  />
                  <span className="ml-2 text-gray-700 peer-checked:text-red-600">
                    Draft
                  </span>
                </label>
                {/* When a container element has the peer class and contains an input inside it, 
                then you can use peer-has-[:checked] or peer-has-[:focus] on sibling elements. */}
                <span className="ml-2 text-gray-700 peer-has-[:checked]:hidden">
                  X (Hidden when checked)
                </span>

                <label className="flex items-center cursor-pointer">
                  <input
                    type="radio"
                    name="status"
                    value="published"
                    checked={radioValue === "published"}
                    onChange={(e) => setRadioValue(e.target.value)}
                    className="peer w-4 h-4 text-blue-600 checked:accent-blue-600"
                  />
                  <span className="ml-2 text-gray-700 peer-checked:text-blue-600">
                    Published
                  </span>
                </label>
              </div>
            </div>
          </div>
        </section>

        {/* Group Hover */}
        <section className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">
            Group & Peer Variants
          </h2>

          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium mb-3 text-gray-700">
                Group Hover
              </h3>
              <a
                href="#"
                className="group block p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition"
              >
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-sky-500 group-hover:bg-sky-600 rounded-lg flex items-center justify-center transition">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-gray-900 group-hover:text-red-600 font-medium transition">
                      New Project
                    </h3>
                    <p className="text-gray-500 group-hover:text-red-700 transition">
                      Hover to see both elements change
                    </p>
                  </div>
                </div>
              </a>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-3 text-gray-700">
                Peer State (Form validation)
              </h3>
              <div>
                <input
                  type="email"
                  className="peer w-full px-3 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 invalid:border-red-500"
                  placeholder="your@email.com"
                  required
                />
                <p className="mt-2 invisible peer-invalid:visible text-red-500 text-sm">
                  Please provide a valid email address.
                </p>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-semibold mb-4 text-gray-800">
            Nested groups
          </h2>

          <ul className="border rounded">
            {items.map((person, index) => (
              <li
                key={person.id}
                className="group/item flex items-center py-4 px-4 first:pt-2 first:bg-gray-100 last:pb-2 border-b last:border-b-0 last:bg-gray-100"
              >
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-400 to-pink-500 flex items-center justify-center text-white font-bold">
                  {person.name.charAt(0)}
                </div>
                <div className="ml-3 group/edit">
                  <p className="text-sm font-medium text-gray-900 group-hover/edit:text-amber-600">
                    {person.name}
                  </p>
                  <p className="text-sm text-gray-500 group-hover/item:text-blue-600">
                    {person.email}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </section>

        {/* Before & After */}
        <section className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">
            Before & After Pseudo-elements
          </h2>

          <div className="space-y-4">
            <div>
              <label className="block">
                <span className="text-gray-700 after:content-['*'] after:ml-0.5 after:text-red-500">
                  Required Field
                </span>
                <input
                  type="text"
                  disabled
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded"
                />
              </label>
            </div>

            <blockquote className="text-2xl font-semibold italic text-center">
              This is a{" "}
              <span className="relative inline-block before:absolute before:-inset-1 before:block before:-skew-y-3 before:bg-pink-500">
                <span className="relative text-white">highlighted</span>
              </span>{" "}
              word using before pseudo-element
            </blockquote>
          </div>
        </section>

        {/* First Line & First Letter */}
        <section className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">
            First Line & First Letter
          </h2>

          <p className="first-letter:text-7xl first-letter:font-bold first-letter:float-left first-letter:mr-3 first-letter:text-gray-900 first-line:uppercase first-line:tracking-widest text-gray-700">
            This paragraph demonstrates the first-letter and first-line
            pseudo-elements. Notice how the first letter is much larger and
            floats to the left, while the first line is in uppercase with wider
            letter spacing. The rest of the text remains in normal styling.
          </p>
        </section>

        {/* Selection */}
        <section className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">
            Text Selection
          </h2>

          <div className="selection:bg-fuchsia-300 selection:text-fuchsia-900 p-4 bg-gray-50 rounded">
            <p className="text-gray-700">
              Try selecting this text with your mouse! The selection color is
              customized using the selection variant. This works on all text
              within this container.
            </p>
          </div>
        </section>

        {/* File Input */}
        <section className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">
            File Input Styling
          </h2>

          <input
            type="file"
            className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-violet-50 file:text-violet-700 hover:file:bg-violet-100 file:cursor-pointer"
          />
        </section>

        {/* Open State (Details) */}
        <section className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">
            Open State (Details)
          </h2>

          <details className="border border-gray-200 rounded p-4 open:bg-gray-50 open:border-amber-300">
            <summary className="cursor-pointer font-medium text-gray-900 select-none">
              Click to toggle (watch the styling change)
            </summary>
            <div className="mt-3 text-gray-600">
              This content is revealed when the details element is open. Notice
              how the styling changes based on the open state.
            </div>
          </details>
        </section>

        {/* Marker (List styling) */}
        <section className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">
            Marker (List Bullets)
          </h2>

          <ul className="list-disc list-inside marker:text-sky-500 marker:text-xl space-y-2">
            <li>First item with custom marker</li>
            <li>Second item with custom marker</li>
            <li>Third item with custom marker</li>
          </ul>
        </section>

        {/* Children Selector */}
        <section className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">
            Children Selector (*)
          </h2>

          <div className="space-y-4">
            <ul className="flex flex-wrap gap-2  *:rounded-full *:border *:border-sky-200 *:bg-sky-50 *:px-3 *:py-1 *:text-sm *:nth-[2]:bg-amber-300">
              <li>Sales</li>
              <li>Marketing</li>
              <li>Engineering</li>
              <li>Design</li>
            </ul>
          </div>
        </section>

        {/* Animation 
        
        Modern browsers let users express a preference for 
        reduced motion (for accessibility reasons — e.g., people who get motion sickness from animations).
        
        | Variant          | Meaning                                        | Common Use                     |
        | ---------------- | ---------------------------------------------- | ------------------------------ |
        | `motion-safe:`   | Apply styles **only when motion is allowed**   | Safe to animate                |
        | `motion-reduce:` | Apply styles **when motion should be reduced** | Disable or simplify animations |
        */}
        <section className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">
            Animation
          </h2>
          <button
            type="button"
            disabled
            className="bg-indigo-500 px-6 py-3 rounded-lg text-white font-medium flex items-center gap-3"
          >
            <svg
              className="w-5 h-5 animate-spin motion-reduce:hidden"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
            </svg>
            Processing...
          </button>
          <div className="mt-4 bg-gray-900 rounded-lg border border-gray-800 p-8">
            <h3 className="text-xl text-white font-semibold mb-4">
              Using motion-reduce vs motion-safe
            </h3>

            <div className="space-y-6">
              {/* Motion Reduce Approach */}
              <div>
                <p className="text-sm text-gray-400 mb-3">
                  Using{" "}
                  <code className="bg-gray-800 px-2 py-1 rounded text-blue-400">
                    motion-reduce
                  </code>{" "}
                  can mean lots of "undoing" styles:
                </p>

                <button className="transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-lg text-white font-medium">
                  Save changes (motion-reduce)
                </button>

                <div className="mt-3 bg-gray-950 rounded p-3">
                  <code className="text-xs text-gray-300 break-all">
                    <span className="text-blue-400">
                      transition hover:-translate-y-1
                    </span>{" "}
                    <span className="text-orange-400">
                      motion-reduce:transition-none
                      motion-reduce:hover:transform-none
                    </span>
                  </code>
                </div>
              </div>

              {/* Motion Safe Approach */}
              <div>
                <p className="text-sm text-gray-400 mb-3">
                  Using{" "}
                  <code className="bg-gray-800 px-2 py-1 rounded text-blue-400">
                    motion-safe
                  </code>{" "}
                  is less code in these situations:
                </p>

                <button className="motion-safe:transition motion-safe:transform motion-safe:hover:-translate-y-1 bg-green-500 hover:bg-green-600 px-6 py-3 rounded-lg text-white font-medium">
                  Save changes (motion-safe)
                </button>

                <div className="mt-3 bg-gray-950 rounded p-3">
                  <code className="text-xs text-gray-300">
                    <span className="text-green-400">
                      motion-safe:transition motion-safe:hover:-translate-y-1
                    </span>
                  </code>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-4 bg-gray-900 rounded-lg border border-gray-800 p-8">
            <h3 className="text-xl text-white font-semibold mb-6">
              More Animation Examples
            </h3>

            <div className="grid gap-4">
              {/* Bounce Animation */}
              <div className="flex items-center gap-4">
                <button className="motion-safe:animate-bounce bg-purple-500 hover:bg-purple-600 px-6 py-3 rounded-lg text-white font-medium">
                  Bounce (motion-safe)
                </button>
                <code className="text-sm text-gray-400">
                  motion-safe:animate-bounce
                </code>
              </div>

              {/* Pulse Animation */}
              <div className="flex items-center gap-4">
                <button className="motion-safe:animate-pulse bg-pink-500 hover:bg-pink-600 px-6 py-3 rounded-lg text-white font-medium">
                  Pulse (motion-safe)
                </button>
                <code className="text-sm text-gray-400">
                  motion-safe:animate-pulse
                </code>
              </div>

              {/* Spin Animation */}
              <div className="flex items-center gap-4">
                <button className="bg-amber-500 hover:bg-amber-600 px-6 py-3 rounded-lg text-white font-medium flex items-center gap-2">
                  <svg
                    className="w-5 h-5 motion-safe:animate-spin motion-reduce:hidden"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    />
                  </svg>
                  Loading (hidden on reduce)
                </button>
                <code className="text-sm text-gray-400">
                  motion-reduce:hidden
                </code>
              </div>

              {/* Scale on Hover */}
              <div className="flex items-center gap-4">
                <button className="motion-safe:transition motion-safe:hover:scale-110 bg-teal-500 hover:bg-teal-600 px-6 py-3 rounded-lg text-white font-medium">
                  Scale on Hover
                </button>
                <code className="text-sm text-gray-400">
                  motion-safe:hover:scale-110
                </code>
              </div>

              {/* Rotate on Hover */}
              <div className="flex items-center gap-4">
                <button className="motion-safe:transition motion-safe:hover:rotate-3 bg-red-500 hover:bg-red-600 px-6 py-3 rounded-lg text-white font-medium">
                  Rotate on Hover
                </button>
                <code className="text-sm text-gray-400">
                  motion-safe:hover:rotate-3
                </code>
              </div>
            </div>
          </div>
        </section>

        {/* Arbitrary variants */}
        <section className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">
            Arbitrary Variants
          </h2>

          <ul role="list" className="divide-y divide-gray-200">
            {items.map((person, index) => (
              <li
                key={person.id}
                draggable
                onDragStart={() => setDraggingIndex(index)}
                onDragEnd={() => setDraggingIndex(null)}
                className={`flex items-center py-4 px-4 
              first:pt-2 first:bg-gray-100 
              last:pb-2 last:border-b-0 last:bg-gray-100 
              border-b transition 
              ${draggingIndex === index ? "is-dragging" : ""}
              [&.is-dragging]:cursor-grabbing
              [&.is-dragging]:bg-yellow-100
              `}
              >
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-400 to-pink-500 flex items-center justify-center text-white font-bold">
                  {person.name.charAt(0)}
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium text-gray-900">
                    {person.name}
                  </p>
                  <p className="text-sm text-gray-500">{person.email}</p>
                </div>
              </li>
            ))}
          </ul>
        </section>

        {/* Custom Utilities */}
        <section className="p-6 shadow">
          {/* hover:bg-amber-500 */}
          <h2 className="hover:bg-amber-500 text-2xl font-semibold mb-4">
            Custom Utilities
          </h2>

          <button className="custom-rotate text-black">@utility simple</button>
          <pre className="clr-green">@utility complex</pre>
        </section>
      </div>
    </div>
  );
}

export default Core;
