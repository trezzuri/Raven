import { ChannelList } from '../../feature/channels/ChannelList'
import { DirectMessageList } from '../../feature/direct-messages/DirectMessageList'
import { SidebarItem } from './SidebarComp'
import { AccessibleIcon, Box, Flex, ScrollArea, Text } from '@radix-ui/themes'
import useUnreadMessageCount from '@/hooks/useUnreadMessageCount'
import PinnedChannels from './PinnedChannels'
import { TbMessage } from 'react-icons/tb'
import { FiBookmark } from 'react-icons/fi'

export const SidebarBody = () => {

    const unread_count = useUnreadMessageCount()

    return (
        <ScrollArea type="hover" scrollbars="vertical" className='h-[calc(100vh-7rem)]'>
            <Flex direction='column' gap='2' className='overflow-x-hidden pb-12 sm:pb-0' px='2'>
                <Flex direction='column' gap='2' className='pb-0.5'>
                    <Flex direction='column' gap='1'>
                        <Box>
                            <SidebarItem to={'threads'} className='py-1'>
                                <AccessibleIcon label='Threads'>
                                    <TbMessage className='text-gray-12 dark:text-gray-300 mt-0.5 sm:text-base text-lg' />
                                </AccessibleIcon>
                                <Box><SidebarButtonText label='Threads' /></Box>
                            </SidebarItem>
                        </Box>
                        <Box>
                            <SidebarItem to={'saved-messages'} className='py-1'>
                                <AccessibleIcon label='Saved Messages'>
                                    <FiBookmark className='text-gray-12 dark:text-gray-300 mt-0.5 sm:text-sm text-base' />
                                </AccessibleIcon>
                                <Box><SidebarButtonText label='Saved Messages' /></Box>
                            </SidebarItem>
                        </Box>
                    </Flex>
                    <PinnedChannels unread_count={unread_count?.message} />
                </Flex>
                <ChannelList unread_count={unread_count?.message} />
                <DirectMessageList unread_count={unread_count?.message} />
            </Flex>
        </ScrollArea>
    )
}

const SidebarButtonText = ({ label }: { label: string }) => {
    return (
        <Text size={{
            initial: '3',
            md: '2'
        }} weight='bold' className='text-gray-12 dark:text-gray-300'>{label}</Text>
    )
}