import type React from "react"

export const MilestonesContainer: React.FC<React.PropsWithChildren> = ({ children }) => (
  <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">
    {children}
  </div>
)

export const Milestone: React.FC<React.PropsWithChildren> = ({ children }) => (
  <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
    {children}
  </div>
)

export const MilestoneIcon: React.FC<{ icon: string }> = ({ icon }) => (
  <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-primary text-slate-500 group-[.is-active]:text-white text-2xl shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
    {icon}
  </div>
)

