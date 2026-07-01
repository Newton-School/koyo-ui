import assert from 'assert'

import { isInternalPathActive, normalizeInternalPathname } from './pathname'

assert.equal(normalizeInternalPathname('@newtonschool/koyo-ui/docs/components/button/'), '/docs/components/button')
assert.equal(normalizeInternalPathname('/docs/components/button#animated-variants'), '/docs/components/button')
assert.equal(normalizeInternalPathname('/docs/components/button?tab=preview'), '/docs/components/button')
assert.equal(normalizeInternalPathname('@newtonschool/koyo-ui/'), '/')

assert.equal(isInternalPathActive('@newtonschool/koyo-ui/docs/components/button/', '/docs/components/button', true), true)
assert.equal(
  isInternalPathActive('@newtonschool/koyo-ui/docs/components/button/', '/docs/components/button#animated-variants', true),
  true
)
assert.equal(isInternalPathActive('@newtonschool/koyo-ui/docs/koyo/button/', '/docs/koyo', false), true)
assert.equal(isInternalPathActive('@newtonschool/koyo-ui/docs/koyo-button/', '/docs/koyo', false), false)
