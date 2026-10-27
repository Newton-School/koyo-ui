// React Imports
import { Fragment } from 'react'
import type { ReactNode } from 'react'

// Util Imports
import { cn } from '@/lib/utils'

import type { VariableKey } from './message-templates'
import { isVariableKey, variableLabels } from './message-templates'

export type TextContext = {
  values: Record<VariableKey, string>
  showVariables: boolean
}

const VARIABLE_SPLIT = /(\{\{[a-z_]+\}\})/g
const BOLD_SPLIT = /(\*[^*\n]+\*)/g

export const VariableChip = ({ name, className }: { name: string; className?: string }) => {
  const label = isVariableKey(name) ? variableLabels[name] : undefined

  return (
    <span
      title={label}
      className={cn(
        'bg-koyo-color-purple-0 text-koyo-color-purple-700 ring-koyo-color-purple-200 dark:bg-koyo-color-purple-900/50 dark:text-koyo-color-purple-200 dark:ring-koyo-color-purple-700 mx-px inline rounded-[5px] [box-decoration-break:clone] px-1 py-px font-mono text-[0.84em] font-medium tracking-tight ring-1 ring-inset',
        className
      )}
    >
      {`{{${name}}}`}
    </span>
  )
}

/** Renders `{{variables}}` either as their example values or as highlighted chips. */
export const renderVariables = (text: string, { values, showVariables }: TextContext): ReactNode[] =>
  text.split(VARIABLE_SPLIT).map((part, index) => {
    if (index % 2 === 0) return part

    const name = part.slice(2, -2)

    if (showVariables || !isVariableKey(name)) return <VariableChip key={index} name={name} />

    return <Fragment key={index}>{values[name]}</Fragment>
  })

/** Renders WhatsApp-style `*bold*` plus variables. Newlines are kept for `white-space: pre-wrap` containers. */
export const renderRichText = (text: string, context: TextContext): ReactNode[] =>
  text.split(BOLD_SPLIT).map((part, index) =>
    index % 2 === 1 ? (
      <strong key={index} className='font-semibold'>
        {renderVariables(part.slice(1, -1), context)}
      </strong>
    ) : (
      <Fragment key={index}>{renderVariables(part, context)}</Fragment>
    )
  )

type Block = { type: 'paragraph'; lines: string[] } | { type: 'list'; items: string[] }

/** Splits a WhatsApp body into paragraphs and bullet lists for the email layout. */
export const toBlocks = (body: string): Block[][] =>
  body.split('\n\n').map(chunk => {
    const blocks: Block[] = []

    chunk.split('\n').forEach(line => {
      const isBullet = line.startsWith('• ')
      const last = blocks[blocks.length - 1]

      if (isBullet) {
        if (last?.type === 'list') last.items.push(line.slice(2))
        else blocks.push({ type: 'list', items: [line.slice(2)] })
      } else if (last?.type === 'paragraph') {
        last.lines.push(line)
      } else {
        blocks.push({ type: 'paragraph', lines: [line] })
      }
    })

    return blocks
  })

export const EmailBlocks = ({ chunks, context }: { chunks: Block[][]; context: TextContext }) => {
  return (
    <>
      {chunks.map((chunk, chunkIndex) => (
        <div key={chunkIndex} className='space-y-2'>
          {chunk.map((block, blockIndex) =>
            block.type === 'list' ? (
              <ul key={blockIndex} className='marker:text-koyo-brand list-disc space-y-1.5 pl-5'>
                {block.items.map(item => (
                  <li key={item} className='pl-1'>
                    {renderRichText(item, context)}
                  </li>
                ))}
              </ul>
            ) : (
              <p key={blockIndex}>
                {block.lines.map((line, lineIndex) => (
                  <Fragment key={lineIndex}>
                    {lineIndex > 0 && <br />}
                    {renderRichText(line, context)}
                  </Fragment>
                ))}
              </p>
            )
          )}
        </div>
      ))}
    </>
  )
}
