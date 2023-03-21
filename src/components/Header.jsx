import React, { useState, useEffect, useRef } from 'react'
import { Box, Button, Drawer, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, HStack, Image, ListItem, UnorderedList, useDisclosure } from '@chakra-ui/react'
import { Link } from 'react-scroll'
import logo from '../assets/logo.svg'
import stars from '../assets/bi_stars.svg'
import { FaBacon, FaBars } from 'react-icons/fa'

export const Header = () => {

    const [fixed, setFixed] = useState(false)



    useEffect(
        () => {
            window.addEventListener('scroll', () => {
                if (window.scrollY > 0) {
                    setFixed(true)
                } else {
                    setFixed(false)
                }
            })
        }, [])

    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <Box width='100%' zIndex={'999'} pos={fixed ? 'fixed' : ''} bgColor='white'  >
            <HStack
                maxW={'1480px'} m='0 auto' py='3' px='3' justifyContent={'space-between'} pos='relative'
                _after={{
                    content: "''", pos: 'absolute', width: '90%', height: '2px', backgroundColor: '#d2d2d2', bottom: '0', left: '5%', borderRadius: '100%',
                    bgGradient: 'linear(270deg, rgba(27, 27, 27, 0) 1.87 %, rgba(27, 27, 27, 0.3) 48.75 %, rgba(27, 27, 27, 0) 100 %)'

                }}  >

                <Link to='/' > <Image src={logo} /> </Link>
                <Button onClick={onOpen} color='#0489B5' variant='ghost' display={{ lg: 'none' }} >
                    <FaBars />
                </Button>

                <UnorderedList display={{ base: 'none', lg: 'flex' }} listStyleType={'none'}  >

                    <ListItem mx={'6'} cursor='pointer'>
                        <Link to='home' spy smooth >Home</Link>
                    </ListItem  >

                    <ListItem mx={'6'} cursor='pointer' >
                        <Link to='services' smooth spy >Our Products</Link>
                    </ListItem  >

                    <ListItem mx={'6'} cursor='pointer'>
                        <Link to='about' spy smooth >About TAPDATA</Link>
                    </ListItem>
                </UnorderedList>

                <UnorderedList listStyleType={'none'} display={{ base: 'none', lg: 'flex' }}  >

                    <ListItem cursor='pointer' >
                        <Link to='/' style={{ padding: '0 18px', borderRight: '2px solid #d2d2d2' }} >Log in</Link>
                    </ListItem  >

                    <ListItem mx={'18px'} display='flex' cursor=' pointer' >
                        <Link to='/'> Create Account</Link>
                        <Image ml='2' src={stars} />
                    </ListItem>

                </UnorderedList>
            </HStack >

            <Drawer
                isOpen={isOpen}
                placement='right'
                onClose={onClose}
                size='full'
            >
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton color={'#0489B5'} />
                    <UnorderedList listStyleType={'none'} display='flex' flexDir={'column'} alignItems='center' justifyContent={'center'} h='100%' gap='8' >

                        <ListItem mx={'6'} cursor='pointer' fontWeight={'semibold'}
                            as='span' bgGradient={'linear(180deg, #0AB2EA 0%, #0489B5 115%)'}
                            bgClip='text' color={'transparent'}
                        >
                            <Link to='home' smooth spy onClick={onClose} >Home</Link>
                        </ListItem  >

                        <ListItem mx={'6'} cursor='pointer' fontWeight={'semibold'} >
                            <Link to='services' smooth spy onClick={onClose}>Our Products</Link>
                        </ListItem  >

                        <ListItem mx={'6'} cursor='pointer' fontWeight={'semibold'}>
                            <Link to='about' onClick={onClose} smooth spy>About TAPDATA</Link>
                        </ListItem>
                    </UnorderedList>
                </DrawerContent>
            </Drawer>
        </Box >

    )
}
