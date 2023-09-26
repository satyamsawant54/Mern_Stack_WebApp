import { Flex, Text } from '@chakra-ui/react';

const Footer = () => {
    return (
        <Flex as='footer' justifyContent='center' py='7' bgColor='black'>
            <Text color='wheat' fontFamily='Courier' fontWeight='bold'>
                Copyright {new Date().getFullYear()}__e Shop__All Rights are Reserved
            </Text>
        </Flex>
    );
};

export default Footer;
