import { Tabs, TabsContent, TabsList, TabsTrigger } from '@newtonschool/koyo-ui/tabs'

const tabs = [
  {
    name: 'Explore',
    value: 'explore',
    content: (
      <>
        Discover <span className='text-foreground font-semibold'>fresh ideas</span>, trending topics, and hidden gems
        curated just for you. Start exploring and let your curiosity lead the way!
      </>
    )
  },
  {
    name: 'Favorites',
    value: 'favorites',
    content: (
      <>
        All your <span className='text-foreground font-semibold'>favorites</span> are saved here. Revisit articles,
        collections, and moments you love, any time you want a little inspiration.
      </>
    )
  },
  {
    name: 'Surprise Me',
    value: 'surprise',
    content: (
      <>
        <span className='text-foreground font-semibold'>Surprise!</span> Here&apos;s something unexpected—a fun fact, a
        quirky tip, or a daily challenge. Come back for a new surprise every day!
      </>
    )
  }
]

const TabsCustomDemo = () => {
  return (
    <div className='w-full max-w-md'>
      <Tabs defaultValue='explore' className='gap-4'>
        <TabsList className='bg-background gap-1'>
          {tabs.map(tab => (
            <TabsTrigger
              key={tab.value}
              value={tab.value}
              className='text-muted-foreground hover:bg-muted hover:text-foreground data-[state=active]:border-koyo-button-primary data-[state=active]:bg-koyo-button-primary data-[state=active]:text-koyo-button-primary-foreground data-[state=active]:hover:bg-koyo-button-primary-hover transition-colors duration-300 hover:border'
            >
              {tab.name}
            </TabsTrigger>
          ))}
        </TabsList>

        {tabs.map(tab => (
          <TabsContent key={tab.value} value={tab.value}>
            <p className='text-muted-foreground text-sm'>{tab.content}</p>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  )
}

export default TabsCustomDemo
