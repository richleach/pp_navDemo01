"use client";

import {
  Combobox,
  ComboboxInput,
  ComboboxOption,
  ComboboxOptions,
  Dialog,
  DialogPanel,
  Transition,
  TransitionChild,
} from "@headlessui/react";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import { useState } from "react";

export default function Example() {
  const [open, setOpen] = useState(true);

  return (
    <Transition show={open} appear>
      <Dialog className="relative z-10" onClose={setOpen}>
        <TransitionChild
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-25 transition-opacity" />
        </TransitionChild>

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto p-4 sm:p-6 md:p-20">
          <TransitionChild
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <DialogPanel className="mx-auto max-w-xl transform divide-y divide-gray-100 overflow-hidden rounded-xl bg-white shadow-2xl ring-1 ring-black ring-opacity-5 transition-all">
              <Combobox>

                <form>
                  <div className="space-y-10 p-6">
                    <div className="border-b border-gray-900/10 pb-12">
                      <h2
                          className="text-base font-semibold leading-7 text-gray-900">Advance Your Search!</h2>
                      <div className="relative">
                        {/*<MagnifyingGlassIcon
                            className="pointer-events-none absolute left-4 top-3.5 h-5 w-5 text-gray-400"
                            aria-hidden="true"
                        />*/}
                        <ComboboxInput
                            autoFocus
                            className="h-12 w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            placeholder="Event Name...."
                        />
                      </div>

                      <div className="mt-10 grid grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-6">

                        <div className="sm:col-span-2 sm:col-start-1">
                          <label htmlFor="withStatus" className="block text-sm font-medium leading-6 text-gray-900">
                            WITH<br/>STATUS
                          </label>
                          <div className="mt-2">
                            <select
                                id="withStatus"
                                name="withStatus"
                                className="mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                defaultValue="All"
                            >
                              <option>ALL</option>
                              <option>Active</option>
                              <option>Archived</option>
                            </select>
                          </div>
                        </div>

                        <div className="sm:col-span-2">
                          <label htmlFor="sorted" className="block text-sm font-medium leading-6 text-gray-900">
                            SORTED<br/>BY
                          </label>
                          <div className="mt-2">
                            <select
                                id="sorted"
                                name="sorted"
                                className="mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                defaultValue="Alphabetical"
                            >
                              <option>Event Date (Ascending)</option>
                              <option>Event Date (Descending)</option>
                              <option>Alphabetical</option>
                            </select>
                          </div>
                        </div>

                        <div className="sm:col-span-2">
                          <label htmlFor="sorted" className="block text-sm font-medium leading-6 text-gray-900">
                            THAT OCCURS WITHIN THE NEXT
                          </label>
                          <div className="mt-2">
                            <select
                                id="sorted"
                                name="sorted"
                                className="mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                defaultValue="All"
                            >
                              <option>Today</option>
                              <option>7 Days</option>
                              <option>14 Days</option>
                              <option>30 Days</option>
                              <option>45 Days</option>
                              <option>60 Days</option>
                              <option>90 Days</option>
                              <option>180 Days</option>
                              <option>365 Days</option>
                            </select>
                          </div>
                        </div>

                      </div>

                      <div className="mt-10 grid grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-6">

                        <div className="sm:col-span-2 sm:col-start-1">
                          <label htmlFor="sorted" className="block text-sm font-medium leading-6 text-gray-900">
                            THAT WAS BOOKED WITHIN THE PAST
                          </label>
                          <div className="mt-2">
                            <select
                                id="sorted"
                                name="sorted"
                                className="mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                defaultValue="All"
                            >
                              <option>Today</option>
                              <option>7 Days</option>
                              <option>14 Days</option>
                              <option>30 Days</option>
                              <option>45 Days</option>
                              <option>60 Days</option>
                              <option>90 Days</option>
                              <option>180 Days</option>
                              <option>365 Days</option>
                            </select>
                          </div>
                        </div>

                        <div className="sm:col-span-2">
                          <label htmlFor="sorted" className="block text-sm font-medium leading-6 text-gray-900">
                            AND IS<br />EVENT TYPE
                          </label>
                          <div className="mt-2">
                            <select
                                id="sorted"
                                name="sorted"
                                className="mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                defaultValue="Alphabetical"
                            >

                                <option value="all">All</option>
                                <option value="noevent_type">No Event Type</option>

                                <option value="1">Awards or Recognition</option>

                                <option value="2">Class or Course</option>

                                <option value="3">Competition or Tournament</option>

                                <option value="4">Concert</option>

                                <option value="5">Conference</option>

                                <option value="6">Convention</option>

                                <option value="7">Dinner/Gala</option>

                                <option value="8">Exhibition or Tradeshow</option>

                                <option value="9">Faith-Based</option>

                                <option value="10">Festival</option>

                                <option value="11">Fundraiser</option>

                                <option value="12">Luncheon</option>

                                <option value="13">Meeting</option>

                                <option value="14">Networking</option>

                                <option value="22">Other</option>

                                <option value="15">Party or Celebration</option>

                                <option value="16">Promotional (Launch or Signing)</option>

                                <option value="17">Retreat or Trip</option>

                                <option value="18">Seminar or Workshop</option>

                                <option value="19">Tasting</option>

                                <option value="20">Tour</option>

                                <option value="21">Wedding</option>

                            </select>
                          </div>
                        </div>

                        <div className="sm:col-span-2">
                          <label htmlFor="withStatus" className="block text-sm font-medium leading-6 text-gray-900">
                            CONTACTS ASSIGNED TO EVENTS
                          </label>
                          <div className="mt-2">
                            <select
                                id="withStatus"
                                name="withStatus"
                                className="mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                defaultValue="All"
                            >
                              <option>Steve Feingertz</option>
                              <option>Tony T Tiger</option>
                            </select>
                          </div>
                        </div>

                      </div>
                    </div>


                  </div>

                  <div className="mt-6 flex items-center justify-between gap-x-6">
                    <button type="button" className="rounded-md bg-slate-200 px-3 py-2 text-sm font-semibold leading-6 text-gray-900">
                      Cancel
                    </button>
                    <button
                        type="submit"
                        className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                      Search
                    </button>
                  </div>
                </form>
              </Combobox>
            </DialogPanel>
          </TransitionChild>
        </div>
      </Dialog>
    </Transition>
  );
}
