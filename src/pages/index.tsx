import { Flex, Image, Heading, Divider, useMediaQuery, SimpleGrid } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from 'swiper/react';

import Link from 'next/link';

import SwiperCore, { Pagination } from 'swiper';

SwiperCore.use([Pagination]);

export default function Home() {

  const [isSmallThan1070] = useMediaQuery("(max-width: 1070px)")

  return (
    <Flex maxWidth={1440} direction="column" margin="auto" align="center" justify="center">
      <Flex height={[50, 100]}>
        <Image src="/assets/logo.svg" width={[81,185]} />
      </Flex>
      <Flex 
        height={[163, 335]} 
        width="100%" 
        backgroundImage="url('/assets/headerBg.jpg')"
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        backgroundSize="cover"
        >
          <Flex flex="1" direction="column" ml={[4, 140]} align="flex-start" justify="center">
            <Heading as="h1" fontWeight="500" color="#F5F8FA" fontSize={["20","36"]} lineHeight={["30px","54px"]} mb="20px">5 Continentes,<br />infinitas possibilidades.</Heading>
            <Heading as="h2" fontWeight="normal" lineHeight={["21px","30px"]} color="#DADADA" fontSize={["14","20"]} max-width="524px">Chegou a hora de tirar do papel a viagem que você sempre sonhou.</Heading>
          </Flex>
          {!isSmallThan1070 && (
            <Flex flex="1">
              <Image 
                src="/assets/airplane.svg" 
                transform="rotate(3deg)" 
                position="relative"
                marginY="100px"
                marginRight="140"
                height="270"
              />
            </Flex>
          )}
          
      </Flex>
      <SimpleGrid height="339px" columns={[2, 5]} gap={5}>
          <Flex display="flex" direction={["row", "column"]} align="center" justify="center">
          {!isSmallThan1070 ? (
              <Image src="/assets/cocktail1.svg" width="85px" height="85px" margin="24px" />
            ) : (
              <Image src="/assets/circulo.svg" mr={2} />
            )}
            <Heading as="h3" fontWeight="600" fontSize={["18px", "24px"]} color="#47585B">vida noturna</Heading>
          </Flex>
          <Flex display="flex" direction={["row", "column"]} align="center" justify="center">
          {!isSmallThan1070 ? (
              <Image src="/assets/surf1.svg" width="85px" height="85px" margin="24px" />
            ) : (
              <Image src="/assets/circulo.svg" mr={2} />
            )}
            <Heading as="h3" fontWeight="600" fontSize={["18px", "24px"]} color="#47585B">praia</Heading>
          </Flex>
          <Flex display="flex" direction={["row", "column"]} align="center" justify="center">
          {!isSmallThan1070 ? (
              <Image src="/assets/building1.svg" width="85px" height="85px" margin="24px" />
            ) : (
              <Image src="/assets/circulo.svg" mr={2} />
            )}
            <Heading as="h3" fontWeight="600" fontSize={["18px", "24px"]} color="#47585B">moderno</Heading>
          </Flex>
          <Flex display="flex" direction={["row", "column"]} align="center" justify="center">
          {!isSmallThan1070 ? (
              <Image src="/assets/museum1.svg" width="85px" height="85px" margin="24px" />
            ) : (
              <Image src="/assets/circulo.svg" mr={2} />
            )}
            <Heading as="h3" fontWeight="600" fontSize={["18px", "24px"]} color="#47585B">clássico</Heading>
          </Flex>
          <Flex display="flex" direction={["row", "column"]} align="center" justify="center">
            {!isSmallThan1070 ? (
              <Image src="/assets/earth1.svg" width="85px" height="85px" margin="24px" />
            ) : (
              <Image src="/assets/circulo.svg" mr={2} />
            )}
            <Heading as="h3" fontWeight="600" fontSize={["18px", "24px"]} color="#47585B">e mail...</Heading>
          </Flex>
      </SimpleGrid>
      <Divider width="90px" border="2px solid #47585B"  />
      <Flex my="52px">
        <Heading as="h2" color="#47585B" fontWeight="500" fontSize={["20px", "36px"]} lineHeight={["30px","54px"]} textAlign="center">Vamos nessa?<br />Então escolha seu continente</Heading>
      </Flex>
      
        <Swiper
          slidesPerView={1}
          pagination={{ clickable: true }}
          style={{width: '100%', height: isSmallThan1070 ? '250px' : '450px', marginBottom: '40px'}}
        >
          <SwiperSlide>
            <Flex 
              backgroundImage="url(https://picsum.photos/1240/450)" 
              backgroundPosition="center"
              backgroundRepeat="no-repeat"
              backgroundSize="cover"
              height="100%"
              align="center"
              justify="center"
              direction="column">
                <Link href="/europa">
                  <a>
                    <Heading as="h2" color="#F5F8FA" fontWeight="bold" fontSize={["24px","48px"]} paddingBottom="16px">Europa</Heading>
                    <Heading as="h3" color="#DADADA" fontWeight="bold" fontSize={["14px","24px"]}>O continente mais antigo.</Heading>
                  </a>
                </Link>
            </Flex>
          </SwiperSlide>
          <SwiperSlide>
            <Flex 
              backgroundImage="url(https://picsum.photos/1240/450?1)" 
              backgroundPosition="center"
              backgroundRepeat="no-repeat"
              backgroundSize="cover"
              height="100%"
              align="center"
              justify="center"
              direction="column">
                <Link href="/europa">
                  <a>
                    <Heading as="h2" color="#F5F8FA" fontWeight="bold" fontSize={["24px","48px"]} paddingBottom="16px">Europa</Heading>
                    <Heading as="h3" color="#DADADA" fontWeight="bold" fontSize={["14px","24px"]}>O continente mais antigo.</Heading>
                  </a>
                </Link>
            </Flex>
          </SwiperSlide>
          <SwiperSlide>
            <Flex 
              backgroundImage="url(https://picsum.photos/1240/450?2)" 
              backgroundPosition="center"
              backgroundRepeat="no-repeat"
              backgroundSize="cover"
              height="100%"
              align="center"
              justify="center"
              direction="column">
                <Link href="/europa">
                  <a>
                    <Heading as="h2" color="#F5F8FA" fontWeight="bold" fontSize={["24px","48px"]} paddingBottom="16px">Europa</Heading>
                    <Heading as="h3" color="#DADADA" fontWeight="bold" fontSize={["14px","24px"]}>O continente mais antigo.</Heading>
                  </a>
                </Link>
            </Flex>
          </SwiperSlide>
          <SwiperSlide>
            <Flex 
              backgroundImage="url(https://picsum.photos/1240/450?3)" 
              backgroundPosition="center"
              backgroundRepeat="no-repeat"
              backgroundSize="cover"
              height="100%"
              align="center"
              justify="center"
              direction="column">
                <Link href="/europa">
                  <a>
                    <Heading as="h2" color="#F5F8FA" fontWeight="bold" fontSize={["24px","48px"]} paddingBottom="16px">Europa</Heading>
                    <Heading as="h3" color="#DADADA" fontWeight="bold" fontSize={["14px","24px"]}>O continente mais antigo.</Heading>
                  </a>
                </Link>
            </Flex>
          </SwiperSlide>
          <SwiperSlide>
            <Flex 
              backgroundImage="url(https://picsum.photos/1240/450?4)" 
              backgroundPosition="center"
              backgroundRepeat="no-repeat"
              backgroundSize="cover"
              height="100%"
              align="center"
              justify="center"
              direction="column">
                <Link href="/europa">
                  <a>
                    <Heading as="h2" color="#F5F8FA" fontWeight="bold" fontSize={["24px","48px"]} paddingBottom="16px">Europa</Heading>
                    <Heading as="h3" color="#DADADA" fontWeight="bold" fontSize={["14px","24px"]}>O continente mais antigo.</Heading>
                  </a>
                </Link>
            </Flex>
          </SwiperSlide>
          
          
        </Swiper>
      
    </Flex>
  )
}
