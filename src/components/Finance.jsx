import { Button, Grid, GridItem, Heading, Image, Text } from '@chakra-ui/react'
import React from 'react'
import heroImg from '../assets/heroImg.png'
function Finance() {
    return (
        <>
            <Grid name='about' gridTemplateColumns={{ base: '1fr', lg: 'repeat(2,1fr)' }} alignItems='center' maxW={'1400px'} mx='auto' py={'24'} px='4' >
                <GridItem>
                    <Image src={heroImg} maxW={{ base: '100%', lg: '100%' }} m='0 auto' />
                </GridItem>
                <GridItem maxW={{ base: 'full', sm: 'xl ', lg: '100%' }} textAlign={{ base: 'left', sm: 'center' }} m='0 auto ' >
                    <Heading fontSize={{ base: '32px', sm: '60px' }} fontWeight='600' >Finance can’t hold your back now.</Heading>
                    <Text py={'8'} color='rgba(27, 27, 27, 0.85)' >If finance is your challenge then finance can’t challenge, if you are a part of trading as profession. we are there to support you. To know more about how we can help you.</Text>
                    <Button colorScheme={'blue'} px='12' py='7'
                        bgGradient={'linear(180deg, #0AB2EA 0%, #0489B5 115%)'}
                        boxShadow='4px 4px 8px rgba(0, 0, 0, 0.25)' >
                        Connect Now
                    </Button>
                </GridItem>
            </Grid>
        </>
    )
}

export default Finance