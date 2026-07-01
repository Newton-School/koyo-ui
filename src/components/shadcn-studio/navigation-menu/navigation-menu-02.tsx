import { CalendarDaysIcon, FileCheck2Icon, MessageSquareTextIcon, SparklesIcon } from 'lucide-react'

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger
} from '@newtonschool/koyo-ui/navigation-menu'

const NavigationMenuDemo = () => {
  return (
    <NavigationMenu viewport={false}>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Hiring flow</NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className='w-[360px] space-y-2'>
              <NavigationMenuLink href='#' className='bg-koyo-brand/10 text-koyo-brand'>
                <div className='flex items-center gap-2 font-medium'>
                  <SparklesIcon />
                  AI shortlist
                </div>
                <p className='text-muted-foreground text-xs'>Rank candidates by role fit and cohort progress.</p>
              </NavigationMenuLink>
              <div className='grid gap-1'>
                <NavigationMenuLink href='#'>
                  <FileCheck2Icon />
                  Scorecards
                </NavigationMenuLink>
                <NavigationMenuLink href='#'>
                  <CalendarDaysIcon />
                  Interview calendar
                </NavigationMenuLink>
                <NavigationMenuLink href='#'>
                  <MessageSquareTextIcon />
                  Candidate messaging
                </NavigationMenuLink>
              </div>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink href='#' active>
            Reports
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

export default NavigationMenuDemo
