import { Card, CardBody, CardHeader, Heading, Text } from '@chakra-ui/react'
import React from 'react'

function ServiceCard({ title, desc }) {
    return (
        <Card bgGradient={'linear(98.05deg, #0AB2EA 5.59%, #6F0478 296.05%)'} h='100%' >
            {/* <CardHeader height={'140px'} > */}
            {/* </CardHeader> */}
            <CardBody>
                <Heading color={'white'} fontSize={'28px'} fontWeight='600'  >{title}</Heading>
                <Text mt='2' color={'rgba(27, 27, 27, 0.85)'} >{desc}</Text>
            </CardBody>
        </Card>
    )
}

export default ServiceCard