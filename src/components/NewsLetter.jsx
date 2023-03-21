import { Box, Button, Heading, Text } from '@chakra-ui/react'
import React from 'react'
import { HiArrowUpRight } from 'react-icons/hi2'

function NewsLetter() {
    return (
        <Box maxW='1200px' textAlign={'center'} m='0 auto' py={{ base: '8', sm: '24' }} px='4' >
            <Heading fontSize={{ base: '22px', md: '60px' }} fontWeight='600' >
                Your <Text as='span' bgGradient={'linear(180deg, #0AB2EA 0%, #0489B5 115%)'}
                    bgClip='text' >career</Text>  is waiting ahead
            </Heading>
            <Heading fontSize={{ base: '22px', md: '60px' }} fontWeight='600'>
                click on the button and <Text
                    as='span' bgGradient={'linear(180deg, #0AB2EA 0%, #0489B5 115%)'}
                    bgClip='text' color={'transparent'}
                >get started</Text>
            </Heading>

            <Button colorScheme={'blue'} px='12' py='7' mt='8'
                bgGradient={'linear(180deg, #0AB2EA 0%, #0489B5 115%)'}
                boxShadow='4px 4px 8px rgba(0, 0, 0, 0.25)'
                rightIcon={<HiArrowUpRight />}
            >
                Get Started
            </Button>
        </Box >
    )
}

export default NewsLetter



