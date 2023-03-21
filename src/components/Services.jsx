import { Box, Grid, GridItem, Heading, Text } from '@chakra-ui/react'
import React from 'react'
import ServiceCard from './ServiceCard'

function Services() {
    return (
        <Box maxW={'1400px'} mx='auto' py={{ base: '8', sm: '24' }} px='4' name='services' >
            <Box my={'8'} >
                <Heading fontSize={'60px'} fontWeight='600' color={'#1b1b1b'} >Featrures</Heading>
                <Text color='rgba(0, 0, 0, 0.7)' >You have been looking for</Text>
            </Box>

            <Grid gridTemplateColumns={{ base: '1fr', sm: 'repeat(2,1fr)', lg: 'repeat(4,1fr)' }} gap='6' alignItems={'center'}  >
                <GridItem h='full' >
                    <ServiceCard
                        title={'Superior Data '}
                        desc='Covers all the data points meant for professional traders and investors in the market.'
                    />
                </GridItem>

                <GridItem h='100%' >
                    <ServiceCard
                        title={'Robust Performance'}
                        desc='Offers high frequency data for the market with ultra low latency.'
                    />
                </GridItem>

                <GridItem h='100%'>
                    <ServiceCard
                        title={'Practical to use'}
                        desc='Data points available at a glance, no strangle and signal based struggle.'
                    />
                </GridItem>

                <GridItem h='100%' >
                    <ServiceCard
                        title={'Performance benchmark'}
                        desc='Offers you live data from exchange along with charts from Trading View directly.'
                    />
                </GridItem>

            </Grid>
        </Box >
    )
}

export default Services