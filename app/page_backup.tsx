import Image from "next/image";
import { Avatar } from "./components/avatar";
import Placeholder from "./components/pages/Placeholder";
import { GetUrl } from "./components/GetUrl";
import Link from "next/link";
import {
  Dropdown,
  DropdownButton,
  DropdownDivider,
  DropdownItem,
  DropdownLabel,
  DropdownMenu,
} from "./components/dropdown";
import {
  Navbar,
  NavbarItem,
  NavbarSection,
  NavbarSpacer,
} from "./components/navbar";
import {
  Sidebar,
  SidebarBody,
  SidebarDivider,
  SidebarFooter,
  SidebarHeader,
  SidebarHeading,
  SidebarItem,
  SidebarLabel,
  SidebarSection,
  SidebarSpacer,
} from "./components/sidebar";
import { SidebarLayout } from "./components/sidebar-layout";
import {
  ArrowRightStartOnRectangleIcon,
  ChevronDownIcon,
  ChevronUpIcon,
  Cog8ToothIcon,
  LightBulbIcon,
  PlusIcon,
  ShieldCheckIcon,
  UserIcon,
} from "@heroicons/react/16/solid";
import {
  Cog6ToothIcon,
  HomeIcon,
  InboxIcon,
  MagnifyingGlassIcon,
  MegaphoneIcon,
  QuestionMarkCircleIcon,
  SparklesIcon,
  Square2StackIcon,
  TicketIcon,
  CalendarIcon,
  IdentificationIcon,
  UserGroupIcon,
  LinkIcon,
  PresentationChartBarIcon,
  CurrencyDollarIcon,
  PencilIcon,
  DocumentIcon,
  ShieldCheckIcon as Shield,
  ChartBarIcon,
  ExclamationTriangleIcon,
  HandThumbUpIcon,
  BarsArrowUpIcon,
  UsersIcon,
  MagnifyingGlassCircleIcon,
} from "@heroicons/react/20/solid";

import Sample from "./components/pages/Sample";
import { ExclamationCircleIcon } from "@heroicons/react/20/solid";

