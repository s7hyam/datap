import { Box, Button, ButtonGroup, Flex, Grid, GridItem, Heading, Image, Text } from '@chakra-ui/react'
import React from 'react'
import bg from '../assets/up.svg'
import stars from '../assets/bi_stars.svg'
import heroImg from '../assets/heroImg.png'

function Hero() {
    return (
        <Box maxW={'1400px'} m='0 auto' px='6' name='home'>
            <Box backgroundImage={bg} minH='80vh' bgRepeat={'no-repeat'} bgPos='50%' bgSize={'contain'} display='flex' alignItems={'center'} justifyContent='center'  >

                <Flex py={{ base: '8', sm: '24' }} alignItems={'center'} flexDir={{ base: 'column-reverse', lg: 'row' }} >

                    <Box flex={'1'} maxW={{ base: '100%', lg: '100%' }} m='0 auto' textAlign={{ base: 'left', sm: 'center', lg: 'left' }} >
                        <Button variant={'outline'} rounded='full' px='8' py={'2'} colorScheme='blue' >
                            <Image src={stars} h='21px' />  Trusted
                        </Button>

                        <Heading my='4' fontSize={{ base: '44px', sm: '80px' }} fontWeight='600' >
                            Data that's Proffesional
                        </Heading>
                        <Text maxW={{ base: '100%', sm: '70%', lg: 'md' }} color={'rgba(27, 27, 27, 0.85)'} fontWeight='normal' mb={'6'} >
                            if trading is a proffesion, then your data needs ot be proffesional too. Trading as proffesion presents Data Blaze
                        </Text>
                        <ButtonGroup>
                            <Button
                                px='12' bgColor={'white'} border='1px solid #000' color={'black'} py='7'
                                _hover={{
                                    boxShadow: '4px 4px 8px rgba(0, 0, 0, 0.25)',
                                    bgGradient: 'linear(180deg, #0AB2EA 0%, #0489B5 115%)',
                                    color: 'white', borderColor: 'transparent'
                                }}
                            >
                                LOG IN
                            </Button>
                            <Button colorScheme={'blue'} px='12' py='7'
                                bgGradient={'linear(180deg, #0AB2EA 0%, #0489B5 115%)'}
                                boxShadow='4px 4px 8px rgba(0, 0, 0, 0.25)' >
                                SIGN UP
                            </Button>
                        </ButtonGroup>
                    </Box>
                    <Box flex={'1'}>
                        <Image src={heroImg} pos={{ base: 'initial', lg: 'relative' }} top={'12'} />
                    </Box>
                </Flex>
            </Box >
        </Box >
    )
}

export default Hero