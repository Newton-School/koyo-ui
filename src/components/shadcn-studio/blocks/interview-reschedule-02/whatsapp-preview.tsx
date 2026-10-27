// Third-party Imports
import {
  ArrowLeftIcon,
  BatteryFullIcon,
  CameraIcon,
  CheckIcon,
  EllipsisVerticalIcon,
  MicIcon,
  PaperclipIcon,
  PhoneIcon,
  SignalIcon,
  SmileIcon,
  SquareArrowOutUpRightIcon,
  WifiIcon
} from 'lucide-react'

import type { MessageTemplate } from './message-templates'
import { SENDER_NAME } from './message-templates'
import type { TextContext } from './rich-text'
import { renderRichText } from './rich-text'
import { KoyoMark } from './koyo-logo'

/**
 * Phone mock of a WhatsApp Business template message. Colours are fixed WhatsApp-like values with
 * dark-mode equivalents; the rest of the page uses Koyo semantic tokens.
 */
const WhatsAppPreview = ({ message, context }: { message: MessageTemplate; context: TextContext }) => {
  const { body, button } = message.whatsapp

  return (
    <div className='mx-auto w-full max-w-[340px] rounded-[2.75rem] bg-neutral-900 p-2.5 shadow-[0_24px_60px_-20px_rgba(0,0,0,0.45)] ring-1 ring-black/10 dark:bg-neutral-950 dark:ring-white/10'>
      <div className='flex min-h-[620px] flex-col overflow-hidden rounded-[2.2rem] bg-[#ECE5DD] dark:bg-[#0B141A]'>
        {/* Status bar + chat header */}
        <div className='bg-[#075E54] text-white dark:bg-[#1F2C34]' aria-hidden='true'>
          <div className='flex items-center justify-between px-6 pt-3 pb-1 text-[11px] font-semibold'>
            <span>{message.send.clock.replace(/ [AP]M$/, '')}</span>
            <span className='flex items-center gap-1'>
              <SignalIcon className='size-3' />
              <WifiIcon className='size-3' />
              <BatteryFullIcon className='size-3.5' />
            </span>
          </div>
        </div>
        <div className='flex items-center gap-2 bg-[#075E54] px-2.5 pt-1 pb-2.5 text-white dark:bg-[#1F2C34]'>
          <ArrowLeftIcon className='size-5 shrink-0' aria-hidden='true' />
          <span className='grid size-9 shrink-0 place-items-center rounded-full bg-white' aria-hidden='true'>
            <KoyoMark className='size-6 rounded-md' />
          </span>
          <div className='min-w-0 flex-1 leading-tight'>
            <p className='flex items-center gap-1 text-[15px] font-semibold'>
              <span className='truncate'>{SENDER_NAME}</span>
              <span className='grid size-3.5 shrink-0 place-items-center rounded-full bg-[#25D366]'>
                <CheckIcon className='size-2.5 text-white' strokeWidth={4} aria-hidden='true' />
                <span className='sr-only'>Verified business</span>
              </span>
            </p>
            <p className='text-[11.5px] text-white/75'>Business account</p>
          </div>
          <span className='flex items-center gap-3.5 pr-1' aria-hidden='true'>
            <PhoneIcon className='size-[18px]' />
            <EllipsisVerticalIcon className='size-5' />
          </span>
        </div>

        {/* Chat */}
        <div className='flex flex-1 flex-col justify-end gap-3 bg-[radial-gradient(rgba(0,0,0,0.045)_1px,transparent_1px)] [background-size:16px_16px] px-3 py-4 dark:bg-[radial-gradient(rgba(255,255,255,0.035)_1px,transparent_1px)]'>
          <p className='mx-auto rounded-md bg-white/95 px-2.5 py-1 text-[11px] font-medium text-[#54656F] shadow-sm dark:bg-[#182229] dark:text-[#8696A0]'>
            <time dateTime={message.send.iso}>{message.send.day}</time>
          </p>

          <div className='relative mr-6 ml-2'>
            {/* Bubble tail */}
            <svg
              viewBox='0 0 8 13'
              className='absolute top-0 -left-2 h-[13px] w-2 fill-white dark:fill-[#202C33]'
              aria-hidden='true'
            >
              <path d='M8 0H1.5C0.2 0-.3 1.6.7 2.4L8 9.5V0Z' />
            </svg>
            <div className='overflow-hidden rounded-lg rounded-tl-none bg-white shadow-[0_1px_0.5px_rgba(11,20,26,0.13)] dark:bg-[#202C33]'>
              <div className='px-2.5 pt-2 pb-1.5 text-[13.5px] leading-[1.42] break-words whitespace-pre-wrap text-[#111B21] dark:text-[#E9EDEF]'>
                {renderRichText(body, context)}
              </div>
              <p className='flex items-center justify-end gap-1 px-2 pb-1.5 text-[11px] text-[#667781] dark:text-[#8696A0]'>
                <time dateTime={message.send.iso}>{message.send.clock}</time>
              </p>
              {button && (
                <div className='flex items-center justify-center gap-1.5 border-t border-black/[0.08] px-3 py-2.5 text-[14px] font-medium text-[#027EB5] dark:border-white/[0.08] dark:text-[#53BDEB]'>
                  <SquareArrowOutUpRightIcon className='size-4' aria-hidden='true' />
                  {button.label}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Composer */}
        <div className='flex items-center gap-1.5 px-2 pt-1 pb-4' aria-hidden='true'>
          <div className='flex h-11 flex-1 items-center gap-2.5 rounded-full bg-white px-3 text-[#8696A0] shadow-sm dark:bg-[#2A3942]'>
            <SmileIcon className='size-5 shrink-0' />
            <span className='flex-1 text-[14px]'>Message</span>
            <PaperclipIcon className='size-5 shrink-0 -rotate-45' />
            <CameraIcon className='size-5 shrink-0' />
          </div>
          <span className='grid size-11 shrink-0 place-items-center rounded-full bg-[#00A884] text-white'>
            <MicIcon className='size-5' />
          </span>
        </div>
      </div>
    </div>
  )
}

export default WhatsAppPreview