export default function Example() {
  return (
    <SidebarLayout
      navbar={
        <Navbar>
          <NavbarSpacer />
          <NavbarSection>
            <NavbarItem href="/search" aria-label="Search">
              <MagnifyingGlassIcon />
            </NavbarItem>
            <NavbarItem href="/inbox" aria-label="Inbox">
              <InboxIcon />
            </NavbarItem>
            <Dropdown>
              <DropdownButton as={NavbarItem}>
                <Avatar src="/images/steveHeadShot.jpg" square />
              </DropdownButton>
              <DropdownMenu className="min-w-64" anchor="bottom end">
                <DropdownItem href="/my-profile">
                  <UserIcon />
                  <DropdownLabel>My profile</DropdownLabel>
                </DropdownItem>
                <DropdownItem href="/settings">
                  <Cog8ToothIcon />
                  <DropdownLabel>Settings</DropdownLabel>
                </DropdownItem>
                <DropdownDivider />
                <DropdownItem href="/privacy-policy">
                  <ShieldCheckIcon />
                  <DropdownLabel>Privacy policy</DropdownLabel>
                </DropdownItem>
                <DropdownItem href="/share-feedback">
                  <LightBulbIcon />
                  <DropdownLabel>Share feedback</DropdownLabel>
                </DropdownItem>
                <DropdownDivider />
                <DropdownItem href="/logout">
                  <ArrowRightStartOnRectangleIcon />
                  <DropdownLabel>Sign out</DropdownLabel>
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </NavbarSection>
        </Navbar>
      }
      sidebar={
        <Sidebar>
          <Image
            src="/images/pp2-script-logo.png"
            height={30}
            width={125}
            alt="Planning Pod"
            className="place-self-center mt-5"
          />

          <SidebarBody>
            <SidebarSection>
              <SidebarItem href="/">
                <HomeIcon />
                <SidebarLabel>Home</SidebarLabel>
              </SidebarItem>

              <Dropdown>
                <DropdownButton as={SidebarItem}>
                  {/* <Avatar src="/images/pp-script-logo.png" /> */}
                  <Square2StackIcon />
                  <SidebarLabel>Events</SidebarLabel>
                  <ChevronDownIcon />
                </DropdownButton>
                <DropdownMenu
                  className="min-w-80 lg:min-w-64"
                  anchor="bottom start"
                >
                  <DropdownItem href="/teams/1/settings">
                    <HandThumbUpIcon />
                    <DropdownLabel>NYE Ball</DropdownLabel>
                  </DropdownItem>
                  <DropdownItem href="/teams/1/settings">
                    <HandThumbUpIcon />
                    <DropdownLabel>Memorial Day Dance Event </DropdownLabel>
                  </DropdownItem>
                  <DropdownItem href="/teams/1/settings">
                    <HandThumbUpIcon />
                    <DropdownLabel>Casual Gatherings</DropdownLabel>
                  </DropdownItem>
                  <SidebarSpacer /> <SidebarDivider />
                  <DropdownItem href="/teams/1/settings">
                    <ExclamationTriangleIcon />
                    <DropdownLabel>Dave&apos;s Wedding</DropdownLabel>
                  </DropdownItem>
                  <DropdownItem href="/teams/1/settings">
                    <ExclamationTriangleIcon />
                    <DropdownLabel>Retirement Dinner for Mike</DropdownLabel>
                  </DropdownItem>
                  <DropdownItem href="/teams/1/settings">
                    <ExclamationTriangleIcon />
                    <DropdownLabel>Celebration of Life for Guy</DropdownLabel>
                  </DropdownItem>
                  <SidebarSpacer /> <SidebarDivider />
                  <DropdownItem href="/teams/1/settings">
                    <ExclamationCircleIcon />
                    <DropdownLabel>Jones and Jackson Wedding</DropdownLabel>
                  </DropdownItem>
                  <DropdownItem href="/teams/1/settings">
                    <ExclamationCircleIcon />
                    <DropdownLabel>Battson Reception - Outdoor</DropdownLabel>
                  </DropdownItem>
                  <DropdownItem href="/teams/1/settings">
                    <ExclamationCircleIcon />
                    <DropdownLabel>Stephanie Gibbons Baptism</DropdownLabel>
                  </DropdownItem>
                  <DropdownItem href="/searchSample">
                    <MagnifyingGlassCircleIcon />
                    <DropdownLabel className="font-bold">
                      Search All Events
                    </DropdownLabel>
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>

              <Dropdown>
                <DropdownButton as={SidebarItem}>
                  {/* <Avatar src="/images/pp-script-logo.png" /> */}
                  <CalendarIcon />
                  <SidebarLabel>Calendars</SidebarLabel>
                  <ChevronDownIcon />
                </DropdownButton>
                <DropdownMenu
                  className="min-w-80 lg:min-w-64"
                  anchor="bottom start"
                >
                  <DropdownItem href="/teams/1/settings">
                    <Cog8ToothIcon />
                    <DropdownLabel>View All</DropdownLabel>
                  </DropdownItem>

                  <DropdownItem href="/teams/1/settings">
                    <Cog8ToothIcon />
                    <DropdownLabel>Add Appointment</DropdownLabel>
                  </DropdownItem>

                  <DropdownItem href="/teams/1/settings">
                    <Cog8ToothIcon />
                    <DropdownLabel>Schedule Tour</DropdownLabel>
                  </DropdownItem>

                  <DropdownItem href="/teams/1/settings">
                    <Cog8ToothIcon />
                    <DropdownLabel>Add To-do</DropdownLabel>
                  </DropdownItem>

                  <DropdownItem href="/teams/1/settings">
                    <Cog8ToothIcon />
                    <DropdownLabel>Add New Lead</DropdownLabel>
                  </DropdownItem>

                  <DropdownItem href="/teams/1/settings">
                    <Cog8ToothIcon />
                    <DropdownLabel>Add Booked Event</DropdownLabel>
                  </DropdownItem>

                  <DropdownItem href="/teams/1/settings">
                    <Cog8ToothIcon />
                    <DropdownLabel>Add Venue Blackout</DropdownLabel>
                  </DropdownItem>

                  <DropdownItem href="/teams/1/settings">
                    <Cog8ToothIcon />
                    <DropdownLabel>Import/Export</DropdownLabel>
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>

              <Dropdown>
                <DropdownButton as={SidebarItem}>
                  {/* <Avatar src="/images/pp-script-logo.png" /> */}
                  <IdentificationIcon />
                  <SidebarLabel>Contacts</SidebarLabel>
                  <ChevronDownIcon />
                </DropdownButton>
                <DropdownMenu
                  className="min-w-80 lg:min-w-64"
                  anchor="bottom start"
                >
                  <DropdownItem href="/teams/1/settings">
                    <Cog8ToothIcon />
                    <DropdownLabel>View All Contacts</DropdownLabel>
                  </DropdownItem>

                  <DropdownItem href="/teams/1/settings">
                    <Cog8ToothIcon />
                    <DropdownLabel>Add Contact</DropdownLabel>
                  </DropdownItem>

                  <DropdownItem href="/teams/1/settings">
                    <Cog8ToothIcon />
                    <DropdownLabel>Manage Duplicates</DropdownLabel>
                  </DropdownItem>

                  <DropdownItem href="/teams/1/settings">
                    <Cog8ToothIcon />
                    <DropdownLabel>Import/Export</DropdownLabel>
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>

              <Dropdown>
                <DropdownButton as={SidebarItem}>
                  {/* <Avatar src="/images/pp-script-logo.png" /> */}
                  <IdentificationIcon />
                  <SidebarLabel>Nested Menus!</SidebarLabel>
                  <ChevronDownIcon />
                </DropdownButton>
                <DropdownMenu
                  className="min-w-80 lg:min-w-64"
                  anchor="bottom start"
                >
                  <DropdownItem href="/teams/1/settings">
                    <Cog8ToothIcon />
                    <DropdownLabel>View All Contacts</DropdownLabel>
                  </DropdownItem>

                  <DropdownItem href="/teams/1/settings">
                    <Cog8ToothIcon />
                    <DropdownLabel>Add Contact</DropdownLabel>
                  </DropdownItem>

                  <DropdownItem href="/teams/1/settings">
                    <Cog8ToothIcon />
                    <DropdownLabel>Manage Duplicates</DropdownLabel>
                  </DropdownItem>

                  <DropdownItem href="/teams/1/settings">
                    <IdentificationIcon />
                    <Dropdown>
                      <DropdownButton as={SidebarItem}>
                        {/* <Avatar src="/images/pp-script-logo.png" /> */}
                        {/* <IdentificationIcon /> */}
                        <SidebarLabel>Contacts</SidebarLabel>
                        <ChevronDownIcon />
                      </DropdownButton>
                      <DropdownMenu
                        className="min-w-80 lg:min-w-64"
                        anchor="bottom start"
                      >
                        <DropdownItem href="/teams/1/settings">
                          <Cog8ToothIcon />
                          <DropdownLabel>View All Contacts</DropdownLabel>
                        </DropdownItem>

                        <DropdownItem href="/teams/1/settings">
                          <Cog8ToothIcon />
                          <DropdownLabel>Add Contact</DropdownLabel>
                        </DropdownItem>

                        <DropdownItem href="/teams/1/settings">
                          <Cog8ToothIcon />
                          <DropdownLabel>Manage Duplicates</DropdownLabel>
                        </DropdownItem>

                        <DropdownItem href="/teams/1/settings">
                          <Cog8ToothIcon />
                          <DropdownLabel>Import/Export</DropdownLabel>
                        </DropdownItem>
                      </DropdownMenu>
                    </Dropdown>
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>

              <Dropdown>
                <DropdownButton as={SidebarItem}>
                  {/* <Avatar src="/images/pp-script-logo.png" /> */}
                  <UserGroupIcon />
                  <SidebarLabel>Communications</SidebarLabel>
                  <ChevronDownIcon />
                </DropdownButton>
                <DropdownMenu
                  className="min-w-80 lg:min-w-64"
                  anchor="bottom start"
                >
                  <DropdownItem href="/teams/1/settings">
                    <Cog8ToothIcon />
                    <DropdownLabel>Emails</DropdownLabel>
                  </DropdownItem>

                  <DropdownItem href="/teams/1/settings">
                    <Cog8ToothIcon />
                    <DropdownLabel>Call Logs</DropdownLabel>
                  </DropdownItem>

                  <DropdownItem href="/teams/1/settings">
                    <Cog8ToothIcon />
                    <DropdownLabel>Email Setup</DropdownLabel>
                  </DropdownItem>

                  <DropdownItem href="/teams/1/settings">
                    <Cog8ToothIcon />
                    <DropdownLabel>Email Templates</DropdownLabel>
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>

              <SidebarItem href="/leads">
                <LinkIcon />
                <SidebarLabel>Leads</SidebarLabel>
              </SidebarItem>

              {/* <SidebarItem href="/proposals">
                <PresentationChartBarIcon />
                <SidebarLabel>Proposals</SidebarLabel>
              </SidebarItem> */}

              <Dropdown>
                <DropdownButton as={SidebarItem}>
                  {/* <Avatar src="/images/pp-script-logo.png" /> */}
                  <PresentationChartBarIcon />
                  <SidebarLabel>Proposals</SidebarLabel>
                  <ChevronDownIcon />
                </DropdownButton>
                <DropdownMenu
                  className="min-w-80 lg:min-w-64"
                  anchor="bottom start"
                >
                  <DropdownItem href="/teams/1/settings">
                    <Cog8ToothIcon />
                    <DropdownLabel>View All Proposals</DropdownLabel>
                  </DropdownItem>

                  <DropdownItem href="/teams/1/settings">
                    <Cog8ToothIcon />
                    <DropdownLabel>Add Proposal</DropdownLabel>
                  </DropdownItem>

                  <DropdownItem href="/teams/1/settings">
                    <Cog8ToothIcon />
                    <DropdownLabel>Signed</DropdownLabel>
                  </DropdownItem>

                  <DropdownItem href="/teams/1/settings">
                    <Cog8ToothIcon />
                    <DropdownLabel>Need Signatures</DropdownLabel>
                  </DropdownItem>

                  <DropdownItem href="/teams/1/settings">
                    <Cog8ToothIcon />
                    <DropdownLabel>Active</DropdownLabel>
                  </DropdownItem>

                  <DropdownItem href="/teams/1/settings">
                    <Cog8ToothIcon />
                    <DropdownLabel>Archived</DropdownLabel>
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>

              <Dropdown>
                <DropdownButton as={SidebarItem}>
                  {/* <Avatar src="/images/pp-script-logo.png" /> */}
                  <CurrencyDollarIcon />
                  <SidebarLabel>Invoices</SidebarLabel>
                  <ChevronDownIcon />
                </DropdownButton>
                <DropdownMenu
                  className="min-w-80 lg:min-w-64"
                  anchor="bottom start"
                >
                  <DropdownItem href="/teams/1/settings">
                    <Cog8ToothIcon />
                    <DropdownLabel>View All Invoices</DropdownLabel>
                  </DropdownItem>

                  <DropdownItem href="/teams/1/settings">
                    <Cog8ToothIcon />
                    <DropdownLabel>Add Invoice</DropdownLabel>
                  </DropdownItem>

                  <DropdownItem href="/teams/1/settings">
                    <Cog8ToothIcon />
                    <DropdownLabel>Balances</DropdownLabel>
                  </DropdownItem>

                  <DropdownItem href="/teams/1/settings">
                    <Cog8ToothIcon />
                    <DropdownLabel>Payments</DropdownLabel>
                  </DropdownItem>

                  <DropdownItem href="/teams/1/settings">
                    <Cog8ToothIcon />
                    <DropdownLabel>Scheduled Payments</DropdownLabel>
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>

              <Dropdown>
                <DropdownButton as={SidebarItem}>
                  {/* <Avatar src="/images/pp-script-logo.png" /> */}
                  <PencilIcon />
                  <SidebarLabel>Contracts</SidebarLabel>
                  <ChevronDownIcon />
                </DropdownButton>
                <DropdownMenu
                  className="min-w-80 lg:min-w-64"
                  anchor="bottom start"
                >
                  <DropdownItem href="/teams/1/settings">
                    <Cog8ToothIcon />
                    <DropdownLabel>View All Contracts</DropdownLabel>
                  </DropdownItem>

                  <DropdownItem href="/teams/1/settings">
                    <Cog8ToothIcon />
                    <DropdownLabel>Add Contract</DropdownLabel>
                  </DropdownItem>

                  <DropdownItem href="/teams/1/settings">
                    <Cog8ToothIcon />
                    <DropdownLabel>Signed By All Parties</DropdownLabel>
                  </DropdownItem>

                  <DropdownItem href="/teams/1/settings">
                    <Cog8ToothIcon />
                    <DropdownLabel>Still Need Signatures</DropdownLabel>
                  </DropdownItem>

                  <DropdownItem href="/teams/1/settings">
                    <Cog8ToothIcon />
                    <DropdownLabel>Import/Export</DropdownLabel>
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>

              <Dropdown>
                <DropdownButton as={SidebarItem}>
                  {/* <Avatar src="/images/pp-script-logo.png" /> */}
                  <ChartBarIcon />
                  <SidebarLabel>Reporting</SidebarLabel>
                  <ChevronDownIcon />
                </DropdownButton>
                <DropdownMenu
                  className="min-w-80 lg:min-w-64"
                  anchor="bottom start"
                >
                  <DropdownItem href="/teams/1/settings">
                    <Cog8ToothIcon />
                    <DropdownLabel>View All Reports</DropdownLabel>
                  </DropdownItem>

                  <DropdownItem href="/teams/1/settings">
                    <Cog8ToothIcon />
                    <DropdownLabel>Create Individual Report</DropdownLabel>
                  </DropdownItem>

                  <DropdownItem href="/teams/1/settings">
                    <Cog8ToothIcon />
                    <DropdownLabel>Create Dashboard</DropdownLabel>
                  </DropdownItem>

                  <DropdownItem href="/teams/1/settings">
                    <Cog8ToothIcon />
                    <DropdownLabel>Import Pre-Built Report</DropdownLabel>
                  </DropdownItem>

                  <DropdownItem href="/teams/1/settings">
                    <Cog8ToothIcon />
                    <DropdownLabel>Legacy Reporting</DropdownLabel>
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>

              <Dropdown>
                <DropdownButton as={SidebarItem}>
                  {/* <Avatar src="/images/pp-script-logo.png" /> */}
                  <DocumentIcon />
                  <SidebarLabel>Templates</SidebarLabel>
                  <ChevronDownIcon />
                </DropdownButton>
                <DropdownMenu
                  className="min-w-80 lg:min-w-64"
                  anchor="bottom start"
                >
                  <DropdownItem href="/teams/1/settings">
                    <Cog8ToothIcon />
                    <DropdownLabel>View All Templates</DropdownLabel>
                  </DropdownItem>

                  <DropdownItem href="/teams/1/settings">
                    <Cog8ToothIcon />
                    <DropdownLabel>Financial & Legal Templates</DropdownLabel>
                  </DropdownItem>

                  <DropdownItem href="/teams/1/settings">
                    <Cog8ToothIcon />
                    <DropdownLabel>Productivity Templates</DropdownLabel>
                  </DropdownItem>

                  <DropdownItem href="/teams/1/settings">
                    <Cog8ToothIcon />
                    <DropdownLabel>Communication Templates</DropdownLabel>
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>

              <Dropdown>
                <DropdownButton as={SidebarItem}>
                  {/* <Avatar src="/images/pp-script-logo.png" /> */}
                  <Shield />
                  <SidebarLabel>Insurance Policies</SidebarLabel>
                  <ChevronDownIcon />
                </DropdownButton>
                <DropdownMenu
                  className="min-w-80 lg:min-w-64"
                  anchor="bottom start"
                >
                  <DropdownItem href="/teams/1/settings">
                    <Cog8ToothIcon />
                    <DropdownLabel>View All Policies</DropdownLabel>
                  </DropdownItem>

                  <DropdownItem href="/teams/1/settings">
                    <Cog8ToothIcon />
                    <DropdownLabel>Email Request</DropdownLabel>
                  </DropdownItem>

                  <DropdownItem href="/teams/1/settings">
                    <Cog8ToothIcon />
                    <DropdownLabel>Request Quote</DropdownLabel>
                  </DropdownItem>

                  <DropdownItem href="/teams/1/settings">
                    <Cog8ToothIcon />
                    <DropdownLabel>Requested</DropdownLabel>
                  </DropdownItem>

                  <DropdownItem href="/teams/1/settings">
                    <Cog8ToothIcon />
                    <DropdownLabel>Quoted</DropdownLabel>
                  </DropdownItem>

                  <DropdownItem href="/teams/1/settings">
                    <Cog8ToothIcon />
                    <DropdownLabel>Accepted</DropdownLabel>
                  </DropdownItem>

                  <DropdownItem href="/teams/1/settings">
                    <Cog8ToothIcon />
                    <DropdownLabel>Active</DropdownLabel>
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </SidebarSection>
            <DropdownDivider className="mt-8" />
            <SidebarSection className="max-lg:hidden">
              <SidebarHeading className="text-slate-900 font-bold text-base">
                <span className="text-red-600 font-bold text-base">
                  Upcoming Events
                </span>
              </SidebarHeading>
              <SidebarItem href="/events/1">
                Dave and Brenda&apos;s Wedding
              </SidebarItem>
              <SidebarItem href="/events/2">
                Close on Sale of Business
              </SidebarItem>
              <DropdownDivider className="mt-8" />
              <SidebarHeading className="text-red-600 font-bold text-base">
                <span className="text-red-600 font-bold text-base">
                  Proposals Due This Week
                </span>
              </SidebarHeading>
              <SidebarItem href="/events/1">
                Smith and Johnson Wedding
              </SidebarItem>
              <DropdownDivider className="mt-8" />
              <SidebarHeading>
                <span className="text-red-600 font-bold text-base">
                  Requires Your Attention!
                </span>
              </SidebarHeading>
              <SidebarItem href="/events/1">
                &middot; E&O Insurance expiring....
              </SidebarItem>
              <SidebarItem href="/events/1">
                &middot; Event property confirmation due
              </SidebarItem>
            </SidebarSection>
            <DropdownDivider />
            <SidebarSpacer />
            <SidebarSection>
              <SidebarItem href="/support">
                <QuestionMarkCircleIcon />
                <SidebarLabel>User context data 1</SidebarLabel>
              </SidebarItem>
              <SidebarItem href="/changelog">
                <SparklesIcon />
                <SidebarLabel>User session data 1</SidebarLabel>
              </SidebarItem>
            </SidebarSection>
          </SidebarBody>
          <SidebarFooter className="max-lg:hidden">
            <Dropdown>
              <DropdownButton as={SidebarItem}>
                <span className="flex min-w-0 items-center gap-3">
                  <Avatar
                    src="/images/steveHeadShot.jpg"
                    className="size-10"
                    square
                    alt=""
                  />
                  <span className="min-w-0">
                    <span className="block truncate text-sm/5 font-medium text-zinc-950 dark:text-white">
                      Steve
                    </span>
                    <span className="block truncate text-xs/5 font-normal text-zinc-500 dark:text-zinc-400">
                      steve@example.com
                    </span>
                  </span>
                </span>
                <ChevronUpIcon />
              </DropdownButton>
              <DropdownMenu className="min-w-64" anchor="top start">
                <DropdownItem href="/my-profile">
                  <UserIcon />
                  <DropdownLabel>My profile</DropdownLabel>
                </DropdownItem>
                <DropdownItem href="/settings">
                  <Cog8ToothIcon />
                  <DropdownLabel>Settings</DropdownLabel>
                </DropdownItem>
                <DropdownDivider />
                <DropdownItem href="/privacy-policy">
                  <ShieldCheckIcon />
                  <DropdownLabel>Privacy policy</DropdownLabel>
                </DropdownItem>
                <DropdownItem href="/share-feedback">
                  <LightBulbIcon />
                  <DropdownLabel>Share feedback</DropdownLabel>
                </DropdownItem>
                <DropdownDivider />
                <DropdownItem href="/logout">
                  <ArrowRightStartOnRectangleIcon />
                  <DropdownLabel>Sign out</DropdownLabel>
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </SidebarFooter>
        </Sidebar>
      }
    >
      {/* The page content 
      Left nav demo: <Link href={`/`}>/</Link>*/}
      <GetUrl />
      <Sample />
      <Avatar />
    </SidebarLayout>
  );
}
