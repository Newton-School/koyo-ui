import { BarChart3Icon, BriefcaseBusinessIcon, GraduationCapIcon, UsersRoundIcon } from 'lucide-react'

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger
} from '@newtonschool/koyo-ui/navigation-menu'

const productSections = [
  {
    title: 'Candidates',
    description: 'Review profiles, scorecards, and interview readiness.',
    icon: UsersRoundIcon
  },
  {
    title: 'Cohorts',
    description: 'Track learners, batches, and placement milestones.',
    icon: GraduationCapIcon
  },
  {
    title: 'Roles',
    description: 'Map hiring requirements to Koyo evaluation rubrics.',
    icon: BriefcaseBusinessIcon
  },
  {
    title: 'Insights',
    description: 'Compare funnel health across programs and teams.',
    icon: BarChart3Icon
  }
]

const NavigationMenuDemo = () => {
  return (
    <NavigationMenu viewport={false}>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Product</NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className='grid w-[420px] gap-1 md:grid-cols-2'>
              {productSections.map(({ title, description, icon: Icon }) => (
                <NavigationMenuLink key={title} href='#'>
                  <div className='flex items-center gap-2 font-medium'>
                    <Icon className='text-koyo-brand' />
                    {title}
                  </div>
                  <p className='text-muted-foreground line-clamp-2 text-xs leading-snug'>{description}</p>
                </NavigationMenuLink>
              ))}
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink href='#'>Dashboard</NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

export default NavigationMenuDemo
