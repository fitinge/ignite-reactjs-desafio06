import Link from 'next/link';
import { Box, Flex, Heading, Image, SimpleGrid, Spacer, Text, Tooltip } from "@chakra-ui/react";

export default function Continente(){
    return (
        <Flex maxWidth={1440} direction="column" margin="auto" align="center" justify="center">
            <Flex height={[50, 100]} justifyContent="center" align="center" width="100%">
                <Link href="/"><a><Image src="/assets/chevron-left.svg" position="absolute" left="16px" /></a></Link>
                <Image src="/assets/logo.svg" width={[81,185]} />
            </Flex>
            <Flex 
                height={[150, 500]} 
                width="100%" 
                backgroundImage="url('https://picsum.photos/1440/500')"
                backgroundPosition="center"
                backgroundRepeat="no-repeat"
                backgroundSize="cover"
                align={["center","flex-start"]}
                justify={["center","flex-start"]}
                >
                <Heading as="h1" color="#F5F8FA" ml={[,"140px"]} mt={[,"369px"]} fontSize={["28px","48px"]} fontWeight="600" >Europa</Heading>
            </Flex>
            <Flex align="center" direction={["column", "row"]} justify="center" mt={["24px", "80px"]} ml={["16px", "140px"]} fontSize="24px" lineHeight="36px">
                <Text flex="1" mr={["16px","70px"]} fontWeight="400" lineHeight={["21px", "36px"]} fontSize={["14px", "24px"]} textAlign="justify">A Europa é, por convenção, um dos seis continentes do mundo. Compreendendo a península ocidental da Eurásia, a Europa geralmente divide-se da Ásia a leste pela divisória de águas dos montes Urais, o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste</Text>
                <Flex flex="1" align="center" justify="space-around">
                    <Flex direction="column">
                        <Heading color="#FFBA08" fontSize={["24px","50px"]} fontWeight="600" textAlign="center">50</Heading>
                        <Text color="#47585B" fontWeight="400" fontSize={["16px","24px"]} textAlign="center">países</Text>
                    </Flex>
                    <Flex direction="column" pl="20px">
                        <Heading color="#FFBA08" fontSize={["24px","50px"]} fontWeight="600" textAlign="center">60</Heading>
                        <Text color="#47585B" fontWeight="400" fontSize={["16px","24px"]} textAlign="center">línguas</Text>
                    </Flex>
                    <Flex direction="column" pl="20px">
                        <Heading color="#FFBA08" fontSize={["24px","50px"]} fontWeight="600" textAlign="center">27</Heading>
                        <Text color="#47585B" fontWeight="400" fontSize={["16px","24px"]} textAlign="center">cidades +100 <Tooltip hasArrow label="100 cidades mais visitadas do mundo"><Box color="gray.500" fontSize="14px" as="span">ⓘ</Box></Tooltip></Text>
                    </Flex>
                </Flex>
            </Flex>
            <Flex pt="80px" direction="column" align="flex-start">
                <Heading width="100%" as="h2" color="#47585B" fontWeight="500" fontSize={["24px", "36px"]} ml={["16px","140px"]}>Cidades +100</Heading>
                <SimpleGrid mt={["20px", "40px"]} mx={["16px","140px"]} gap={["20px","45px"]} mb="35px" columns={[1,4]}>
                    <Box width="256px" borderRadius="lg" overflow="hidden" border="1px solid rgba(255, 186, 8, 0.5);">
                        <Image src="https://picsum.photos/256/173?1" />
                        <Flex align="center">
                            <Flex my="18px" ml="24px" direction="column" flex="1">
                                <Heading mb="12px" fontSize="20px" fontWeight="500" color="#47585B">Londres</Heading>
                                <Text fontSize="1z6px" fontWeight="400" color="#999999">Reino Unido</Text>
                            </Flex>
                            <Image mr="24px" borderRadius="50%" src="https://picsum.photos/30/30?1" />
                        </Flex>
                    </Box>
                    <Box width="256px" borderRadius="lg" overflow="hidden" border="1px solid rgba(255, 186, 8, 0.5);">
                        <Image src="https://picsum.photos/256/173?2" />
                        <Flex align="center">
                            <Flex my="18px" ml="24px" direction="column" flex="1">
                                <Heading mb="12px" fontSize="20px" fontWeight="500" color="#47585B">Londres</Heading>
                                <Text fontSize="1z6px" fontWeight="400" color="#999999">Reino Unido</Text>
                            </Flex>
                            <Image mr="24px" borderRadius="50%" src="https://picsum.photos/30/30?2" />
                        </Flex>
                    </Box>
                    <Box width="256px" borderRadius="lg" overflow="hidden" border="1px solid rgba(255, 186, 8, 0.5);">
                        <Image src="https://picsum.photos/256/173?3" />
                        <Flex align="center">
                            <Flex my="18px" ml="24px" direction="column" flex="1">
                                <Heading mb="12px" fontSize="20px" fontWeight="500" color="#47585B">Londres</Heading>
                                <Text fontSize="1z6px" fontWeight="400" color="#999999">Reino Unido</Text>
                            </Flex>
                            <Image mr="24px" borderRadius="50%" src="https://picsum.photos/30/30?3" />
                        </Flex>
                    </Box>
                    <Box width="256px" borderRadius="lg" overflow="hidden" border="1px solid rgba(255, 186, 8, 0.5);">
                        <Image src="https://picsum.photos/256/173?4" />
                        <Flex align="center">
                            <Flex my="18px" ml="24px" direction="column" flex="1">
                                <Heading mb="12px" fontSize="20px" fontWeight="500" color="#47585B">Londres</Heading>
                                <Text fontSize="1z6px" fontWeight="400" color="#999999">Reino Unido</Text>
                            </Flex>
                            <Image mr="24px" borderRadius="50%" src="https://picsum.photos/30/30?4" />
                        </Flex>
                    </Box>
                    <Box width="256px" borderRadius="lg" overflow="hidden" border="1px solid rgba(255, 186, 8, 0.5);">
                        <Image src="https://picsum.photos/256/173?5" />
                        <Flex align="center">
                            <Flex my="18px" ml="24px" direction="column" flex="1">
                                <Heading mb="12px" fontSize="20px" fontWeight="500" color="#47585B">Londres</Heading>
                                <Text fontSize="1z6px" fontWeight="400" color="#999999">Reino Unido</Text>
                            </Flex>
                            <Image mr="24px" borderRadius="50%" src="https://picsum.photos/30/30?5" />
                        </Flex>
                    </Box>
                    
                </SimpleGrid>
            </Flex>
        </Flex>
    )
}